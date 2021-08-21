<i18n src="~/assets/locales/components/organisms/other-features.json"></i18n>

<template>
  <section class="other-features">
    <h1>{{ $t('title') }}</h1>
    <div class="other-feature-list">
      <other-feature :image="require('~/assets/pwa.png')" :title="$t('pwa')" />
      <other-feature
        :image="require('~/assets/oauth.png')"
        :title="$t('oauth')"
      />
      <other-feature
        :image="require('~/assets/open-source.png')"
        :title="$t('openSource')"
      />
    </div>
  </section>
</template>

<script>
import OtherFeature from '~/components/molecules/other-feature'

export default {
  components: {
    OtherFeature,
  },
}
</script>

<style scoped>
.other-features {
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 100px 0;
  width: 100%;
}
.other-features > h1 {
  color: #fff;
  font-size: 32px;
  font-weight: 200;
  margin-bottom: 80px;
}
.other-feature-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media screen and (max-width: 640px) {
  .other-features > h1 {
    font-size: 28px;
  }
}
</style>
