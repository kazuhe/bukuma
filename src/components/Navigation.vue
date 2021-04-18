<template>
  <div class="navigation">
    <div class="navigation_inner">
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
        <li><nuxt-link to="/authed">認証が必要なページ</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.navigation {
  position: relative;
  border-bottom: 1px solid var(--color-border);

  &_inner {
    height: 50px;
  }
}
</style>
