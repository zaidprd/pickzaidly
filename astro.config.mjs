// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare'; // PERBAIKAN: Gunakan @astrojs/cloudflare, bukan tailwind!

export default defineConfig({
  // URL utama website Anda untuk keperluan SEO & Sitemap
  site: 'https://picks.zaidly.com', 
  
  // 'server' berarti website dirender setiap ada request (cocok untuk Cloudflare Pages)
  output: 'server', 
  
  // Menggunakan adapter Cloudflare yang benar
  adapter: cloudflare(), 
  
  integrations: [tailwind()]
});