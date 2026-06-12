import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kantora.netlify.app',
  integrations: [sitemap()],
});
