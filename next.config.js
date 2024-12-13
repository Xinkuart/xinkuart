/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      // Ignora los errores de ESLint durante el build
      ignoreDuringBuilds: true,
    },
    typescript: {
      // Ignora los errores de TypeScript durante el build
      ignoreBuildErrors: true,
    },
  }
  
  module.exports = nextConfig