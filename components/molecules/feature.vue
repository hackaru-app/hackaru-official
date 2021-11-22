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
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="css">
.feature {
  align-items: center;
  border-bottom: 1px #0001 solid;
  display: flex;
  flex-direction: row;
  max-width: 860px;
  padding: 100px 0;
  width: 100%;
}

.feature .description {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  width: 420px;
}

.feature.reverse .description {
  order: 2;
}

.feature img {
  border-radius: 5px;
  flex-shrink: 0;
  height: auto;
  max-height: 530px;
  max-width: 560px;
  width: auto;
}

.feature.reverse img {
  margin-right: 50px;
  order: 1;
}

.feature h1 {
  border-bottom: 1px #ffd96a solid;
  color: #fff;
  font-size: 32px;
  font-weight: 200;
  margin-bottom: 20px;
  padding-bottom: 10px;
}

.feature p {
  color: #cdd0d1;
  line-height: 1.5;
}

@media screen and (max-width: 1024px) {
  .feature {
    box-sizing: border-box;
    flex-direction: column;
    margin-top: 50px;
    padding: 30px;
    width: 100%;
  }

  .feature.reverse img {
    margin-right: 0;
    order: 2;
  }

  .feature .description {
    margin: 0;
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
  }
}

@media screen and (max-width: 640px) {
  .feature h1 {
    font-size: 28px;
  }

  .feature .description {
    margin: 0;
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
  }

  .feature img {
    width: 300px !important;
  }
}
</style>
