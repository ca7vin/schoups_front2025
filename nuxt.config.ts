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
  }
});