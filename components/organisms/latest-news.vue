<i18n src="~/assets/locales/components/organisms/latest-news.json"></i18n>

<template>
  <section class="latest-news">
    <a
      href="https://github.com/hackaru-app/hackaru-terms/blob/master/privacy-policy.md"
      target="_blank"
      rel="noopener noreferrer"
    >
      <icon name="volume-2-icon" class="news-icon" />{{ $t('date') }}
      {{ $t('message') }}
    </a>
  </section>
</template>

<script>
import Icon from '~/components/atoms/icon'

export default {
  components: {
    Icon,
  },
  props: {
    date: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.latest-news {
  border-bottom: 1px solid #2e3647;
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}
.news-icon {
  margin-right: 10px;
}
</style>
