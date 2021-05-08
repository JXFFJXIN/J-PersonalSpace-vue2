<template>
  <div class="test-container">
      <Layout>
          <template #left>
            <Aside />
          </template>
      </Layout>
  </div>
</template>

<script>
import Aside from "./";
import Layout from "@/components/Layout"
import "@/styles/global.less";
export default {
  components: {
    Aside,
    Layout
  },
};
</script>

<style>
</style>
