<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <Aside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import Aside from "./components/Aside";
export default {
  components: {
    Layout,
    Aside,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
}
.aside {
  width: 250px;
  height: 100%;
}
</style>
