import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// Obtém o diretório do arquivo atual
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: {
            '@pages': resolve(__dirname, 'src/pages'),
            '@partials': resolve(__dirname, 'src/partials'),
            '@components': resolve(__dirname, 'src/components'),
            '@utils': resolve(__dirname, 'src/utils'),
        },
    },
})
