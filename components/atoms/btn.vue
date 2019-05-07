<template>
  <a><slot /></a>
</template>

<style scoped>
a {
  border: 0;
  border-radius: 5px;
  text-decoration: none;
  padding: 15px 25px;
  color: #323A4D;
  font-size: 16px;
  background-color: #ffd96a;
  transition: all 0.3s ease;
  transform: scale(1);
}
a:hover {
  transform: scale(1.05);
  text-decoration: none;
}
a:active {
  transform: scale(1);
}
</style>
