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
export default {
  async asyncData({ app }) {
    const items = await app.$axios.$get(
      'https://qiita.com/api/v2/items?query=tag:nuxt.js'
    )

    return {
      items
    }
  },

  async mounted() {
    console.log(
      JSON.stringify(
        await this.$axios.$get(
          'https://qiita.com/api/v2/items?query=tag:nuxt.js'
        ),
        true,
        ' '
      )
    )
  }
}
</script>
