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
            '@data': path.resolve(__dirname, './src/data'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@ui': path.resolve(__dirname, './src/ui'),
            '@core': path.resolve(__dirname, './src/core'),
        },
    },
})
