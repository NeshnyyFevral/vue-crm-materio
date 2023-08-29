import vitePluginVue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import vitePluginEslint from 'vite-plugin-eslint';
import viteSvgLoader from 'vite-svg-loader';

const isDev = process.env.NODE_ENV === 'development';

function generateRichClassName(name: string, filename: string) {
  // @ts-ignore
  const { groups: { fileName } } = /(?<fileName>\w+)(\.\w+)*(\.\w+)(\?.+)?$/.exec(filename);
  return `${fileName}_${name}`;
}

export default defineConfig({
  plugins: [
    vitePluginVue(),
    vitePluginEslint(),
    viteSvgLoader({
      svgoConfig: {
        plugins: [{
          name: 'preset-default',
          params: { overrides: { removeViewBox: false } },
        }],
      },
    }),
  ],
  css: { modules: { generateScopedName: isDev ? generateRichClassName : undefined } },
  build: { outDir: './docs' },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
