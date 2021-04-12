require('dotenv').config()

export default {
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
