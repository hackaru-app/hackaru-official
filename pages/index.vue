<template>
  <section class="wrapper">
    <section class="jumbotron">
      <nav class="nav">
        <ul>
          <li><a href="https://app.hackaru.app/auth">Login</a></li>
          <li><a href="https://app.hackaru.app/auth">Sign-up</a></li>
        </ul>
      </nav>
      <header class="header">
        <img src="~/assets/logo.svg" class="logo" alt="">
        <h1>Manage your meaningful time.</h1>
        <a href="https://app.hackaru.app/auth?sign-up=true" class="sign-in">Start using Hackaru</a>
      </header>
    </section>

    <section class="content">
      <article class="feature">
        <div class="description">
          <h1>Measure your time easily.</h1>
          <p>Hackaru is the cross-platform and open-source time tracking application. You can measure your meaningful time like reading book, study, programming.</p>
        </div>
        <img src="~/assets/measure.png" alt="">
      </article>
    </section>
  </section>
</template>

<script>
import { parse } from 'date-fns'
import Ticker from '../components/ticker'

export default {
  components: {
    Ticker
  },
  data() {
    return {
      parse
    }
  }
}
</script>

<style>
body {
  background-color: #2E3647;
  font-size: 14px;
}
.wrapper {
  flex-direction: column;
}

/** Headers **/
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
  font-weight: normal;
  color: #fff;
  font-size: 26px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}
.header .sign-in {
  border: 0;
  border-radius: 5px;
  text-decoration: none;
  padding: 15px 25px;
  margin-top: 10px;
  color: #323A4D;
  font-size: 16px;
  background-color: #ffd96a;
  transition: all 0.3s ease;
  transform: scale(1);
}
.header .sign-in:hover {
  transform: scale(1.05);
}
.header .sign-in:active {
  transform: scale(1);
}

/** Content */
.content {
  display: flex;
  justify-content: center;
  align-self: center;
  color: #fff;
}
.feature {
  margin: 100px 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.feature .description {
  display: flex;
  width: 420px;
  flex-direction: column;
  margin-right: 50px;
}
.feature h1 {
  font-size: 32px;
  font-weight: 200;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px #ffd96a solid;
  color: #fff;
}
.feature p {
  line-height: 1.5;
  font-size: 16px;
  color: #cdd0d1;
}
.feature img {
  width: 300px;
  flex-shrink: 0;
  box-shadow: 0 3px 10px 5px #00000010;
  border-radius: 5px;
}
@media screen and (max-width: 640px) {
  .jumbotron {
    height: 90vh;
  }
  .header h1 {
    font-size: 22px;
  }
  .feature {
    margin: 0;
    margin-top: 100px;
    flex-direction: column;
  }
  .feature h1 {
    font-size: 26px;
  }
  .feature p {
    font-size: 14px;
    padding: 0 30px;
  }
  .feature .description {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-bottom: 40px;
  }
}
</style>
