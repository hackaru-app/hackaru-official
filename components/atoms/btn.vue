<template>
  <a><slot /></a>
</template>

<style scoped>
a {
  background-color: #ffd96a;
  border: 0;
  border-radius: 5px;
  color: #323a4d;
  font-size: 16px;
  padding: 15px 25px;
  text-decoration: none;
  transform: scale(1);
  transition: all 0.3s ease;
}
a:hover {
  text-decoration: none;
  transform: scale(1.05);
}
a:active {
  transform: scale(1);
}
</style>
