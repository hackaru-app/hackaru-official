export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Hackaru | Open-source Time Tracking Application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@hackaru' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Simple, cross-platform and open-source time tracking application.'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.hackaru.app/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Hackaru | Open-source Time Tracking Application'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Simple, Cross-platform and Open-source Time Tracking Application.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.hackaru.app/ogp.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-timers', ssr: false },
    { src: '~/plugins/vue-smooth-scroll', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/google-analytics',
    [
      'nuxt-i18n',
      {
        locales: [{ code: 'ja', iso: 'ja_JP' }, { code: 'en', iso: 'en-US' }],
        defaultLocale: 'en',
        vueI18nLoader: true,
        detectBrowserLanguage: {
          alwaysRedirect: true
        }
      }
    ]
  ],

  googleAnalytics: {
    id: 'UA-137391422-4'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
