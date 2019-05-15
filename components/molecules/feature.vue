<template>
  <article class="feature">
    <div class="description">
      <h1>{{ title }}</h1>
      <slot />
    </div>
    <img :src="image" alt="" />
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

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
  color: #cdd0d1;
}
.feature img {
  flex-shrink: 0;
  border-radius: 5px;
}
.feature img {
  max-width: 560px;
  max-height: 530px;
  width: auto;
  height: auto;
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
    font-size: 28px;
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
