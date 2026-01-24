// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL utama agar sitemap.xml Anda tidak error
  site: 'https://picks.zaidly.com',
  output: 'server',
  adapter: cloudflare({
    // Matikan warning SESSION KV jika Anda hanya membuat blog
    runtime: { mode: 'off' } 
  }),
  // Solusi wajib agar Cloudflare tidak protes soal Sharp
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  },
  integrations: [
    tailwind(),
    sitemap() // Bot Google sangat butuh ini untuk indexing
  ],
});