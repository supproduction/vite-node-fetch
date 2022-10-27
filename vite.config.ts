import { defineConfig } from 'vite';

declare module 'vite' {
  interface UserConfig {
    ssr?: SSROptions;
  }
}

export default defineConfig((config) => {
  return {
    build: {
      target: 'esnext',
      lib: {
        entry: 'src/entry-server.ts',
        formats: ['iife'],
        name: 'storefront',
      },
      emptyOutDir: true,
      outDir: './dist/storefront/server',
      ssr: 'src/entry-server.ts',
    },
    ssr: {
      noExternal: true,
    },
  };
});
