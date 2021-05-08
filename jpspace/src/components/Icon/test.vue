<template>
  <div class="test-container">
    <div class="item" v-for="item in types" :key="item">
      <Icon :type="item" />
      <label>{{ item }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style lang="less" scoped>
.test-container {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 600px;
  flex-wrap: wrap;
  .item {
    margin: 1em;
    text-align: center;
    .icon-container {
      display: block;
      color: rgba(47, 66, 66, 0.411);
      font-size: 1.5rem;
    }
  }
}
</style>
