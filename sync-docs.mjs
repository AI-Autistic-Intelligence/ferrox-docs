import fs from 'fs/promises';
import path from 'path';

const REPOS = {
  'nestjs-yalc': { src: '../nestjs-yalc/docs', isDocusaurus: false },
  'node-yalc': { src: '../node-yalc/docs', isDocusaurus: false },
  'ferrox-node': { src: '../ferrox-node/docs', isDocusaurus: false },
  'ferrox-front': { src: '../ferrox-front/docs', isDocusaurus: true },
  'ferrox': { src: '../ferrox/docs', isDocusaurus: true },
};

const DOCS_DIR = './docs';

async function copyDir(src, dest) {
  try {
    const stats = await fs.stat(src);
    if (!stats.isDirectory()) return;
  } catch (e) {
    console.log(`Directory ${src} does not exist. Skipping...`);
    return;
  }

  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === 'node_modules') continue;

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      await fs.copyFile(srcPath, destPath);
      console.log(`Copied ${srcPath} to ${destPath}`);
    }
  }
}

async function main() {
  console.log('Starting documentation synchronization...');
  
  // Create base docs directory if it doesn't exist
  await fs.mkdir(DOCS_DIR, { recursive: true });

  // For each repo, create a folder inside docs and copy the markdown files
  for (const [repoName, repoInfo] of Object.entries(REPOS)) {
    const destPath = path.join(DOCS_DIR, repoName);
    console.log(`Syncing ${repoName}...`);
    
    // Clean old docs for this repo
    await fs.rm(destPath, { recursive: true, force: true });
    
    if (repoInfo.isDocusaurus) {
      await fs.mkdir(destPath, { recursive: true });
      try {
        await fs.copyFile(path.join(repoInfo.src, 'overview.md'), path.join(destPath, 'overview.md'));
        console.log(`Copied ${repoInfo.src}/overview.md to ${destPath}/overview.md`);
      } catch (e) {
        // ignore
      }
      await copyDir(path.join(repoInfo.src, 'docs'), destPath);
    } else {
      await copyDir(repoInfo.src, destPath);
    }
  }

  console.log('Documentation synchronization complete.');
}

main().catch(console.error);
