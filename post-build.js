import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const distDir = path.resolve(__dirname, 'dist'); // Vite output directory
const userscriptPath = path.join(distDir, 'userscript.js'); // Generated userscript file
const headerPath = path.join(__dirname, 'tampermonkey-header.txt'); // Tampermonkey header file

// Read the Tampermonkey header
const header = fs.readFileSync(headerPath, 'utf-8');

// Read the generated userscript
const userscript = fs.readFileSync(userscriptPath, 'utf-8');

// Combine the header and userscript
const finalContent = `${header}\n${userscript}`;

// Write the combined content back to the userscript file
fs.writeFileSync(userscriptPath, finalContent, 'utf-8');

console.log('Tampermonkey header added successfully!');