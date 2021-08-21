<i18n src="~/assets/locales/components/organisms/latest-news.json"></i18n>

<template>
  <section class="latest-news">
    <a
      v-track-links="['Click latest news', { components: 'latest-news' }]"
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
}
</script>

<style scoped>
.latest-news {
  border-bottom: 1px solid #2e3647;
  font-size: 14px;
  padding: 10px 0;
  text-align: center;
}
.news-icon {
  margin-right: 10px;
}
</style>
