/**
 * Impeccable Pin/Unpin Script
 * Creates shortcuts for impeccable commands
 * 
 * Usage: node .opencode/skills/impeccable/scripts/pin.mjs <pin|unpin> <command>
 * Example: node .opencode/skills/impeccable/scripts/pin.mjs pin audit
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = process.cwd();

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: pin.mjs <pin|unpin> <command>');
  process.exit(1);
}

const action = args[0];
const command = args[1];

const validCommands = [
  'craft', 'shape', 'teach', 'document', 'extract',
  'critique', 'audit', 'polish',
  'bolder', 'quieter', 'distill', 'harden', 'onboard',
  'animate', 'colorize', 'typeset', 'layout', 'delight', 'overdrive',
  'clarify', 'adapt', 'optimize', 'live'
];

if (!validCommands.includes(command)) {
  console.error(`Invalid command: ${command}`);
  console.error(`Valid commands: ${validCommands.join(', ')}`);
  process.exit(1);
}

const harnessDirs = [
  '.opencode/skills',
  '.claude/skills',
  '.cursor/skills',
];

const skillDir = path.join(__dirname, '..');

// Find all harness directories
const harnesses = [];
for (const dir of harnessDirs) {
  const fullPath = path.join(rootDir, dir);
  if (fs.existsSync(fullPath)) {
    const contents = fs.readdirSync(fullPath);
    for (const item of contents) {
      const itemPath = path.join(fullPath, item);
      if (fs.statSync(itemPath).isDirectory()) {
        harnesses.push(itemPath);
      }
    }
  }
}

console.log(`Action: ${action}`);
console.log(`Command: ${command}`);
console.log(`Harnesses found: ${harnesses.length}`);
console.log(`Skill dir: ${skillDir}`);