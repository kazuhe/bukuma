import dayjs from '~/plugins/dayjs'

export const state = () => ({
  bookmarks: []
})

export const getters = {
  bookmarks: state => state.bookmarks
}

export const mutations = {
  addBookmarks(state, { bookmarks }) {
    state.bookmarks.push(bookmarks)
  },

  updateBookmarks(state, { bookmarks }) {
    state.bookmarks = state.bookmarks.map(p =>
      p.id === bookmarks.id ? bookmarks : p
    )
  },

  clearBookmarks(state) {
    state.bookmarks = []
  }
}

export const actions = {
  async publishBookmarks({ commit }, { payload }) {
    const user = await this.$axios.$get(`/users/${payload.user.id}.json`)
    const bookmarksId = (await this.$axios.$post('/bookmarks.json', payload))
      .name
    const createdAt = dayjs().format()
    const bookmarks = {
      id: bookmarksId,
      ...payload,
      created_at: createdAt
    }
    const putData = {
      id: bookmarksId,
      ...payload,
      created_at: createdAt
    }
    delete putData.user
    await this.$axios.$put(`/users/${user.id}/bookmarks.json`, [
      ...(user.bookmarks || []),
      putData
    ])
    commit('addBookmarks', { bookmarks })
  },

  async fetchBookmarks({ commit }) {
    const bookmarks = await this.$axios.$get(`/bookmarks.json`)
    commit('clearBookmarks')
    console.log(Object.entries(bookmarks))
    Object.entries(bookmarks)
      .reverse()
      .forEach(([id, content]) => {
        commit('addBookmarks', {
          bookmarks: {
            id,
            ...content
          }
        })
      })
  }
}
