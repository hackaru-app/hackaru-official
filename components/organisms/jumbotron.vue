<template>
  <section class="jumbotron">
    <nav class="nav">
      <ul>
        <li><a href="https://app.hackaru.app/auth">Login</a></li>
        <li><a href="https://app.hackaru.app/auth?sign-up=true">Sign-up</a></li>
      </ul>
    </nav>
    <header class="header">
      <img src="~/assets/logo.svg" class="logo" alt="">
      <h1>Manage your meaningful time.</h1>
      <p>Open-source Time Tracking Application.</p>
      <btn href="https://app.hackaru.app/auth?sign-up=true">Start using Hackaru</btn>
    </header>
  </section>
</template>

<script>
import Btn from '~/components/atoms/btn';

export default {
  components: {
    Btn
  }
}
</script>


<style scoped>
.jumbotron {
  display: flex;
  flex-direction: column;
  background-color: #323A4D;
  width: 100%;
}
.nav ul {
  position: absolute;
  right: 0;
  display: flex;
  list-style: none;
  justify-content: flex-end;
  margin: 30px 20px;
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
  color: #eeeeee;
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}
</style>
