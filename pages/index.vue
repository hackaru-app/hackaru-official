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
        <button class="sign-up btn-shadow" type="button">アカウント登録</button>
      </div>
      <div class="smart-phone">
        <div class="activity">
          <div class="activity-content">
            <span class="dot" />
            お仕事
          </div>
          <ticker class="duration" />
        </div>
      </div>
      <img class="header-background" src="~assets/header.png" />
    </div>
    <section class="content">
      <article class="howto">
        <img src="~assets/lets-tracking.png" class="lets-tracking" />
        <div class="text">
          <h1>有意義な時間を、<br />計測しよう。</h1>
          <p>
            勉強、執筆、プログラミング、イラスト制作など、<br />
            あなたの有意義な時間を計測しよう。<br />
            ボタンを押すだけで簡単に。
          </p>
        </div>
      </article>
      <article class="howto">
        <div class="text">
          <h1>時間を振り返ろう。</h1>
          <p>
            あなたの頑張った時間を振り返ろう。<br />
            カレンダーやグラフで、<br />
            分かりやすく視覚的に。
          </p>
        </div>
        <img src="~assets/feedbacks.png" class="feedbacks" />
      </article>
      <article class="howto">
        <img src="~assets/auto-tracking.png" class="auto-tracking" />
        <div class="text">
          <h1>あなたの代わりに<br />自動で計測。</h1>
          <p>
            プログラミング用のエディタを開く。<br />
            イラスト制作ソフトを開く。<br />
            <a
              href="https://github.com/ktmouk/hackaru-desktop/blob/master/README.ja.md"
              target="_blank"
              rel="noopener"
              >Hackaru for Desktop</a
            >
            と合わせて使えば、<br />
            アプリの使用時間を元に、<br />
            自動で時間を計測します。
          </p>
        </div>
      </article>
      <article class="howto">
        <div class="text">
          <h1>スマホで使うのも、<br />一瞬で。</h1>
          <p>
            PWAに対応しているから、<br />
            アプリストアからダウンロードする<br />
            必要はありません。<br />
            ホーム画面に追加するだけで、<br />
            iPhoneでもAndroidでも、<br />
            滑らかに使えます。
          </p>
        </div>
        <img src="~assets/pwa.png" class="pwa" />
      </article>
      <article class="howto">
        <img src="~assets/open-source.png" class="open-source" />
        <div class="text">
          <h1>全てがオープンソース。</h1>
          <p>
            オープンソースだから、<br />
            あなたの自宅のパソコンでも、<br />
            会社のプライベートなネットワークでも。<br />
            自由に、どこでも構築できます。
          </p>
        </div>
      </article>
    </section>
    <footer class="footer">
      <div class="good">
        「われわれは時間を道具のように使わねばいけない。すがりつく松葉杖としてではなく。」
        - John F. Kennedy
      </div>
      <h1>時間の管理を始めよう</h1>
      <button class="footer-sign-up" type="button">アカウント登録</button>
      <div class="footer-links">
        <ul>
          <li>利用規約</li>
          <li>プライバシーポリシー</li>
          <li>開発者のTwitter</li>
          <li>GitHub</li>
        </ul>
      </div>
    </footer>
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
body a {
  color: #2daec4;
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
.lets-tracking {
  width: 480px;
}
.auto-tracking {
  width: 540px;
}
.feedbacks {
  width: 660px;
  margin-right: 50px;
  margin-top: -130px;
}
.pwa {
  width: 600px;
  margin-right: 50px;
}
.open-source {
  width: 300px;
}
.howto {
  margin-bottom: 30px;
  padding: 100px 0;
  display: flex;
  border-bottom: 1px #f5f5f5 solid;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.text {
  margin: 0 50px;
}
.text h1 {
  font-size: 32px;
  margin-bottom: 20px;
}
.text p {
  font-size: 16px;
  color: #555;
  line-height: 1.5;
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
  background-color: #eb4f34;
  margin-right: 10px;
}
.marker {
  background-color: #ffe9b3;
  padding: 0 10px;
  margin-left: -10px;
}
.welcome {
  font-size: 42px;
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
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  background-color: #eb4f34;
  font-weight: normal;
}
.sign-up.btn-shadow {
  box-shadow: 0 5px 0 #c8c9b755;
}
.good {
  font-family: 'Sawarabi Mincho', sans-serif;
  color: #fff;
  padding: 30px 0;
  font-size: 16px;
  background-color: #2e3647;
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
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-color: #fff;
  z-index: 200;
}
.footer {
  text-align: center;
  background-color: #3f4961;
}
.footer-sign-up {
  border: 0;
  padding: 16px 0;
  width: 200px;
  margin-top: 40px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  font-weight: normal;
  background-color: #eb4f34;
}
.footer h1 {
  font-size: 36px;
  padding-top: 100px;
  font-weight: normal;
  color: #fff;
}
.footer-links {
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding: 20px 0;
  padding-bottom: 25px;
}
.footer-links ul {
  display: flex;
  list-style: none;
  padding: 0;
}
.footer-links li {
  color: #fff;
  padding: 0 10px;
  border-right: 1px #2e3647 solid;
}
.footer-links li:last-child {
  border-right: none;
}
</style>
