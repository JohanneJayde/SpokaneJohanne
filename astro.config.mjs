import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";
import tailwind from '@astrojs/tailwind';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://spokanejohanne.com",
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: netlify(),
});
