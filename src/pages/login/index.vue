<template>
  <div>
    <h2>Loginページ</h2>
    <div>
      <button type="button" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
  methods: {
    login() {
      const cookies = new Cookies()
      cookies.set('credential', 'true', { maxAge: 90 })
      this.$router.push('/')
    }
  }
}
</script>
