<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    if (!process.browser) return
    this.$router.push(
      this.switchLocalePath(
        this.$cookies.get('i18n_redirected') || this.getBrowserLocale()
      )
    )
  },
  methods: {
    getBrowserLocale() {
      return navigator.language.toLocaleLowerCase().substring(0, 2)
    },
  },
}
</script>

<style>
html {
  box-sizing: border-box;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  word-spacing: 1px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  border: 1px solid #3b8070;
  border-radius: 4px;
  color: #3b8070;
  display: inline-block;
  padding: 10px 30px;
  text-decoration: none;
}

.button--green:hover {
  background-color: #3b8070;
  color: #fff;
}

.button--grey {
  border: 1px solid #35495e;
  border-radius: 4px;
  color: #35495e;
  display: inline-block;
  margin-left: 15px;
  padding: 10px 30px;
  text-decoration: none;
}

.button--grey:hover {
  background-color: #35495e;
  color: #fff;
}
</style>
