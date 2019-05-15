<i18n src="~/assets/locales/components/organisms/jumbotron.json" />

<template>
  <section class="jumbotron">
    <nav class="nav">
      <locale-select class="locale-select" />
      <ul>
        <li>
          <a
            href="https://app.hackaru.app/auth"
            @click="$ga.event('login', 'header')"
            >{{ $t('login') }}</a
          >
        </li>
        <li>
          <a
            href="https://app.hackaru.app/auth?sign-up=true"
            @click="$ga.event('signUp', 'header')"
            >{{ $t('signUp') }}</a
          >
        </li>
      </ul>
    </nav>
    <header class="header">
      <img src="~/assets/logo.svg" class="logo" alt="" />
      <h1>{{ $t('title') }}</h1>
      <p>{{ $t('description') }}</p>
      <btn href="https://app.hackaru.app/auth?sign-up=true">
        {{ $t('signUpButton') }}</btn
      >
    </header>
  </section>
</template>

<script>
import Btn from '~/components/atoms/btn'
import LocaleSelect from '~/components/atoms/locale-select'

export default {
  components: {
    Btn,
    LocaleSelect
  }
}
</script>

<style scoped>
.jumbotron {
  display: flex;
  flex-direction: column;
  background-color: #323a4d;
  width: 100%;
}
.nav {
  position: absolute;
  justify-content: space-between;
  width: 100%;
  display: flex;
  padding: 25px 20px;
  padding-left: 30px;
  align-items: baseline;
}
.nav ul {
  display: flex;
  list-style: none;
  justify-content: flex-end;
  list-style-position: inside;
}
.nav li a {
  color: #f5f6f7;
  padding: 10px 15px;
  text-decoration: none;
}
.nav li a:hover {
  text-decoration: underline;
}
.nav .sign-in a {
  border: 0;
  border-radius: 3px;
  text-decoration: none;
  padding: 8px 20px;
  color: #ffd96a;
  font-weight: 400;
  font-size: 14px;
  border: 2px #ffd96a solid;
  transition: all 0.3s ease;
  transform: scale(1);
}
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  padding-bottom: 25px;
}
.header .logo {
  width: 30px;
  height: 30px;
}
.header h1 {
  margin: 20px 0;
  margin-bottom: 10px;
  font-weight: normal;
  color: #fff;
  font-size: 32px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}
.header p {
  color: #ccc;
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
}
@media screen and (max-width: 640px) {
  .header h1 {
    font-size: 22px;
  }
  .header p {
    font-size: 14px;
  }
}
</style>
