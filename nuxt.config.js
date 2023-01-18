export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ky2rz4-bakery',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: '本サイトはJamStack構成で作成したパン屋さん向けテンプレートサイトです。インスタグラムとの連携機能を実装しています。' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:site_name', property: 'og:site_name', content: '街のパン屋さん' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ky2rz4-bakery.g.kuroco-front.app/' },
      { hid: 'og:title', property: 'og:title', content: '街のパン屋さん' },
      { hid: 'og:description', property: 'og:description', content: '本サイトはJamStack構成で作成したパン屋さん向けテンプレートサイトです。インスタグラムとの連携機能を実装しています。' },
      { hid: 'og:image', property: 'og:image', content: 'サイトURL' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: '街のパン屋さん' },
      { hid: 'twitter:description', name: 'twitter:description', content: '本サイトはJamStack構成で作成したパン屋さん向けテンプレートサイトです。インスタグラムとの連携機能を実装しています。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/style.css',
    'assets/font-awesome-4.7.0/css/font-awesome.css',
    //'assets/normalize.css',
    //'assets/style_fromstaff.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
