<template>
  <article class="other-feature">
    <div class="image-wrapper">
      <img :src="image" alt="" />
    </div>
    <h1>{{ title }}</h1>
  </article>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.other-feature {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
}
.other-feature h1 {
  font-size: 16px;
  font-weight: 200;
  margin-bottom: 20px;
  padding: 20px;
}
.other-feature .image-wrapper {
  align-items: center;
  background-color: #0001;
  border-radius: 10px;
  display: block;
  display: flex;
  height: 180px;
  justify-content: center;
  width: 180px;
}
.other-feature img {
  width: 80px;
}
</style>
