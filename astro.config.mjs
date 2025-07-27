// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'spa-fallback',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url || "/";
            const accept = req.headers.accept || "";

            const isHtmlRequest = req.method === "GET" && !url.includes(".") && accept.includes("text/html");

            if (isHtmlRequest) {
              req.url = "/";
            }

            next();
          });
        }
      }
    ]
  }
});
