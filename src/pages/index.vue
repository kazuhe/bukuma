<template>
  <div>
    <Wrapper>
      <a href="/login">aタグでリンク</a>
      <app-toggle-button />
      <form class="form">
        <div class="form_item">
          <label for="username">User id</label>
          <input
            id="username"
            v-model="formData.id"
            type="text"
            placeholder=""
            autocomplete="username"
          />
        </div>
        <div class="form_item">
          <label for="isCreateMode">アカウントを作成する</label>
          <input id="isCreateMode" v-model="isCreateMode" type="checkbox" />
        </div>
        <div class="button">
          <button type="button" @click="handleClickSubmit">
            {{ buttonText }}
          </button>
        </div>
      </form>

      <div>
        <section>
          <h2>New bookmarks</h2>
          <ul>
            <li v-for="bookmark in bookmarks" :key="bookmark.id">
              <Card :comment="bookmark.comment" :url="bookmark.url" />
              <p>{{ bookmark.user.id }}</p>
            </li>
          </ul>
        </section>
      </div>
    </Wrapper>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Cookies from 'universal-cookie'

export default {
  async asyncData({ store }) {
    // asyncData({ redirect, store }) {
    // if (store.getters.user) {
    //   redirect('/posts/')
    // }

    await store.dispatch('bookmarks/fetchBookmarks')

    return {
      isCreateMode: false,
      formData: {
        id: ''
      }
    }
  },

  head() {
    return {
      title: 'HOME'
    }
  },

  computed: {
    buttonText() {
      return this.isCreateMode ? 'Sign up' : 'Login'
    },
    ...mapGetters(['user']),
    ...mapGetters('bookmarks', ['bookmarks'])
  },

  methods: {
    handleClick(bookmark) {
      this.$router.push(`/bookmarks/${bookmark.id}`)
    },

    async handleClickSubmit() {
      const cookies = new Cookies()
      if (this.isCreateMode) {
        try {
          await this.register({ ...this.formData })
          console.log({
            type: 'success',
            title: 'アカウント作成完了',
            message: `${this.formData.id}としてとうろくしました`,
            position: 'bottom-right',
            duration: 1000
          })
          cookies.set('user', JSON.stringify(this.user))
          this.$router.push('/posts/')
        } catch (e) {
          console.log({
            title: 'アカウント作成失敗',
            message: `既に登録されているか、不正なidです`,
            position: 'bottom-right',
            duration: 1000
          })
        }
      } else {
        try {
          await this.login({ ...this.formData })
          console.log({
            type: 'success',
            title: 'ログイン成功',
            message: `${this.formData.id}としてログインしました`,
            position: 'bottom-right',
            duration: 1000
          })
          cookies.set('user', JSON.stringify(this.user))
          this.$router.push('/posts/')
        } catch (e) {
          console.log({
            title: 'ログイン失敗',
            message: `不正なidです`,
            position: 'bottom-right',
            duration: 1000
          })
        }
      }
    },
    ...mapActions(['login', 'register'])
  }
}
</script>

<style lang="scss">
.form {
  background: #fcfcfc;
  padding: 30px;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgb(50 50 50 / 10%), 0 5px 15px rgb(0 0 0 / 7%);

  &_item {
    text-align: left;

    label {
      font-weight: bold;
      display: block;
    }

    input[type='text'] {
      border-radius: 5px;
      border: none;
      background: #f2f2f3;
      padding: 10px 15px;
      outline: none;
      margin-top: 5px;
      width: 100%;
    }

    & + .form_item {
      margin: 10px 0 0;
    }
  }
}

.button {
  button {
    color: #fff;
    background: var(--color-primary);
    padding: 5px 15px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    height: 40px;
    display: inline-block;
    cursor: pointer;
    transition: opacity 0.1s;
    min-width: 150px;
  }
}
</style>
