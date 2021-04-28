<template>
  <div class="card">
    <button
      class="card_flag"
      :class="isFlag ? '-raise' : ''"
      type="button"
      @click="addFlag"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
        ></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
      </svg>
    </button>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: String,
      require: true,
      default: ''
    },
    comment: {
      type: String,
      default: 'is comment'
    },
    url: {
      type: String,
      default: 'https://'
    },
    isFlag: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  methods: {
    async addFlag() {
      const user = this.user
      const bookmarkId = this.id
      console.log({ user, bookmarkId })
      await this.addFlagLogToUser({ user, bookmarkId })
    },
    ...mapActions('bookmarks', ['addFlagLogToUser'])
  }
}
</script>

<style lang="scss">
.card {
  position: relative;
  background-color: #fff;
  box-shadow: 7px 7px 15px rgb(55 84 170 / 15%), -7px -7px 20px #fff,
    0 0 4px hsl(0deg 0% 100% / 20%);
  border-radius: 5px;
  padding: 20px;

  &_flag {
    background: none;
    position: absolute;
    right: 5px;
    top: 5px;
    border-radius: 20px;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
      background: var(--color-background-light);
    }

    &.-raise {
      svg {
        fill: var(--color-primary);
      }
    }
  }
}
</style>
