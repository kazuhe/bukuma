<template>
  <div>
    <nuxt-link to="/">トップページへ戻る</nuxt-link>
    <p>Count: {{ count }}</p>
    <button type="button" @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters('counter', ['count'])
  },

  methods: {
    ...mapActions('counter', ['increment'])
  }
}
</script>
