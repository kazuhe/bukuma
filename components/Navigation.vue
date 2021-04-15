<template>
  <div class="navigation">
    <div class="navigation_inner">
      <ul>
        <li><nuxt-link to="/">home</nuxt-link></li>
        <li><nuxt-link to="/">home</nuxt-link></li>
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
