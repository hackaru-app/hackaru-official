export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Hackaru | Simple Time Tracking App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@ktmouk' },
      {
        hid: 'description',
        name: 'description',
        content:
          '勉強、執筆、プログラミング、イラスト制作など、あなたの有意義な時間を管理しよう。時間管理アプリで、簡単に。'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.hackaru.app/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Hackaru | Simple Time Tracking App'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Simple, Cross-platform and Open-source Time Tracking App.'
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
  plugins: [{ src: '~/plugins/vue-timers', ssr: false }],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/google-analytics'],

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
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
