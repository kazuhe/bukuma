<template>
  <div>
    <Wrapper>
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
          <button type="button">
            {{ buttonText }}
          </button>
        </div>
      </form>
    </Wrapper>
  </div>
</template>

<script>
export default {
  asyncData() {
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
    }
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
