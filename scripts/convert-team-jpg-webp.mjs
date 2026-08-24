import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const TEAM_DIR = join(process.cwd(), 'public', 'Equipo');

async function convert() {
  const files = await readdir(TEAM_DIR);
  const jpgFiles = files.filter(f => {
    const ext = extname(f).toLowerCase();
    return ext === '.jpg' || ext === '.jpeg';
  });

  console.log(`Found ${jpgFiles.length} JPG/JPEG files to convert\n`);

  for (const file of jpgFiles) {
    const inputPath = join(TEAM_DIR, file);
    const outputPath = join(TEAM_DIR, file.replace(/\.(jpg|jpeg)$/, '.webp'));

    try {
      const inputStats = await stat(inputPath);
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      const outputStats = await stat(outputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${file} → ${file.replace(/\.(jpg|jpeg)$/, '.webp')} (${(inputStats.size/1024).toFixed(0)}KB → ${(outputStats.size/1024).toFixed(0)}KB, -${savings}%)`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }
}

convert();
