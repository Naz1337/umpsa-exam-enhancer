import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const distDir = path.resolve(__dirname, 'dist'); // Vite output directory
const userscriptPath = path.join(distDir, 'userscript.js'); // Generated userscript file
const headerPath = path.join(__dirname, 'tampermonkey-header.txt'); // Tampermonkey header file

try {
    // Read the Tampermonkey header
    const header = fs.readFileSync(headerPath, 'utf-8');

    // Read the generated userscript
    const userscript = fs.readFileSync(userscriptPath, 'utf-8');

    // Combine the header and userscript
    const finalContent = `${header}\n${userscript}`;

    // Write the combined content back to the userscript file
    fs.writeFileSync(userscriptPath, finalContent, 'utf-8');
    console.log('Tampermonkey header added successfully!');

    // Check if the COPY_POSTBUILD environment variable is set to 'true'
    const copyPostbuild = process.env.COPY_POSTBUILD === 'true';

    if (copyPostbuild) {
        // Use clipboardy for cross-platform clipboard support
        const clipboardy = (await import('clipboardy')).default;

        // Copy the userscript content to the clipboard
        clipboardy.writeSync(finalContent);
        console.log('Userscript copied to clipboard!');
    }
} catch (error) {
    console.error('An error occurred:', error.message);
}