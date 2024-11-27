import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import VueDevTools from 'vite-plugin-vue-devtools'
import glsl from 'vite-plugin-glsl'
import { templateCompilerOptions } from '@tresjs/core'

export default defineConfig({
  plugins: [
    vue({
      ...templateCompilerOptions,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'ItsARound',
        short_name: 'itsAR',
        description:
          'Explore the future of digital identity: A collection of avant-garde virtual heroes from ItsAlive Studio',
        background_color: '#868DA4',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'twitter-poster.jpg',
            sizes: '663x331',
            type: 'image/jpg',
            form_factor: 'wide',
            label: 'Homescreen of ItsARound App',
          },
          {
            src: 'fb-poster.jpg',
            sizes: '600x600',
            type: 'image/jpg',
            form_factor: 'narrow',
            label: 'Mainscreen of ItsARound App',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,woff2,ttf,ico,png,svg}'],
        maximumFileSizeToCacheInBytes: 50000000,
        clientsClaim: true,
        skipWaiting: true,
        cacheId: 'itsaround-cache',
        runtimeCaching: [
          {
            urlPattern: /\.(glb|usdz)$/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'models-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
              networkTimeoutSeconds: 10,
            },
          },
        ],
      },
    }),
    glsl(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@shaders': fileURLToPath(new URL('./src/shaders', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./src/components', import.meta.url)
      ),
    },
  },
})
