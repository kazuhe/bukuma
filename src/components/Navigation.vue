<template>
  <div class="navigation">
    <ul class="navigation_list">
      <li><nuxt-link to="/posts">一覧</nuxt-link></li>
      <li><nuxt-link to="/posts/new">Posts</nuxt-link></li>
      <li><nuxt-link to="/authed">認証が必要なページ</nuxt-link></li>
      <li v-if="user"><UserMenu /></li>
      <li v-else><nuxt-link to="/login">Login</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style lang="scss">
.navigation {
  position: relative;

  &_list {
    display: flex;
    align-items: center;
    margin: 0 -10px;

    li {
      margin: 0 10px;
    }
  }
}
</style>
