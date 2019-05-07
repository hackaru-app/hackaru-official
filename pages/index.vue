<template>
  <section class="wrapper">
    <jumbotron />
    <section class="content">
      <features />
      <other-features />
    </section>
    <main-footer />
  </section>
</template>

<script>
import Btn from '~/components/atoms/btn';
import Jumbotron from '~/components/organisms/jumbotron';
import MainFooter from '~/components/organisms/main-footer';
import Features from '~/components/organisms/features';
import OtherFeatures from '~/components/organisms/other-features';

export default {
  components: {
    Btn,
    Jumbotron,
    MainFooter,
    Features,
    OtherFeatures
  }
}
</script>

<style>
body {
  background-color: #2E3647;
  font-size: 14px;
}
a {
  color: #f5f6f7;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #fff;
}
</style>
