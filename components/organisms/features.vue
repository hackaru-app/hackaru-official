<i18n src="~/assets/locales/components/organisms/features.json"></i18n>

<template>
  <section id="features">
    <feature
      :title="$t('tracking.title')"
      :image="require('~/assets/tracking.png')"
      class="reverse"
    >
      <p>{{ $t('tracking.description') }}</p>
    </feature>
    <feature
      :title="$t('calendar.title')"
      :image="require('~/assets/calendar.png')"
    >
      <p>{{ $t('calendar.description') }}</p>
    </feature>
    <feature
      :title="$t('reports.title')"
      :image="require('~/assets/reports.png')"
      class="reverse"
    >
      <p>{{ $t('reports.description') }}</p>
    </feature>
    <feature
      :title="$t('autoTracking.title')"
      :image="require('~/assets/desktop.png')"
    >
      <p>{{ $t('autoTracking.description') }}</p>
      <a
        ref="noopener"
        v-track-links="[
          'Click learn-more of desktop',
          { components: 'features' },
        ]"
        href="https://github.com/hackaru-app/hackaru-desktop#download"
        target="_blank"
        class="download"
        >{{ $t('autoTracking.download') }}</a
      >
    </feature>
  </section>
</template>

<script>
import Feature from '~/components/molecules/feature'

export default {
  components: {
    Feature,
  },
}
</script>

<style scoped>
a.download {
  align-self: flex-start;
  color: #ffd96a;
  font-size: 16px;
  margin-top: 10px;
}
@media screen and (max-width: 1024px) {
  a.download {
    align-self: center;
  }
}
</style>
