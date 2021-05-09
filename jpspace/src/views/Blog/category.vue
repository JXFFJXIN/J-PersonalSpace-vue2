<template>
  <div class="category-container" v-loading="isLoading">
    <h2>文章分类</h2>
    <Toc :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import Toc from "@/components/Toc";
import fetchData from "@/mixins/fetchData";
import { getBlogCategories } from "@/api/blog";
export default {
  components: {
    Toc,
  },
  mixins: [fetchData([])], // data[isloading,data]
  computed: {
    categoryId() {
      //   获取地址栏参数
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      //   获取地址栏参数
      return +this.$route.query.limit || 10;
    },
    list() {
      //   组合数据
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );
      const result = [
        { name: "所有分类", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
  },
  methods: {
    async fetchData() {
      return await getBlogCategories();
    },
    handleSelect(item){
        const query = {
            page:1,
            limit: this.limit,
        };
        if(item.id === -1){
            this.$router.push({
                name: "Blog",
                query,
            })
        }else{
            this.$router.push({
                name: "CategoryBlog",
                query,
                params: {
                    categoryId: item.id,
                }
            })
        }
    }
  },
};
</script>

<style scoped lang="less">
.category-container {
  width: 300px;
  height: 100%;

  padding: 20px;
  box-sizing: border-box;

  position: relative;
  overflow-y: auto;
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;

    margin: 0;
  }
}
</style>