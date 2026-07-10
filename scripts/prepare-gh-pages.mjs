import { copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist", "client");
const indexHtml = join(distDir, "index.html");
const notFoundHtml = join(distDir, "404.html");
const noJekyll = join(distDir, ".nojekyll");

await copyFile(indexHtml, notFoundHtml);
await writeFile(noJekyll, "");

console.log("Prepared dist/client for GitHub Pages (404 fallback + .nojekyll)");
