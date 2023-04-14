import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import auth from "auth-astro";
import { loadEnv } from 'vite';
import GitHub from '@auth/core/providers/github';
import vercel from "@astrojs/vercel/serverless";

const env = loadEnv('production', process.cwd(), '');


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), auth()],
  output: 'server',
  adapter: vercel(),
  integrations: [auth({
    providers: [GitHub({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET
    })]
  })]
});