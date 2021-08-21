<i18n src="~/assets/locales/components/organisms/main-footer.json"></i18n>

<template>
  <footer class="footer">
    <btn
      v-track-links="['Click sign up', { components: 'main-footer' }]"
      href="https://app.hackaru.app/auth?sign-up=true"
      class="btn"
      >{{ $t('signUpButton') }}</btn
    >
    <ul class="footer-menu">
      <li>
        <a
          ref="noopener"
          v-track-links="['Click terms', { components: 'main-footer' }]"
          target="_blank"
          href="https://github.com/hackaru-app/hackaru-terms/blob/master/term-of-service.md"
          >{{ $t('termOfService') }}</a
        >
      </li>
      <li>
        <a
          ref="noopener"
          v-track-links="[
            'Click privacy policy',
            { components: 'main-footer' },
          ]"
          target="_blank"
          href="https://github.com/hackaru-app/hackaru-terms/blob/master/privacy-policy.md"
          >{{ $t('privacyPolicy') }}</a
        >
      </li>
      <li>
        <a
          ref="noopener"
          v-track-links="['Click github', { components: 'main-footer' }]"
          target="_blank"
          href="https://github.com/hackaru-app/hackaru"
          >GitHub</a
        >
      </li>
      <li>
        <a
          ref="noopener"
          v-track-links="['Click twitter', { components: 'main-footer' }]"
          target="_blank"
          href="https://twitter.com/ktmouk"
          >Developer's Twitter</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
import Btn from '~/components/atoms/btn'

export default {
  components: {
    Btn,
  },
}
</script>

<style scoped>
.footer {
  align-items: center;
  background-color: #0001;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer .btn {
  margin: 150px 0;
}
.footer-menu {
  display: flex;
  list-style: none;
  margin-bottom: 40px;
  padding: 0;
}
.footer-menu a {
  color: #f5f6f7;
  padding: 0 10px;
  text-decoration: none;
}
.footer-menu a:hover {
  text-decoration: underline;
}
@media screen and (max-width: 640px) {
  .footer-menu {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }
  .footer-menu a {
    border-top: 1px #00000020 solid;
    box-sizing: border-box;
    display: block;
    padding: 20px 0;
    width: 100%;
  }
}
</style>
