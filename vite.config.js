import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	server: {
		port: 3000
	},
	plugins: [tailwindcss()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				about: resolve(__dirname, "about/index.html"),
				contacts: resolve(__dirname, "contacts/index.html")
			}
		}
	}
});
