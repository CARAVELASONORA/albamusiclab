const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');

const files = [
    'IMG_9937.HEIC',
    'IMG_9998 2.HEIC',
    'imagem1.HEIC'
];

async function convert() {
    for (const file of files) {
        try {
            const inputPath = path.join(__dirname, 'portefolio', file);
            // Handle space in output filename (replace with _) for easier usage
            const outputFilename = file.replace(/\s+/g, '_').replace('.HEIC', '.jpg');
            const outputPath = path.join(__dirname, 'portefolio', outputFilename);

            console.log(`Reading ${file}...`);
            const inputBuffer = fs.readFileSync(inputPath);

            console.log(`Converting ${file} to ${outputFilename}...`);
            const outputBuffer = await heicConvert({
                buffer: inputBuffer, // the HEIC file buffer
                format: 'JPEG',      // output format
                quality: 1           // the jpeg compression quality, between 0 and 1
            });

            fs.writeFileSync(outputPath, outputBuffer);
            console.log(`Saved ${outputFilename}`);
        } catch (error) {
            console.error(`Error converting ${file}:`, error);
        }
    }
}

convert();
