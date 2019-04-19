<template>
  <section class="container">
    <header class="header">
      <nav>
        <a href="./">
          <h1 class="title">
            <img src="~assets/logo.svg" />
            Hackaru <span>ハカル</span>
          </h1>
        </a>
        <a
          class="login-btn"
          href="https://app.hackaru.app/ja/auth"
          @click="$ga.event('login', 'login')"
          >ログイン</a
        >
      </nav>
    </header>

    <section class="jumbotron">
      <div class="jumbotron-content">
        <h1>
          あなたの<br /><span class="marker">大切な時間</span>を<br />管理しよう
        </h1>
        <p>スマホから、パソコンから、<br />全て無料で簡単に計測できます</p>
        <a
          class="sign-up-btn"
          href="https://app.hackaru.app/ja/auth?sign-up=true"
          @click="$ga.event('signUp', 'top')"
          >アカウント登録</a
        >
      </div>
      <div class="desktop">
        <div class="iphone">
          <div class="activity">
            <div class="activity-content">
              <span class="dot" />
              テスト勉強
            </div>
            <ticker class="duration" />
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <article class="feature">
        <img src="~assets/feature-tracking.png" />
        <div>
          <h1>有意義な時間を<br />計測しよう。</h1>
          <p>
            勉強、執筆、プログラミング、イラスト制作など、<br />
            あなたの有意義な時間を計測しよう。<br />
            ボタンを押すだけで簡単に。
          </p>
        </div>
      </article>
      <article class="feature">
        <div>
          <h1>時間を振り返ろう。</h1>
          <p>
            あなたの頑張った時間を振り返ろう。<br />
            カレンダーやグラフで、<br />
            分かりやすく視覚的に。
          </p>
        </div>
        <img src="~assets/feature-feedbacks.png" />
      </article>
      <article class="feature">
        <img src="~assets/feature-auto-tracking.png" />
        <div>
          <h1>あなたの代わりに<br />自動で計測。</h1>
          <p>
            プログラミング用のエディタを開く。<br />
            イラスト制作ソフトを開く。<br />
            <a
              href="https://github.com/ktmouk/hackaru-desktop/blob/master/README.ja.md"
              target="_blank"
              rel="noopener"
              @click="$ga.event('links', 'for-desktop')"
              >Hackaru for Desktop</a
            >
            と合わせて使えば、<br />
            アプリの使用時間を元に、<br />
            自動で時間を計測します。
          </p>
        </div>
      </article>
      <article class="feature">
        <div>
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
        <img src="~assets/feature-pwa.png" />
      </article>
      <article class="feature no-border">
        <img src="~assets/feature-open-source.png" />
        <div>
          <h1>全てがオープンソース。</h1>
          <p>
            オープンソースだから、<br />
            あなたの自宅のパソコンでも、<br />
            会社のプライベートなネットワークでも。<br />
            自由に、どこでも構築できます。
          </p>
        </div>
      </article>

      <footer class="footer">
        <div class="i-think-too">
          「われわれは時間を道具のように使わねばいけない。すがりつく松葉杖としてではなく。」
          - John F. Kennedy
        </div>
        <h1>時間の管理を始めよう</h1>
        <a
          class="footer-sign-up"
          href="https://app.hackaru.app/ja/auth?sign-up=true"
          @click="$ga.event('signUp', 'bottom')"
          >アカウント登録</a
        >
        <div class="footer-links">
          <ul>
            <li>
              <a
                href="https://github.com/ktmouk/hackaru-terms-and-policies/blob/master/term-of-service.md"
                target="_blank"
                rel="noopener"
                @click="$ga.event('links', 'terms')"
                >利用規約</a
              >
            </li>
            <li>
              <a
                href="https://github.com/ktmouk/hackaru-terms-and-policies/blob/master/privacy-policy.md"
                target="_blank"
                rel="noopener"
                @click="$ga.event('links', 'policy')"
                >プライバシーポリシー</a
              >
            </li>
            <li>
              <a
                href="https://twitter.com/ktmouk"
                target="_blank"
                rel="noopener"
                @click="$ga.event('links', 'twitter')"
                >開発者のTwitter</a
              >
            </li>
            <li>
              <a
                href="https://github.com/ktmouk/hackaru"
                target="_blank"
                rel="noopener"
                @click="$ga.event('links', 'github')"
                >GitHub</a
              >
            </li>
          </ul>
          <p class="ga">
            <a
              target="_blank"
              rel="noopener"
              href="https://policies.google.com/technologies/partner-sites"
              >このサイトではアクセス解析に GoogleAnalytics
              を利用しています。</a
            >
          </p>
        </div>
      </footer>
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
  background-color: #fff;
}
body a {
  color: #2daec4;
}
.header {
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
.header nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
}
.header nav a {
  text-decoration: none;
}
.title {
  color: #000;
  display: flex;
  align-items: center;
  font-weight: normal;
}
.title:hover {
  opacity: 0.7;
}
.title img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.title span {
  color: #68757d;
  margin-left: 10px;
}
.login-btn {
  display: block;
  border: 0;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #2daec4;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  transform: scale(1);
}
.login-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.login-btn:active {
  transform: scale(0.95);
}

.jumbotron {
  background-color: #eeefe1;
  font-size: 18px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 3px 3px #00000020;
  align-items: center;
}
.jumbotron h1 {
  font-size: 42px;
  font-weight: normal;
  color: #000;
  margin-bottom: 20px;
}
.jumbotron h1 .marker {
  background-color: #ffe9b3;
  padding: 0 10px;
  margin-left: -10px;
}
.jumbotron-desktop {
  height: 560px;
}
.jumbotron-content {
  flex-shrink: 0;
  width: 350px;
  margin-top: 30px;
  margin-left: 120px;
  justify-content: flex-start;
}
.sign-up-btn {
  display: flex;
  justify-content: center;
  text-decoration: none;
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
  transition: all 0.3s;
  transform: scale(1);
}
.sign-up-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.sign-up-btn:active {
  transform: scale(0.95);
}

.desktop {
  display: flex;
  width: 100%;
  height: 560px;
  background-image: url('~assets/jumbotron-desktop.png');
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
}
.iphone {
  display: flex;
  background-image: url('~assets/jumbotron-iphone.png');
  background-position: bottom left;
  align-items: flex-end;
  background-size: 270px;
  align-self: flex-end;
  background-repeat: no-repeat;
  min-width: 280px;
  padding-left: 20px;
  height: 500px;
  margin-left: 8%;
}
.activity {
  display: flex;
  border: 1px #f5f5f5 solid;
  border-left: 0;
  border-right: 0;
  padding: 18px 16px;
  padding-right: 20px;
  font-size: 13px;
  color: #000;
  margin-bottom: 205px;
  width: 232px;
  z-index: 101;
}
.activity-content .dot {
  display: flex;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: #7da87b;
  margin-right: 10px;
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

.features {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  z-index: 200;
  align-items: center;
}
.feature {
  margin-bottom: 30px;
  padding: 100px 0;
  display: flex;
  border-bottom: 1px #f5f5f5 solid;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.feature.no-border {
  border-bottom: 0;
}
.feature {
  margin: 0 50px;
}
.feature h1 {
  font-size: 32px;
  margin-bottom: 20px;
}
.feature p {
  font-size: 16px;
  color: #555;
  line-height: 1.5;
}
.feature img {
  margin: 0 40px;
  width: 480px;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
  background-color: #3f4961;
}
.i-think-too {
  font-family: 'Sawarabi Mincho', sans-serif;
  color: #fff;
  padding: 30px 0;
  width: 100%;
  text-align: center;
  font-size: 16px;
  background-color: #2e3647;
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
  text-align: center;
  text-decoration: none;
  transition: all 0.3s;
  transform: scale(1);
}
.footer-sign-up:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.footer-sign-up:active {
  transform: scale(0.95);
}
.footer h1 {
  font-size: 36px;
  padding-top: 100px;
  font-weight: normal;
  color: #fff;
}
.footer-links {
  padding: 50px 0;
}
.footer-links a {
  color: #35cbe6;
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
.ga {
  margin-top: 60px;
}
.ga a {
  color: #cdd0d1;
  text-decoration: none;
}

/** iPad **/
@media screen and (max-width: 1024px) {
  .jumbotron-content {
    margin-left: 0;
    padding-left: 40px;
  }
}

/** iPhone **/
@media screen and (max-width: 640px) {
  .jumbotron {
    flex-direction: column;
    align-items: center;
    flex-direction: column;
    display: flex;
    padding-top: 130px;
  }
  .jumbotron-content {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 0;
  }
  .jumbotron h1 .marker {
    background-color: #ffe9b3;
    padding: 0;
    margin-left: 0;
  }
  .jumbotron h1 {
    font-size: 40px;
  }
  .sign-up-btn {
    display: flex;
    align-self: center;
  }
  .desktop {
    background-image: none;
    height: auto;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  .iphone {
    display: flex;
    height: 450px;
    margin: 0;
    margin-left: 10px;
  }
  .feature {
    flex-direction: column;
    text-align: center;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    width: 100%;
  }
  .feature img {
    order: 2;
    width: 100%;
    margin-top: 20px;
  }
  .footer h1 {
    font-size: 24px;
    padding-top: 100px;
    font-weight: normal;
    color: #fff;
  }
  .footer-links ul {
    flex-direction: column;
    padding: 0;
  }
  .footer-links li {
    color: #fff;
    border: 0;
    padding: 20px 0;
    text-align: center;
  }
  .footer-links li:last-child {
    border-right: none;
  }
  .ga {
    margin: 0 30px;
    margin-top: 50px;
  }
}
</style>
