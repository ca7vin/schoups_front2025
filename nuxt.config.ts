// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/fonts", "nuxt-swiper", "@vesp/nuxt-fontawesome"],

  fontawesome: {
    icons: {
      solid: ['chevron-left', 'chevron-right', 'bars'],
      brands: ['instagram', 'square-facebook'],
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'shortcut icon', href: '/favicon.ico' }
      ]
    }
  }
});
