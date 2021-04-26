<template>
  <section>
    <div>
      <h2>Create a new bookmark</h2>
      <form class="form">
        <div class="form_item">
          <label for="comment">Comment</label>
          <input
            id="comment"
            v-model="formData.comment"
            type="text"
            placeholder="comment"
          />
        </div>
        <div class="form_item">
          <label for="url">URL</label>
          <input
            id="url"
            v-model="formData.url"
            placeholder="https://"
            type="text"
            autocomplete="url"
          />
        </div>
        <div class="button">
          <button type="button" @click="publish">登録</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  asyncData({ redirect, store }) {
    if (!store.getters.user) {
      redirect('/')
    }
    return {
      formData: {
        comment: '',
        url: ''
      }
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  methods: {
    async publish() {
      const payload = {
        user: this.user,
        ...this.formData
      }
      await this.publishBookmarks({ payload })
      this.$router.push('/')
    },
    ...mapActions('bookmarks', ['publishBookmarks'])
  }
}
</script>
