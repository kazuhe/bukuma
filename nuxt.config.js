export default {
  // componentsディレクトリのファイルを自動インポート
  components: true,

  // build用のモジュール
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module'
  ]
}
