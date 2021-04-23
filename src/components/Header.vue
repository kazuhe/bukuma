<template>
  <header class="header">
    <Wrapper>
      <div class="header_inner">
        <h1><nuxt-link to="/">bukuma</nuxt-link></h1>
        <Navigation />
      </div>
    </Wrapper>
  </header>
</template>

<style lang="scss">
.header {
  position: relative;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-background);

  &_inner {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    color: #fff;
  }
}
</style>
