import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'

function excludeMsw() {
  return {
    name: 'exclude-msw',
    resolveId(source: string) {
      return source === 'virtual-module' ? source : null
    },
    renderStart(outputOptions: any, _inputOptions: any) {
      const outDir = outputOptions.dir
      const msWorker = path.resolve(outDir, 'mockServiceWorker.js')
      fs.rm(msWorker, () => console.log(`Deleted ${msWorker}`))
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), excludeMsw()],
  server: {
    port: 3000
  },
  publicDir: 'public'
})
