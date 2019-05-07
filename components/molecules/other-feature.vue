<template>
  <article class="other-feature">
    <slot />
  </article>
</template>

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
