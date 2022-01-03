import webpack from 'webpack'

export default {
  env: {
    baseUrl: process.env.BASE_URL || 'https://landing.onjourney.id'
  },

  generate: {
    fallback: true
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'on-journey-landing',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/app.css',
  ],

  globals: {
    id: 'app', // replacing __nuxt
    context: '__onjourney__', // replacing __NUXT__
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  firebase: {
    config: {
      apiKey: "AIzaSyBgB5dGOt1tfoc94ne0NIDPjnXIN4sG5Go",
      authDomain: "onjourney-7fcf3.firebaseapp.com",
      databaseURL: "https://onjourney-7fcf3-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "onjourney-7fcf3",
      storageBucket: "onjourney-7fcf3.appspot.com",
      messagingSenderId: "835571669474",
      appId: "1:835571669474:web:8ec6e55514eac7fc35c1bb",
      measurementId: "G-0SB6RR93NP"
    },
    services: {
      auth: true,
      firestore: true,
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ],
  },

  loading: {
    color: '#00BADE',
    height: '2.5px',
    throttle: 0
  },

  loadingIndicator: '~/views/loading/loading-indicator.html'
}
