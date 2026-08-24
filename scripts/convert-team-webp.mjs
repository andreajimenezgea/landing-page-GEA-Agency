import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const TEAM_DIR = join(process.cwd(), 'public', 'Equipo');

async function convert() {
  const files = await readdir(TEAM_DIR);
  const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png');

  console.log(`Found ${pngFiles.length} PNG files to convert\n`);

  for (const file of pngFiles) {
    const inputPath = join(TEAM_DIR, file);
    const outputPath = join(TEAM_DIR, file.replace(/\.png$/, '.webp'));

    try {
      const inputStats = await stat(inputPath);
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const outputStats = await stat(outputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${file} → ${file.replace(/\.png$/, '.webp')} (${(inputStats.size/1024).toFixed(0)}KB → ${(outputStats.size/1024).toFixed(0)}KB, -${savings}%)`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }
}

convert();
