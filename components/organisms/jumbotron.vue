<i18n src="~/assets/locales/components/organisms/jumbotron.json"></i18n>

<template>
  <section class="jumbotron">
    <nav class="nav">
      <locale-select class="locale-select" />
      <ul>
        <li>
          <a
            v-track-links="['Click login', { components: 'jumbotron' }]"
            href="https://app.hackaru.app/auth"
            >{{ $t('login') }}</a
          >
        </li>
        <li>
          <a
            v-track-links="['Click sign up', { components: 'jumbotron' }]"
            href="https://app.hackaru.app/auth?sign-up=true"
            >{{ $t('signUp') }}</a
          >
        </li>
      </ul>
    </nav>
    <header class="header">
      <img src="~/assets/logo.svg" class="logo" alt="" />
      <h1>{{ $t('title') }}</h1>
      <p>{{ $t('description') }}</p>
      <btn
        v-track-links="['Click sign up', { components: 'jumbotron' }]"
        href="https://app.hackaru.app/auth?sign-up=true"
      >
        {{ $t('signUpButton') }}</btn
      >
    </header>
    <a
      v-smooth-scroll
      v-track-links="['Click scroll-down', { components: 'jumbotron' }]"
      href="#features"
      class="scroll-down"
    >
      {{ $t('readMore') }}
      <icon name="chevron-down-icon" class="down-icon" />
    </a>
  </section>
</template>

<script>
import Btn from '~/components/atoms/btn'
import Icon from '~/components/atoms/icon'
import LocaleSelect from '~/components/atoms/locale-select'

export default {
  components: {
    Btn,
    Icon,
    LocaleSelect,
  },
}
</script>

<style scoped lang="css">
.jumbotron {
  align-items: center;
  background-color: #323a4d;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.nav {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 25px 20px;
  padding-left: 30px;
  position: absolute;
  width: 100%;
}

.nav ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  list-style-position: inside;
}

.nav li a {
  color: #f5f6f7;
  padding: 10px 15px;
  text-decoration: none;
}

.nav .sign-in a {
  border: 0;
  border: 2px #ffd96a solid;
  border-radius: 3px;
  color: #ffd96a;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 20px;
  text-decoration: none;
  transform: scale(1);
  transition: all 0.3s ease;
}

.nav li a:hover {
  text-decoration: underline;
}

.header {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 575px;
  justify-content: center;
}

.header .logo {
  height: 30px;
  width: 30px;
}

.header h1 {
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 32px;
  font-weight: normal;
  font-weight: 300;
  margin: 20px 0;
  margin-bottom: 10px;
  text-align: center;
}

.header p {
  color: #ccc;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
}

.scroll-down {
  align-items: center;
  color: #f5f6f7;
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 0 20px;
}

.scroll-down:hover {
  text-decoration: none;
}

.down-icon {
  color: #f5f6f7;
  height: 28px;
  margin-bottom: 35px;
  margin-top: 2px;
  position: relative;
  top: 0;
  transition: top 0.3s ease;
  width: 28px;
}

.scroll-down:hover .down-icon {
  top: 5px;
}

@media screen and (max-width: 640px) {
  .scroll-down:hover .down-icon {
    top: 0;
  }

  .header h1 {
    font-size: 22px;
  }

  .header p {
    font-size: 14px;
  }
}
</style>
