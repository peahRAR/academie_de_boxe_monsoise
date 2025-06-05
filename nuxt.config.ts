import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true,
  nitro: {
    preset: 'netlify',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxt/image', '@nuxtjs/google-fonts', '@nuxt/icon'],
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
      'Caveat': true,
      Inter: [400, 500, 700],
    },
  },

  icon: {
    mode: 'css',
    cssLayer: 'base',
    provider: 'server',
    customCollections: [{
      prefix: 'box',
      dir: './assets/icons/custom',
    },
    ],
  },
})
