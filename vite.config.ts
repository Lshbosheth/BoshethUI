import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 需要用到的插件数组
  plugins: [vue()],
  server: {
    // 项目启动时，是否在浏览器中在打开应用区
    open: true,
    //启动端口
    port: 8080,
    // 热模块替换
    hmr: {
      host: "127.0.0.1",
      port: 8080,
    },
    // 设置 https 代理
    proxy: {
      "/api": {
        target: "你的http地址",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ""),
      },
    },
  },
});