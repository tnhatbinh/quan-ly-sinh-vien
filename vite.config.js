import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/quan-ly-sinh-vien/", // Thay bằng đúng tên kho lưu trữ của ông
});
