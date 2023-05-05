import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/edge';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',
  adapter: vercel(),
  buildOptions: {
    ssr: true,
  },
  integrations: [mdx(), sitemap(), tailwind(), react()]
});