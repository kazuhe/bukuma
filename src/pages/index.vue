<template>
  <div>
    <h1>Hello world!</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h2>
          {{ item.title }} <span>by </span>
          <nuxt-link :to="`/${item.user.id}`">
            {{ item.user.id }}
          </nuxt-link>
        </h2>
        <div>{{ item.body.slice(0, 130) }}...</div>
        <a :href="item.url">{{ item.url }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    if (store.getters.items.length) {
      return
    }
    await store.dispatch('fetchItems')
  },

  head() {
    return {
      title: 'HOME'
    }
  },

  computed: {
    ...mapGetters(['items'])
  }
}
</script>
