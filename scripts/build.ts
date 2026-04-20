import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'tsdown';

const getDirname = (url: string, subDir = '') => {
  return join(dirname(fileURLToPath(url)), subDir);
};

async function buildAll() {
  await build({
    cwd: getDirname(import.meta.url, '..'),
    entry: {
      index: 'src/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    treeshake: true,
    tsconfig: './tsconfig.build.json',
    // Align with `package.json` exports (`.js` / `.d.ts` instead of `.mjs` / `.d.mts`).
    fixedExtension: false,
  });
}

void buildAll();
