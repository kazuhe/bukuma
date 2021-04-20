export const state = () => ({
  items: []
})

export const getters = {
  items: state => state.items
}

export const mutations = {
  setItems(state, { items }) {
    state.items = items
  }
}

export const actions = {
  async fetchItems({ commit }) {
    const items = await this.$axios.$get(
      'https://qiita.com/api/v2/items?query=tag:nuxt.js'
    )
    commit('setItems', { items })
  }
}