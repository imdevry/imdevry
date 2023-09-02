import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/app/pages') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/app/components') },
    ],
  },
  server: {
    host: 'localhost',
    port: 3000
  }
})
