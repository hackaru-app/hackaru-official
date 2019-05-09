<i18n src="~/assets/locales/components/organisms/features.json" />

<template>
  <section>
    <feature class="reverse">
      <div class="description">
        <h1>{{ $t('tracking.title') }}</h1>
        <p>{{ $t('tracking.description') }}</p>
      </div>
      <img src="~/assets/tracking.png" class="small" alt="" />
    </feature>

    <feature>
      <div class="description">
        <h1>{{ $t('calendar.title') }}</h1>
        <p>{{ $t('calendar.description') }}</p>
      </div>
      <img src="~/assets/calendar.png" alt="" />
    </feature>

    <feature class="reverse">
      <div class="description">
        <h1>{{ $t('reports.title') }}</h1>
        <p>{{ $t('reports.description') }}</p>
      </div>
      <img src="~/assets/reports.png" alt="" />
    </feature>

    <feature>
      <div class="description">
        <h1>{{ $t('autoTracking.title') }}</h1>
        <p>{{ $t('autoTracking.description') }}</p>
        <a
          ref="noopener"
          href="https://github.com/ktmouk/hackaru-desktop"
          target="_blank"
          class="learn-more"
          @click="$ga.event('desktop', 'features')"
          >{{ $t('autoTracking.more') }}</a
        >
      </div>
      <img src="~/assets/auto-tracking.png" alt="" />
    </feature>
  </section>
</template>

<script>
import Feature from '~/components/molecules/feature'

export default {
  components: {
    Feature
  }
}
</script>

<style scoped>
a.learn-more {
  color: #ffd96a;
  font-size: 16px;
  margin-top: 10px;
  align-self: flex-start;
}
@media screen and (max-width: 1024px) {
  a.learn-more {
    align-self: center;
  }
}
</style>
