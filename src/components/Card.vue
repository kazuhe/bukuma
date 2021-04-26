<template>
  <div class="card">
    <p>
      {{ comment }}
      <!-- <nuxt-link :to="`/${item.user.id}`">
                  {{ item.user.id }}
                </nuxt-link> -->
    </p>
    <!-- <div>{{ item.body.slice(0, 130) }}...</div> -->
    <a :href="url">{{ url }}</a>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: String,
      default: 'is comment'
    },
    url: {
      type: String,
      default: 'https://'
    }
  }
}
</script>

<style lang="scss">
.card {
  background-color: #fff;
  box-shadow: 7px 7px 15px rgb(55 84 170 / 15%), -7px -7px 20px #fff,
    0 0 4px hsl(0deg 0% 100% / 20%);
  border-radius: 5px;
  padding: 15px;
}
</style>
