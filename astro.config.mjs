import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { loadEnv } from 'vite';
import vercel from "@astrojs/vercel/serverless";

const env = loadEnv('production', process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel(),
});