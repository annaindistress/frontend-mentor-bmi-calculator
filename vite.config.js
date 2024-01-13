import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/frontend-mentor-bmi-calculator/",
  plugins: [react()],
});
