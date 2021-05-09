<template>
  <Layout>
    <template #default>
      <List/>
    </template>
    <template #right>
      <Category/>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import Category from "./category";
import List from "./list";
export default {
  components:{
    Layout,
    Category,
    List,
  }
}
</script>

<style lang="less" scoped >
@import "~@/styles/var.less";
.category-container{
  background: @color-white;
}
</style>