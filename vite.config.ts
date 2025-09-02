import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap"; // ✅ Sitemap plugin

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // React Router SPA fallback in dev
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      sitemap({
        hostname: "https://5dtech.in", // ✅ Your site URL
        outDir: "dist", // Default Netlify build dir
        dynamicRoutes: [
          "/", 
          "/services",
          "/blog",
          "/contact",
        ],
        readable: true, // makes XML pretty formatted
        changefreq: "weekly", // SEO hint
        priority: 0.8, // SEO hint
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
}));
