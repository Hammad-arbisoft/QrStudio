/* eslint-disable no-undef */
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@assets': resolve(__dirname, './src/assets'),
            '@components': resolve(__dirname, './src/components'),
            '@constants': resolve(__dirname, './src/constants'),
            '@utils': resolve(__dirname, './src/utils'),
            '@theme': resolve(__dirname, './src/theme'),
        },
    },
});
