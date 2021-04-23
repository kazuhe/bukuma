export const state = () => ({
  items: [],
  isLoggedIn: false,
  user: null
})

export const getters = {
  items: state => state.items,
  isLoggedIn: state => state.isLoggedIn,
  user: state => state.user
}

export const mutations = {
  setItems(state, { items }) {
    state.items = items
  },
  setUser(state, { user }) {
    state.user = user
    state.isLoggedIn = true
  }
}

export const actions = {
  async fetchItems({ commit }) {
    const items = await this.$axios.$get(
      'https://qiita.com/api/v2/items?query=tag:nuxt.js'
    )
    commit('setItems', { items })
  },

  async login({ commit }, { id }) {
    const user = await this.$axios.$get(`/users/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  },

  async register({ commit }, { id }) {
    const payload = {}
    payload[id] = { id }
    await this.$axios.$patch(`/users.json`, payload)
    const user = await this.$axios$get(`/users/${id}.json`)
    if (!user.id) throw new Error('Invalid user')
    commit('setUser', { user })
  }
}
