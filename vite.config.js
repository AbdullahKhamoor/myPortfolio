import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { BiFontFamily } from 'react-icons/bi'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/myPortfolio/",
  plugins: [
    react(), tailwindcss()],
  theme: {
    extend:{
        fontFamily: {
          sans: ['sans-serif', 'Poppins']
        }
    }
  } 
  

})
