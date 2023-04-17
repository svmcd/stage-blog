import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import auth from "auth-astro";
import { loadEnv } from 'vite';
import Discord from '@auth/core/providers/discord';
import vercel from "@astrojs/vercel/serverless";

const env = loadEnv('production', process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth({
    providers: [Discord({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    })]
  })],
  output: 'server',
  adapter: vercel(),
});