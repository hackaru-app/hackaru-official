<template>
  <article class="feature">
    <slot />
  </article>
</template>

<style scoped>
.feature {
  border-bottom: 1px #00000011 solid;
  padding: 100px 0;
  max-width: 860px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.feature.reverse .description {
  order: 2;
}
.feature.reverse img {
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
.feature img {
  flex-shrink: 0;
  border-radius: 5px;
}
.feature img.small {
  width: 300px;
}
.feature img {
  width: 560px;
}
@media screen and (max-width: 1024px) {
  .feature {
    padding: 30px;
    box-sizing: border-box;
    width: 100%;
    margin-top: 50px;
    flex-direction: column;
  }
  .feature.reverse img {
    order: 2;
    margin-right: 0;
  }
  .feature .description {
    width: 100%;
    margin: 0;
    text-align: center;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 640px) {
  .feature h1 {
    font-size: 26px;
  }
  .feature p {
    font-size: 14px;
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
