<i18n src="~/assets/locales/components/organisms/other-features.json" />

<template>
  <section class="other-features">
    <h1>{{ $t('title') }}</h1>
    <div class="other-feature-list">
      <other-feature :image="require('~/assets/pwa.png')" :title="$t('pwa')" />
      <other-feature
        :image="require('~/assets/webhook.png')"
        :title="$t('webhook')"
      />
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
    OtherFeature
  }
}
</script>

<style scoped>
.other-features {
  max-width: 100%;
  width: 100%;
  padding: 100px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.other-features > h1 {
  font-size: 32px;
  margin-bottom: 80px;
  font-weight: 200;
  color: #fff;
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
