import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  //added configs
  optimizeDeps: {
    include: ["firebase/app", "firebase/auth", "firebase/firestore"], // add other firebase modules you use
  },
  
})
