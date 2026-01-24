// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap'; // Tambahkan ini agar mudah diindex Google

export default defineConfig({
  site: 'https://picks.zaidly.com',
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile' // Perbaikan untuk pesan error Sharp tadi
  }),
  integrations: [
    tailwind(),
    sitemap() // Wajib agar Google tahu daftar artikel Anda
  ],
});