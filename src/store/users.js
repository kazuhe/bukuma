export const state = () => ({
  users: []
})

export const getters = {
  users: state => state.users
}

export const mutations = {
  addUser(state, { user }) {
    state.users.push(user)
  },

  addUserBookmark(state, { bookmark, user }) {
    state.users[user.id].bookmarks.push(bookmark)
  },

  clearUserBookmarks(state, { user }) {
    state.users[user.id] = []
  }
}

export const actions = {
  async fetchUser({ commit }, { id }) {
    const user = await this.$axios.$get(`/users/${id}.json`)
    commit('addUser', { user })
  }
}
