import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/proyecto_svelt/app-paises-suramerica/',
  plugins: [svelte()],
})
