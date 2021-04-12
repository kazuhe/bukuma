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
export default {
  async asyncData({ app, route }) {
    const user = await app.$axios.$get(
      `https://qiita.com/api/v2/users/${route.params.users}`
    )

    const items = await app.$axios.$get(
      `https://qiita.com/api/v2/items?query=user:${route.params.users}`
    )

    return {
      user,
      items
    }
  },

  data() {
    return {
      username: this.$route.params.users
    }
  }
}
</script>
