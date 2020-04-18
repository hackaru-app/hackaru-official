<template>
  <select :value="$i18n.locale" class="select" @change="change">
    <option v-for="(locale, i) in locales" :key="i" :value="locale.value">
      {{ locale.title }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      locales: [
        { title: 'English', value: 'en' },
        { title: '日本語', value: 'ja' }
      ]
    }
  },
  methods: {
    change(event) {
      this.$i18n.setLocaleCookie(event.target.value)
      this.$router.push(this.switchLocalePath(event.target.value))
    }
  }
}
</script>

<style scoped>
.select {
  color: #fff;
  font-size: 16px;
  border-radius: 3px;
  display: flex;
  border: 0;
  background: none;
  padding: 3px 0;
  border-bottom: 1px #fff solid;
  border-radius: 0;
  -webkit-appearance: none;
  appearance: none;
}
</style>
