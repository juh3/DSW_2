import { defineConfig } from 'astro/config';

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno({
    port: 7778
  }),
  integrations: [react()]
});