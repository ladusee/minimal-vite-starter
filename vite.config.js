import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(__dirname, "public");
const srcDir = resolve(__dirname, "src");

export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [tailwindcss()],
	/**
	 * Set `root` to `src`, so the default router
	 * will be relative to the `src` directory.
	 */
	root: srcDir,
	publicDir,
	build: {
		rollupOptions: {
			input: {
				/**
				 * Manually specify the input files for the build.
				 * Without this, build step will only bundle
				 * the `[root]/index.html` file.
				 */
				home: resolve(srcDir, "index.html"),
				about: resolve(srcDir, "about/index.html"),
				notFound: resolve(srcDir, "not-found.html")
			}
		}
	}
});
