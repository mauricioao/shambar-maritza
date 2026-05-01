/**
 * Impeccable Context Loader
 * Loads PRODUCT.md and DESIGN.md from the project
 * 
 * Usage: node .opencode/skills/impeccable/scripts/load-context.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = process.cwd();
const contextDir = process.env.IMPECCABLE_CONTEXT_DIR || rootDir;

const possibleDirs = [
  path.join(contextDir, '.'),
  path.join(contextDir, '.agents', 'context'),
  path.join(contextDir, 'docs'),
];

function findFile(dir, filename) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const match = files.find(f => f.name.toLowerCase() === filename.toLowerCase());
  return match ? path.join(dir, match.name) : null;
}

let productPath = null;
let designPath = null;
let resolvedDir = null;

for (const dir of possibleDirs) {
  if (fs.existsSync(dir)) {
    if (!productPath) {
      const p = findFile(dir, 'PRODUCT.md');
      if (p) {
        productPath = p;
        resolvedDir = dir;
      }
    }
    if (!designPath) {
      const d = findFile(dir, 'DESIGN.md');
      if (d) {
        designPath = d;
        resolvedDir = resolvedDir || dir;
      }
    }
  }
}

const result = {
  product: null,
  design: null,
  contextDir: resolvedDir,
};

if (productPath) {
  result.product = {
    path: productPath,
    content: fs.readFileSync(productPath, 'utf-8'),
  };
}

if (designPath) {
  result.design = {
    path: designPath,
    content: fs.readFileSync(designPath, 'utf-8'),
  };
}

console.log(JSON.stringify(result, null, 2));