import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://spokane-johanne.netlify.app",
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: netlify(),
});
