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
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: 0 20px;
}
.other-feature h1 {
  font-size: 16px;
  font-weight: 200;
  padding: 20px;
  margin-bottom: 20px;
}
.other-feature .image-wrapper {
  display: block;
  width: 180px;
  background-color: #00000011;
  border-radius: 10px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.other-feature img {
  width: 80px;
}
</style>
