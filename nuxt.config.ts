import path from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  plugins: [
    '~/plugins/vue-scrollto.ts',
    '~/plugins/bootstrap.ts',
    // '~/plugins/vue-carousel-3d.ts'
  ],
  build: {
    // extractCSS: false,
    transpile: ["vuetify"],
  },
  css: [
    "@/assets/scss/style.scss",
    'bootstrap/dist/css/bootstrap.css'
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: [
    "@pinia/nuxt",
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://localhost:5260',
      // apiChatUrl: 'http://localhost:5861',
      // apiExportUrl: 'http://localhost/eng/eng-brain-export/',
      // apiBaseUrl: 'https://rvscs-develop.com/engbrain',
      // apiChatUrl: 'https://rvscs-develop.com/engbrain-chat',
      // apiExportUrl: 'https://rvscs-develop.com/eng-brain-export/',
    }
  }
});
