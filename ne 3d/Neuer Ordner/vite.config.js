import { defineConfig } from 'vite';
import { readFileSync } from 'fs';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));
const buildTime = new Date().toISOString();
const buildId = Date.now().toString(36).toUpperCase();

export default defineConfig({
    define: {
        __APP_VERSION__: JSON.stringify(pkg.version),
        __BUILD_TIME__: JSON.stringify(buildTime),
        __BUILD_ID__: JSON.stringify(buildId),
    },
});
