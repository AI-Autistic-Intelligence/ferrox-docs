import fs from 'fs/promises';
import path from 'path';
import { execSync } from 'child_process';

const ROOT_DIR = process.cwd();
const BUILD_DIR = path.join(ROOT_DIR, 'build');

async function copyRecursive(src, dest) {
  const stats = await fs.stat(src);
  if (stats.isDirectory()) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      await copyRecursive(srcPath, destPath);
    }
  } else {
    let retries = 5;
    while (retries > 0) {
      try {
        await fs.copyFile(src, dest);
        break;
      } catch (err) {
        retries--;
        if (retries === 0) {
          console.warn(`[WARN] Could not copy ${src} -> ${dest}: ${err.message}`);
        } else {
          await new Promise((r) => setTimeout(r, 150));
        }
      }
    }
  }
}

async function main() {
  console.log('================================================================');
  console.log('       FERROX-DOCS: BUILD & EXPORT TO ROOT FOR GITHUB PAGES     ');
  console.log('================================================================');
  console.log(`Root Directory : ${ROOT_DIR}`);
  console.log(`Build Output   : ${BUILD_DIR}`);
  console.log('Target Domain  : ferrox-rust.dev (Branch: main)');
  console.log('----------------------------------------------------------------');

  // Step 1: Execute Native Rust/Wasm ferrox-codex Build
  console.log('[1/3] Running ferrox-codex native build & export...');
  try {
    execSync('cargo run --manifest-path ../ferrox-front/Cargo.toml -p ferrox-codex --bin ferrox-codex-cli -- export-gh-pages', {
      stdio: 'inherit',
      cwd: ROOT_DIR,
    });
    console.log('  -> ferrox-codex build and export completed successfully.');
  } catch (err) {
    console.error(`[ERROR] ferrox-codex build failed: ${err.message}`);
    process.exit(1);
  }

  // Step 2: Verify Build Output in Root
  console.log('[2/3] Verifying generated WebAssembly artifacts in root...');
  try {
    await fs.stat(path.join(ROOT_DIR, 'index.html'));
    await fs.stat(path.join(ROOT_DIR, 'CNAME'));
    await fs.stat(path.join(ROOT_DIR, '.nojekyll'));
    console.log('  -> Core WebAssembly build artifacts verified.');
  } catch (err) {
    console.error(`[ERROR] Build verification failed: ${err.message}`);
    process.exit(1);
  }

  // Step 3: Export Build Directory into Root Directory
  console.log('[3/4] Exporting build/ assets into root directory...');
  const buildEntries = await fs.readdir(BUILD_DIR, { withFileTypes: true });
  let exportedCount = 0;

  for (const entry of buildEntries) {
    const srcPath = path.join(BUILD_DIR, entry.name);
    const destPath = path.join(ROOT_DIR, entry.name);

    // Skip build itself or git files
    if (entry.name === 'build' || entry.name === '.git' || entry.name === 'node_modules') {
      continue;
    }

    // Clean generated bundles/artifacts to prevent accumulating stale hashes in git
    if (entry.name === 'assets') {
      try {
        await fs.rm(destPath, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
      } catch (e) {
        console.warn(`[WARN] Could not clean ${destPath}: ${e.message}`);
      }
    }

    await copyRecursive(srcPath, destPath);
    exportedCount++;
  }
  console.log(`  -> Successfully exported ${exportedCount} root items from build/ to ./`);

  // Step 4: Ensure CNAME and .nojekyll for GitHub Pages
  console.log('[4/4] Ensuring CNAME and .nojekyll configuration...');
  const cnamePath = path.join(ROOT_DIR, 'CNAME');
  const nojekyllPath = path.join(ROOT_DIR, '.nojekyll');

  await fs.writeFile(cnamePath, 'ferrox-rust.dev\n', 'utf-8');
  await fs.writeFile(nojekyllPath, '', 'utf-8');
  console.log('  -> CNAME set to "ferrox-rust.dev".');
  console.log('  -> .nojekyll flag touched.');

  console.log('================================================================');
  console.log('>>> EXPORT COMPLETE: ferrox-docs ready for GitHub Pages (main) <<<');
  console.log('================================================================');
}

main().catch((err) => {
  console.error('[FATAL] Export failed:', err);
  process.exit(1);
});
