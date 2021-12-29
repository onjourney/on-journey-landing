import webpack from 'webpack'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

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
    '@nuxtjs/firebase',
    'nuxt-seo'
  ],

  seo: {
    title: 'On Journey',
    description: 'Connecting Traveller with Travel Agent to Explore Hidden Gem Destinations',
    keywords: 'On-Journey, Travel Agent, Travel, Agent, Plan Trip, Explore, Destinations',
    canonical: 'auto',
    isForcedTrailingSlash: false,
    openGraph: {
      title: 'On Journey', 
      description: 'Connecting Traveller with Travel Agent to Explore Hidden Gem Destinations',
    },
    twitter: { 
      site: '@onjourneyid', 
      creator: '@onjourneyid',
      card: 'summary_large_image',
      title: 'On-Journey', 
      description: 'Connecting Traveller with Travel Agent to Explore Hidden Gem Destinations',
    }
  },

  firebase: {
    config: {
      apiKey: "AIzaSyDNF1aOtJ2HNO8odqVtC1tICxRPC3YzKjk",
      authDomain: "on-journey-landing-4715e.firebaseapp.com",
      projectId: "on-journey-landing-4715e",
      storageBucket: "on-journey-landing-4715e.appspot.com",
      messagingSenderId: "282313939009",
      appId: "1:282313939009:web:bcde1046f7af46b5108ec0",
      measurementId: "G-M603365L14"
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
}
