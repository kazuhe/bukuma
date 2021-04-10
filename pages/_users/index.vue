<template>
  <div>
    <p>username: {{ username }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$route.params.users
    }
  }
}
</script>
