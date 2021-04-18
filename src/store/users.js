export const state = () => ({
  list: [],
  items: {}
})

export const getters = {
  list: state => state.list,
  items: state => state.items
}

export const mutations = {
  setUsers(state, { user }) {
    state.list[user.id] = user
  },
  setUsersItems(state, { items, user }) {
    state.items[user.id] = items
  }
}

export const actions = {
  async fetchUser({ commit }, { id }) {
    const [user, items] = await Promise.all([
      this.$axios.$get(`https://qiita.com/api/v2/users/${id}`),
      this.$axios.$get(`https://qiita.com/api/v2/items?query=user:${id}`)
    ])

    commit('setUsers', { user })
    commit('setUsersItems', { items, user })
  }
}
