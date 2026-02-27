import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');

// We want to add these keywords to the images via EXIF
const EXIF_METADATA = {
    IFD0: {
        ImageDescription: 'Gator Grafix - Custom Signs, Vehicle Wraps, T-Shirts, and Business Cards in Pensacola, Florida.',
        Artist: 'Gator Grafix',
        Copyright: 'Gator Grafix, Pensacola FL',
        Software: 'Gator Grafix Image Optimizer'
    }
};

async function processImages() {
    const files = await fs.readdir(PUBLIC_DIR);

    for (const file of files) {
        const filePath = path.join(PUBLIC_DIR, file);
        const ext = path.extname(file).toLowerCase();

        // We only process webp, png, jpg, jpeg
        if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
            continue;
        }

        try {
            console.log(`Processing: ${file}`);
            const image = sharp(filePath);
            const metadata = await image.metadata();

            // If the image is extremely large, we can resize it to a reasonable max width
            // Let's set a max width of 1920 pixels to fix "oversized images" issue
            let processed = image;
            if (metadata.width > 1920) {
                processed = processed.resize({ width: 1920, withoutEnlargement: true });
                console.log(`  Resizing from ${metadata.width}px to 1920px width...`);
            }

            // We will set Exif metadata to include keywords "Gator Grafix, Pensacola, Florida"
            processed = processed.withMetadata({
                exif: EXIF_METADATA
            });

            const buffer = await processed.toBuffer();
            await fs.writeFile(filePath, buffer);

            console.log(`  Optimized and saved: ${file}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err.message);
        }
    }
}

processImages().then(() => {
    console.log('Image optimization completed.');
});
