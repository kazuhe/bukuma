<template>
  <div class="users">
    <div class="users_header">
      <Wrapper>
        <div class="profile">
          <img
            src="https://d36jcksde1wxzq.cloudfront.net/saas-mega/blueFingerprint.png"
            width="120"
            alt=""
          />
          <div class="profile_info">
            <h2>{{ user.id }}</h2>
          </div>
        </div>
      </Wrapper>
    </div>
    <div class="users_body">
      <Wrapper>
        <div class="bookmarks">
          <ul class="bookmarks_list">
            <li v-for="item in user.bookmarks" :key="item.id">
              <Card :comment="item.comment" :url="item.url" />
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ route, store, redirect }) {
    if (store.getters['users/users'][route.params.users]) {
      return
    }
    try {
      await store.dispatch('users/fetchUser', {
        id: route.params.users
      })
    } catch (e) {
      redirect('/')
    }
  },

  data() {
    return {
      username: this.$route.params.users
    }
  },

  head() {
    return {
      title: `${this.users.id}の記事一覧`
    }
  },

  computed: {
    user() {
      const user = this.users.find(u => u.id === this.$route.params.users)
      return user
    },

    bookmarks() {
      return this.users
    },

    ...mapGetters({
      users: 'users/users'
    })
  }
}
</script>

<style lang="scss">
.users {
  &_header {
    margin: 30px 0 0;
    padding: 0 0 30px;
    border-bottom: 1px solid var(--color-border);
  }

  &_body {
    background: var(--color-background-light);
    padding: 50px 0;
  }
}

.profile {
  display: flex;

  img {
    width: 80px;
    display: block;
  }

  &_info {
    margin: 0 0 0 50px;

    h2 {
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.bookmarks {
  &_list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2em 1.8em;
  }
}
</style>
