const fs = require('fs');
const path = require('path');
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error("Sharp is not installed. Please run 'npm install sharp'");
    process.exit(1);
}

const directory = path.join(process.cwd(), 'public/images/models');

function getAllFiles(dirPath, arrayOfFiles) {
    if (!fs.existsSync(dirPath)) return [];

    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
        } else {
            arrayOfFiles.push(fullPath);
        }
    });

    return arrayOfFiles;
}

async function convert() {
    console.log(`Scanning directory: ${directory}`);
    const files = getAllFiles(directory);
    const imageFiles = files.filter(file => /\.(png|jpe?g)$/i.test(file));

    console.log(`Found ${imageFiles.length} images to convert.`);

    if (imageFiles.length === 0) {
        console.log("No images found to convert.");
        return;
    }

    for (const file of imageFiles) {
        const ext = path.extname(file);
        const newFile = file.replace(new RegExp(ext + '$'), '.webp');

        console.log(`Converting: ${path.basename(file)} -> ${path.basename(newFile)}`);

        try {
            await sharp(file)
                .webp({ quality: 80 })
                .toFile(newFile);

            // Remove original file after successful conversion
            fs.unlinkSync(file);
            console.log(`✓ Converted & Deleted original: ${path.basename(file)}`);
        } catch (err) {
            console.error(`✗ Error converting ${file}:`, err);
        }
    }
    console.log("Conversion complete.");
}

convert();
