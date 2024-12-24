import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  server: {
    port: 5001,
  },
  plugins: [
    react(), 
    federation({
      name: 'vite-federation-test-two',
      filename: 'vite_federation_test_two.js',
      exposes: {
          './SecondAppComponent': './src/components/SecondAppComponent.tsx',
      },
      shared: ['react', 'react-dom']
    }),
    tsconfigPaths(),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
