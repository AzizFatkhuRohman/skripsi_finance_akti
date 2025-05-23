import laravel from "laravel-vite-plugin";
import { defineConfig } from "vite";
// import tailwindcss from '@tailwindcss/vite';
import react from "@vitejs/plugin-react";
export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.jsx"],
            refresh: true,
        }),
        // tailwindcss(),
        react(),
    ],
    resolve: {
        preserveSymlinks: true,
    },
});
