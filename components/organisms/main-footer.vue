<template>
  <footer class="footer">
    <btn
      href="https://app.hackaru.app/auth?sign-up=true"
      class="btn"
      @click="$ga.event('signUp', 'footer')"
      >Start using Hackaru</btn
    >
    <ul class="footer-menu">
      <li>
        <a
          ref="noopener"
          target="_blank"
          href="https://github.com/ktmouk/hackaru-terms-and-policies/blob/master/term-of-service.md"
          @click="$ga.event('terms', 'footer')"
          >Term of Service</a
        >
      </li>
      <li>
        <a
          ref="noopener"
          target="_blank"
          href="https://github.com/ktmouk/hackaru-terms-and-policies/blob/master/privacy-policy.md"
          @click="$ga.event('privacy', 'footer')"
          >Privacy policy</a
        >
      </li>
      <li>
        <a
          ref="noopener"
          target="_blank"
          href="https://github.com/ktmouk/hackaru"
          @click="$ga.event('github', 'footer')"
          >GitHub</a
        >
      </li>
      <li>
        <a
          ref="noopener"
          target="_blank"
          href="https://twitter.com/hackaru"
          @click="$ga.event('twitter', 'footer')"
          >Twitter</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
import Btn from '~/components/atoms/btn'

export default {
  components: {
    Btn
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00000011;
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
  padding: 0 10px;
  text-decoration: none;
  color: #f5f6f7;
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
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
    border-top: 1px #00000020 solid;
  }
}
</style>
