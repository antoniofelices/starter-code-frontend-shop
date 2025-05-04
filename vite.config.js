import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                checkout: 'checkout.html',
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@content': path.resolve(__dirname, './src/content'),
            '@dom': path.resolve(__dirname, './src/dom'),
            '@modules': path.resolve(__dirname, './src/modules'),
        },
    },
})
