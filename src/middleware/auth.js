import Cookies from 'universal-cookie'

export default ({ req, store }) => {
  if (process.client) {
    return
  }

  // if (['/'].includes(route.path)) {
  //   return
  // }

  const cookies = new Cookies(req.headers.cookies)
  const user = cookies.get('user')

  if (user && user.id) {
    const { id, likes } = user
    store.commit('setUser', { user: { id, likes } })
    console.log('auth.js ~~ setUser')
  }

  // if (!credential && route.path !== '/login') {
  //   console.log('!credential && route.path === /login')
  //   return redirect('/login')
  // }
}
