<template>
  <section class="wrapper">
    <latest-news />
    <jumbotron />
    <section class="content">
      <features />
      <other-features />
    </section>
    <main-footer />
  </section>
</template>

<script>
import LatestNews from '~/components/organisms/latest-news'
import Jumbotron from '~/components/organisms/jumbotron'
import MainFooter from '~/components/organisms/main-footer'
import Features from '~/components/organisms/features'
import OtherFeatures from '~/components/organisms/other-features'

export default {
  components: {
    LatestNews,
    Jumbotron,
    MainFooter,
    Features,
    OtherFeatures,
  },
}
</script>

<style>
body {
  background-color: #2e3647;
  font-size: 16px;
}
a {
  color: #f5f6f7;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.content {
  align-items: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
