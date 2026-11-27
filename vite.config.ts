import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // A pré-renderização empacota as dependências, evitando erros de ESM/CJS no Node
  ssr: { noExternal: true },
})
