import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  devServer: {
    proxy: {
      "/api": {
        ws: true,
        changeOrigin: true,
        target: "http://localhost:3000/"
      }
    }
  }
  // server: {
  // proxy: {
  //       '/api': {
  //         changeOrigin: true,
  //         rewrite: (path) => path.replace(/^\/api/, ''),
  //         secure: false,
  //         target: 'https://localhost:44305',
  //         ws: true,
  //       }
  //   }
  // }
})


