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

  updateBookmarks(state, { bookmark }) {
    state.bookmarks = state.bookmarks.map(p =>
      p.id === bookmark.id ? bookmark : p
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
  },

  async addFlagLogToUser({ commit }, { user, bookmarkId }) {
    // TODO deepコピーを回避
    const isFlag = {
      bookmark_id: bookmarkId,
      flagged_at: dayjs().format()
    }

    // TODO vuexの'state.bookmarks'を参照
    const userBookmarks = await this.$axios.$get(`/users/${user.id}.json`)
    const newUserBookmarks = userBookmarks.bookmarks.map(b => {
      if (b.id === bookmarkId) {
        console.log(b)
        b.isFlag = isFlag
        // commit('updateBookmarks', { b })
      }
      return b
    })
    userBookmarks.bookmarks = newUserBookmarks
    await this.$axios.$put(`users/${user.id}.json`, userBookmarks)
  }
}
