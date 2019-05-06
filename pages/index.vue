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
        <p>Open-source Time Tracking Application.</p>
        <a href="https://app.hackaru.app/auth?sign-up=true" class="sign-in">Start using Hackaru</a>
      </header>
    </section>

    <section class="content">
      <article class="feature measure">
        <div class="description">
          <h1>Measure your time.</h1>
          <p>Hackaru is the cross-platform and open-source time tracking application. You can measure your meaningful time like reading book, study, programming.</p>
        </div>
        <img src="~/assets/measure.png" class="cell-phone" alt="">
      </article>

      <article class="feature calendar">
        <div class="description">
          <h1>Calendar</h1>
          <p>Hackaru is the cross-platform and open-source time tracking application. You can measure your meaningful time like reading book, study, programming.</p>
        </div>
        <img src="~/assets/calendar.png" class="desktop" alt="">
      </article>

      <article class="feature reports">
        <div class="description">
          <h1>Report</h1>
          <p>Hackaru is the cross-platform and open-source time tracking application. You can measure your meaningful time like reading book, study, programming.</p>
        </div>
        <img src="~/assets/reports.png" class="desktop" alt="">
      </article>

      <article class="feature desktop-app">
        <div class="description">
          <h1>Auto Tracking</h1>
          <p>Hackaru is the cross-platform and open-source time tracking application. You can measure your meaningful time like reading book, study, programming.</p>
          <a href="https://app.hackaru.app/auth?sign-up=true" class="download">Learn more</a>
        </div>
        <img src="~/assets/reports.png" class="desktop" alt="">
      </article>

      <section class="other-features">
        <h1>...And other great features.</h1>
        <div class="other-feature-list">
          <article class="other-feature">
            <div class="image-wrapper">
              <img src="~/assets/pwa.png" alt="">
            </div>
            <h1>PWA Support</h1>
          </article>
          <article class="other-feature">
            <div class="image-wrapper">
              <img src="~/assets/webhook.png" alt="">
            </div>
            <h1>Webhook Support</h1>
          </article>
          <article class="other-feature">
            <div class="image-wrapper">
              <img src="~/assets/oauth.png" alt="">
            </div>
            <h1>OAuth 2.0 Support</h1>
          </article>
        </div>
      </section>
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
  margin-bottom: 10px;
  font-weight: normal;
  color: #fff;
  font-size: 26px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}
.header p {
  color: #cdd0d1;
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
}
.header .sign-in,
.download {
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
  flex-direction: column;
  align-items: center;
  color: #fff;
}
.feature {
  border-bottom: 1px #00000011 solid;
  padding: 100px 0;
  width: 860px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.feature:nth-child(odd) .description {
  order: 2;
}
.feature:nth-child(odd) img {
  order: 1;
  margin-right: 50px;
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
.download {
  margin-top: 30px;
  align-self: flex-start;
}
.feature img {
  flex-shrink: 0;
  border-radius: 5px;
}
.feature img.cell-phone {
  width: 300px;
}
.feature img.desktop {
  width: 560px;
}
.other-features {
  width: 860px;
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
.other-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 0 20px;
}
.other-feature h1 {
  font-size: 16px;
  font-weight: 200;
  padding: 20px;
}
.other-feature .image-wrapper {
  display: block;
  width: 180px;
  background-color: #00000011;
  border-radius: 10px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.other-feature img {
  width: 80px;
}
.other-feature-list {
  display: flex;
}
@media screen and (max-width: 640px) {
  .jumbotron {
    height: 90vh;
  }
  .header h1 {
    font-size: 22px;
  }
  .feature {
    padding: 30px;
    box-sizing: border-box;
    width: 100%;
    margin-top: 50px;
    flex-direction: column;
  }
  .feature h1 {
    font-size: 26px;
  }
  .feature p {
    font-size: 14px;
  }
  .feature:nth-child(odd) img {
    order: 2;
    margin-right: 0;
  }
  .feature .description {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-bottom: 40px;
  }
  .feature img {
    width: 300px !important;
  }
}
</style>
