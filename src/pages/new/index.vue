<template>
  <section>
    <div>
      <h2>Create a new bookmark</h2>
      <form class="form">
        <div class="form_item">
          <label for="title">Title</label>
          <input
            id="title"
            v-model="formData.title"
            type="text"
            placeholder="Title"
            autocomplete="title"
          />
        </div>
        <div class="form_item">
          <label for="body">Text</label>
          <input id="body" v-model="formData.body" type="textarea" />
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
        title: '',
        body: ''
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
