import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const files = new Map();

const getFiles = folder => {
  const path = join(__dirname, folder);
  if (files.has(path))
    return files.get(path);
  const promise = readdir(path);
  files.set(path, promise);
  return promise;
};

const test = async folder => {
  const fileList = await getFiles(folder);
  for (const file of fileList) {
    if (/\.js$/.test(file)) {
      const module = join(__dirname, folder, file);
      await import(module);
    }
  }
};

console.log(`\x1b[7m\x1b[1m ${'LinkeDOM'.padEnd(74)}\x1b[0m`);
await test('xml');
await test('svg');
await test('html');
await test('interface');
await test('shared');

await new Promise(resolve => setTimeout(resolve, 500));

console.log(`\x1b[7m\x1b[1m ${'LinkeDOM - Cached'.padEnd(74)}\x1b[0m`);
globalThis[Symbol.for('linkedom')] = await import('../src/cached.js');
await test('xml');
await test('svg');
await test('html');
await test('interface');
await test('shared');

await import('./issue-256.js');
