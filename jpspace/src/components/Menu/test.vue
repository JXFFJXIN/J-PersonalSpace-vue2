<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
  components: {
    Menu,
  },
};
</script>

<style>
.test-container {
  width: 500px;
  height: 800px;
  border: 2px solid rgb(0, 255, 255);
  background: rgb(85, 53, 53);
  margin: 0 auto;
}
</style>
