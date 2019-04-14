<template>
  <section class="container">
    <header>
      <nav>
        <h1 class="title" href="#">
          <img class="logo" src="~assets/logo.svg" />
          Hackaru
        </h1>
        <ul class="menu">
          <li class="button">ログイン</li>
        </ul>
      </nav>
    </header>
    <div class="junbotron">
      <div class="message">
        <h1 class="welcome">
          あなたの<br /><span class="marker">大切な時間</span
          >を<br />管理しよう。
        </h1>
        <p>
          スマートフォンから、パソコンから。<br />全て無料で簡単に計測できます。
        </p>
        <button class="sign-up" type="button">アカウント登録</button>
      </div>
      <div class="smart-phone">
        <div class="activity">
          <div class="activity-content">
            <span class="dot" />
            開発
          </div>
          <ticker class="duration" />
        </div>
      </div>
      <img class="header-background" src="~assets/header.png" />
    </div>
    <section class="content">
      aaa
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
  font-family: -apple-system, sans-serif;
  font-size: 14px;
  background-color: #f5f5f5;
}
header h1 {
  color: #000;
  display: flex;
  align-items: center;
  font-weight: normal;
}
h1 img {
  margin-right: 10px;
}
.junbotron {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #e6e8d3;
  box-shadow: 0 -5px 0 #c8c9b720 inset;
  background-image: url('~assets/header-background.png');
  background-size: 15%;
  background-repeat: repeat;
}
.dot {
  display: flex;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: #7da87b;
  margin-right: 10px;
}
.marker {
  background-color: #ffe9b3;
  padding: 0 10px;
  margin-left: -10px;
}
.welcome {
  font-size: 38px;
  font-weight: normal;
  color: #000;
  margin-bottom: 20px;
}
.junbotron {
  display: flex;
}
.login {
  font-size: 15px;
  margin-top: 30px;
}
.message {
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  font-size: 18px;
}
.sign-up {
  border: 0;
  padding: 16px 0;
  width: 200px;
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  background-color: #eb4f34;
  box-shadow: 0 5px 0 #c8c9b755;
  font-weight: normal;
}
.header-background {
  height: 560px;
}
.smart-phone {
  position: absolute;
  width: 400px;
  right: 480px;
  bottom: 150px;
  background-image: url('~assets/smart-phone.png');
  background-size: 400px;
  background-repeat: no-repeat;
  height: 500px;
}
.activity {
  display: flex;
  align-items: center;
  border: 1px #f5f5f5 solid;
  border-left: 0;
  border-right: 0;
  padding: 18px 16px;
  padding-right: 20px;
  font-size: 13px;
  color: #000;
  margin-left: 90px;
  width: 232px;
  margin-top: 150px;
  z-index: 101;
}
.activity-content {
  display: flex;
  align-items: center;
  flex: 1;
}
.duration {
  font-family: 'Arial', sans-serif;
  color: #3f4961;
}
header {
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;
  padding: 15px 20px;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0 3px 3px #00000020;
  opacity: 0.98;
}
header nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}
header .logo {
  width: 20px;
  height: 20px;
}
.menu {
  list-style-type: none;
  display: flex;
  align-items: center;
  color: #fff;
}
.menu li {
  padding: 0 30px;
  color: #3f4961;
}
.menu .button {
  border: 0;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #2daec4;
  font-weight: normal;
  color: #fff;
}
.content {
  position: relative;
  width: 100%;
  background-color: #fff;
  height: 500px;
  z-index: 200;
}
</style>
