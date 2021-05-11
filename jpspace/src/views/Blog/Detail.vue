<template>
  <Layout>
    <div ref="containerMain" class="main-container" v-loading="isLoading">
      <DetailBlog :blog="data" v-if="data" />
      <CommentBlog v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <TocBlog :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import { getBlog } from "@/api/blog";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import DetailBlog from "./DetailBlog";
import TocBlog  from "./TocBlog";
import CommentBlog from "./commentBlog";
import { titleController } from "@/utils";
export default {
  components: {
    Layout,
    DetailBlog,
    TocBlog,
    CommentBlog,
  },
  mixins: [fetchData(null),mainScroll("containerMain")],
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      titleController.setRouteTitle(resp.title);
      return resp;
    },
  },
  updated(){
      const hash = location.hash;
      location.hash = "";
      setTimeout(()=>{
          location.hash = hash;
      },50);
  }
};
</script>

<style scoped lang="less">
.main-container {
    height: 100%;
    width: 100%;

    box-sizing: border-box;
    padding: 20px;
    position: relative;
    
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
}
.right-container {
    width:300px;
    height: 100%;

    box-sizing: border-box;
    position: relative;
    padding: 20px;

    overflow-y: auto;
}
</style>