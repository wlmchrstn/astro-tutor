import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://wlmchrstn-astro-tutor.netlify.app",
  integrations: [preact()]
});