<script setup>
import { ref } from 'vue'
const windowHeight = ref(window.innerHeight);

// const updateWindowHeight = () => {
//   windowHeight.value = window.innerHeight;
// };
const count = ref(0)
</script>

<template>
  <div>
    <div class="banner">
      <img src="https://picsum.photos/1920/1080/?random=10">
    </div>
  </div>
</template>

<style scoped lang="scss" >
.banner img {
  width: 100%;
  height: 100vh;
  vertical-align: bottom;
}
</style>
