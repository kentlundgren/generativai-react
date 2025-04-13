import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Baspathen för produktion när applikationen körs på en undermapp
  // För utveckling: '/'
  // För produktion: '/program/testprogram/generativai-react/'
  base: process.env.NODE_ENV === 'production' 
    ? '/program/testprogram/generativai-react/' 
    : '/',
  // Server configuration
  server: {
    port: 5173,
    strictPort: true, // Will not try other ports if 5173 is taken
    open: true // Opens the browser automatically
  }
})
