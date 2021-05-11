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
    <ToTop/>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import Aside from "./components/Aside";
import ToTop from "./components/ToTop";
export default {
  components: {
    Layout,
    Aside,
    ToTop,
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
