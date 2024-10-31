import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-edge-adapter/plugin";
import styleX from "vite-plugin-stylex";

export default defineConfig({
  plugins: [styleX(), remix(), netlifyPlugin(), tsconfigPaths()],
});
