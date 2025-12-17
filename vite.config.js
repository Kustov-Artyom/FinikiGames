import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,      // или "0.0.0.0" — откроет доступ по LAN/Network
    port: 5174,      // если хочешь фиксировать порт (не обязательно)
    strictPort: true // чтобы не прыгал на другой порт
  },
  preview: {
    host: true,
    port: 5174,
    strictPort: true
  }
});
