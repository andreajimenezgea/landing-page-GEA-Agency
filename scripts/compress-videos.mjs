import { execSync } from 'child_process';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const VIDEO_DIR = join(process.cwd(), 'public', 'testimonios');

async function compress() {
  const files = await readdir(VIDEO_DIR);
  const mp4Files = files.filter(f => extname(f).toLowerCase() === '.mp4');

  console.log(`Found ${mp4Files.length} MP4 files to compress\n`);

  for (const file of mp4Files) {
    const inputPath = join(VIDEO_DIR, file);
    const outputPath = join(VIDEO_DIR, file.replace(/\.mp4$/, '-compressed.mp4'));

    try {
      const inputStats = await stat(inputPath);
      console.log(`⏳ ${file} (${(inputStats.size/1024/1024).toFixed(1)}MB)...`);

      // Compress with H.264 (widely compatible), CRF 28, scale to 720p
      execSync(
        `ffmpeg -i "${inputPath}" -vf "scale=-2:720" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k -y "${outputPath}"`,
        { stdio: 'pipe', timeout: 300000 }
      );

      const outputStats = await stat(outputPath);
      const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✓ ${file} (${(inputStats.size/1024/1024).toFixed(1)}MB → ${(outputStats.size/1024/1024).toFixed(1)}MB, -${savings}%)\n`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}\n`);
    }
  }
}

compress();
