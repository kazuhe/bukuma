export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    console.log(`[ROUTER] move from ${from.fullPath} to ${to.fullPath}`)
    next()
  })
}
