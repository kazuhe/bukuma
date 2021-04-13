require('dotenv').config()

const title = 'bukuma ブックマーク管理App'

export default {
  // グローバルヘッダ
  head: {
    title,
    titleTemplate: `%s | ${title}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // 環境変数の定義
  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },

  // componentsディレクトリのファイルを自動インポート
  components: true,

  // Appマウント前にロード
  plugins: ['~/plugins/axios.js'],

  // build用のモジュール
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ],

  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ]
}
