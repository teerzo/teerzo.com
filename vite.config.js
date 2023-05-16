import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@routes', replacement: '/src/routes' },
    ],
  },
})


// {
//     "compilerOptions": {
//         "baseUrl": "src"
//     },
//     "include": [
//         "src"
//     ]
// }

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   root: 'src',
//   // build: {
//   //   outDir: '../dist'
//   // }
// })