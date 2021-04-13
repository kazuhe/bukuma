<template>
  <div>
    <p>username: {{ username }}</p>
    <img :src="user.profile_image_url" width="120" alt="" />
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
  async asyncData({ route, store, redirect }) {
    if (store.getters.users[route.params.users]) {
      return
    }
    try {
      await store.dispatch('fetchUserInfo', { id: route.params.users })
    } catch (e) {
      redirect('/')
    }
  },

  data() {
    return {
      username: this.$route.params.users
    }
  },

  head() {
    return {
      title: `${this.user.id}の記事一覧`
    }
  },

  computed: {
    user() {
      return this.users[this.$route.params.users]
    },
    items() {
      return this.userItems[this.$route.params.users] || []
    },

    ...mapGetters(['users', 'userItems'])
  }
}
</script>
