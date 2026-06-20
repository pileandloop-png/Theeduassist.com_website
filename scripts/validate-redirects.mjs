import fs from 'fs';
import path from 'path';

const fileContent = fs.readFileSync(path.join(process.cwd(), 'src/data/redirects.ts'), 'utf8');

// The original basic checks plus the new checks requested.
if (fileContent.includes('from: "/*"')) {
    console.error("Error: Catch-all redirect found!");
    process.exit(1);
}

// Regex to extract 'from' and 'to' values. We just do basic validation here without TS eval.
const redirectsMatch = fileContent.match(/\{[^}]+\}/g);
if (redirectsMatch) {
    const froms = new Set();
    for (const match of redirectsMatch) {
        if (match.includes('from:')) {
            const fromStr = match.match(/from:\s*"([^"]+)"/)?.[1];
            const toStr = match.match(/to:\s*"([^"]*)"/)?.[1];
            const statusStr = match.match(/status:\s*"([^"]+)"/)?.[1];

            if (fromStr) {
                if (froms.has(fromStr)) {
                     console.error(`Error: Duplicate redirect from found: ${fromStr}`);
                     process.exit(1);
                }
                froms.add(fromStr);
            }

            if (statusStr === 'ready') {
                if (!toStr) {
                    console.error(`Error: Ready redirect to empty target found for: ${fromStr}`);
                    process.exit(1);
                }
                if (fromStr === toStr) {
                    console.error(`Error: Redirect loop found for: ${fromStr}`);
                    process.exit(1);
                }
                if (toStr === '/') {
                    console.error(`Error: Homepage dumping found for: ${fromStr}`);
                    process.exit(1);
                }
                if (fromStr && fromStr.includes('wpr_templates')) {
                    console.error(`Error: WordPress template redirected as ready page: ${fromStr}`);
                    process.exit(1);
                }
            }
        }
    }
}

console.log("Redirects validated successfully.");
