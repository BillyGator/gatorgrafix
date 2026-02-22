/**
 * generate-favicons.js
 * 
 * Generates all required favicon sizes from Gator_Favicon.svg
 * using the sharp library (already installed as a devDependency).
 * 
 * Run with: node generate-favicons.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT_SVG = path.join(__dirname, 'public', 'Gator_Favicon.svg');
const PUBLIC_DIR = path.join(__dirname, 'public');

// The sizes we need
const sizes = [
    { name: 'favicon-16x16.png', width: 16, height: 16 },
    { name: 'favicon-32x32.png', width: 32, height: 32 },
    { name: 'favicon-48x48.png', width: 48, height: 48 },
    { name: 'apple-touch-icon.png', width: 180, height: 180 },
    { name: 'favicon-192x192.png', width: 192, height: 192 },
    { name: 'favicon-512x512.png', width: 512, height: 512 },
];

console.log('🐊 Gator Grafix Favicon Generator');
console.log('====================================');
console.log(`📂 Source: ${INPUT_SVG}`);
console.log(`📁 Output: ${PUBLIC_DIR}`);
console.log('');

// Check source exists
if (!fs.existsSync(INPUT_SVG)) {
    console.error('❌ ERROR: Gator_Favicon.svg not found in /public folder!');
    process.exit(1);
}

// Check source file size
const stats = fs.statSync(INPUT_SVG);
console.log(`📊 Source file size: ${(stats.size / 1024 / 1024).toFixed(2)} MB`);
if (stats.size > 500000) {
    console.log('⚠️  SVG is large (likely contains embedded raster image). Converting anyway...');
}
console.log('');

// Generate each size
let successCount = 0;

for (const size of sizes) {
    const outputPath = path.join(PUBLIC_DIR, size.name);
    try {
        await sharp(INPUT_SVG, { density: 300 })  // high density for crisp rendering
            .resize(size.width, size.height, {
                fit: 'contain',
                background: { r: 0, g: 0, b: 0, alpha: 0 }  // transparent background
            })
            .png({ compressionLevel: 9 })
            .toFile(outputPath);

        const outStats = fs.statSync(outputPath);
        console.log(`✅ ${size.name.padEnd(25)} ${size.width}x${size.height}  →  ${(outStats.size / 1024).toFixed(1)} KB`);
        successCount++;
    } catch (err) {
        console.error(`❌ Failed to generate ${size.name}: ${err.message}`);
    }
}

// Also create a compact optimized SVG copy (for the <link rel="icon" type="image/svg+xml"> tag)
// If the SVG is huge, we replace it with the 512x512 PNG re-saved as a small optimized SVG wrapper
try {
    const svgWrapperOutput = path.join(PUBLIC_DIR, 'Gator_Favicon_Optimized.svg');
    // Read the 512x512 PNG we just made and embed it properly
    const pngPath = path.join(PUBLIC_DIR, 'favicon-512x512.png');
    if (fs.existsSync(pngPath)) {
        const pngBase64 = fs.readFileSync(pngPath).toString('base64');
        const optimizedSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
  <image width="512" height="512" xlink:href="data:image/png;base64,${pngBase64}"/>
</svg>`;
        fs.writeFileSync(svgWrapperOutput, optimizedSvg);
        const svgStats = fs.statSync(svgWrapperOutput);
        console.log(`\n✅ ${'Gator_Favicon_Optimized.svg'.padEnd(25)} (optimized wrapper)  →  ${(svgStats.size / 1024).toFixed(1)} KB`);
    }
} catch (err) {
    console.log('\n⚠️  Could not create optimized SVG wrapper (non-critical).');
}

// Create a simple favicon.ico-compatible notice
console.log('\n====================================');
console.log(`🎉 Generated ${successCount}/${sizes.length} favicon sizes successfully!`);
console.log('');
console.log('📋 Next steps:');
console.log('   1. The PNG files are now in your /public folder');
console.log('   2. Your index.html is already referencing them');
console.log('   3. For favicon.ico: upload favicon-32x32.png to https://favicon.io/favicon-converter/');
console.log('      → Download the .ico and place it in your /public folder');
console.log('');
console.log('✅ Favicon setup complete!');
