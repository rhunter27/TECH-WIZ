import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    supportFile: false, // Optional: If you're not using a support file
    baseUrl: 'http://localhost:3001', 
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite', // or 'webpack' depending on your app setup
    },
  },
})
