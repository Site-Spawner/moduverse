export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Moduverse',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },{
      href: 'https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap',
      rel: 'stylesheet'
    }],
    script: [{
      "src": "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
    }, {
      "src": "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
    }]
  },

  /*
  ** Global CSS
  */
  css: ["vue-essential-slices/src/styles/styles.scss", "@/assets/scss/main.scss"],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  dev: process.env.NODE_ENV !== 'production',

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['@nuxt/typescript-build', // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
  '@nuxtjs/tailwindcss'],

  /*
  ** Nuxt.js modules
  */
  modules: [// Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios', '@nuxtjs/pwa', ["@nuxtjs/prismic", {
    "endpoint": `https://${process.env.VUE_APP_PRISMIC_REPOSITORY}.cdn.prismic.io/api/v2`,
    "apiOptions": {
      "routes": [{
        "type": "page",
        "path": "/:uid"
      }]
    }
  }], ["nuxt-sm"]],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  }
};