import Cookies from 'universal-cookie'

export default ({ req, store }) => {
  // nuxt-linkなどHistoryインターフェイスでページ遷移をした場合
  if (process.client) {
    console.log('[auth.js] process.client: ', process.client)
    return
  }

  // if (['/'].includes(route.path)) {
  //   return
  // }

  console.log(req.headers)

  const cookies = new Cookies(req.headers.cookie)
  console.log('[auth.js] cookies: ', cookies)
  const user = cookies.get('user')
  console.log('[auth.js] user: ', user)

  if (user && user.id) {
    const { id, likes } = user
    store.commit('setUser', { user: { id, likes } })
    console.log('auth.js ~~ setUser')
  }

  // if (!user && route.path !== '/login') {
  //   console.log('!user && route.path === /login')
  //   // return redirect('/login')
  // }
}
