import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/image', '@nuxtjs/google-fonts'],
  image: {
    provider: 'ipx',
    quality: 100,
    format: ['webp'],
    densities: [1, 2],
    screens: {
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1366,
      xxl: 1536,
    }
  },

  googleFonts: {
    display: 'swap',
    families: {
      'Bebas+Neue': true,
    },
  },
})
