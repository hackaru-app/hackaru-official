<template>
  <section class="container">
    <header>
      <nav>
        <img class="logo" src="~assets/logo.svg" />
        <ul class="menu">
          <li>新規登録</li>
          <li class="button">ログイン</li>
        </ul>
      </nav>
    </header>
  </section>
</template>

<script>
export default {}
</script>

<style>
body {
  font-family: -apple-system, sans-serif;
  font-size: 14px;
}
header {
  display: flex;
  justify-content: center;
  padding: 15px 20px;
  background-color: #3f4961;
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
}
.menu .button {
  border: 0;
  padding: 10px 15px;
  border-radius: 3px;
  background-color: #fff;
  font-weight: bold;
  color: #3f4961;
}
</style>
