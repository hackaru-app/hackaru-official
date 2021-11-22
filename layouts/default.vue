<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
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
  text-size-adjust: 100%;
  word-spacing: 1px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
