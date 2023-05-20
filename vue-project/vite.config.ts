import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port:3001,
    // 配置解决跨域问题
    proxy:{
      '/api':{
        target:'http://localhost:3000/', // 代理地址
        changeOrigin:true,  // 是否跨域
        rewrite:path => path.replace(/^\/api/,''), // 重写url
      },
      // '/api1':{
      //   target:'http://localhost:3000/', // 代理地址
      //   changeOrigin:true,  // 是否跨域
      //   rewrite:path => path.replace(/^\/api/,''), // 重写url
      // }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
