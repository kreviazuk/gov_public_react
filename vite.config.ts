import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '/',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: 3000,
      strictPort: true, // 如果端口被占用，则直接退出
      open: true,
      cors: true,
      host: true, // 监听所有地址，包括局域网和公网地址
    }
  }
}); 