<template>
  <div class="list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'DetailBlog',
              params:{
                id: item.id
              }
            }"
          >
            <img :src="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name:'DetailBlog',
              params: {
                id: item.id,
              }
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name:'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                }
              }"
            >{{ item.category.name }}</RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Pager
      v-if="data.total"
      :current="infoRoute.page"
      :total="data.total"
      :limit="infoRoute.limit"
      :visibleNumber="10"
      @changePage="handleChangePage"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData";
import { getBlogs } from "@/api/blog";
import formatDate from "@/mixins/formatDate";
export default {
  mixins: [fetchData({}), formatDate()],
  components: {
    Pager,
  },
  computed: {
    infoRoute() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    async fetchData() {
      return await getBlogs(
        this.infoRoute.page,
        this.infoRoute.limit,
        this.infoRoute.categoryId
      );
    },
    handleChangePage(newPage) {
      // 接收页码索引，改变地址栏
      const query = {
        page: newPage,
        limit: this.infoRoute.limit,
      };
      if (this.infoRoute.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.infoRoute.categoryId,
          },
        });
      }
    },
  },
  watch: {
    async $route() {
      // 监听$route对象
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.list-container {
  line-height: 1.8;
  overflow-y: auto;
  scroll-behavior: smooth;

  position: relative;
  padding: 20px;
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  ul {
    list-style: none;

    margin: 0;
    padding: 0;

    li {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid @color-gray;

      .thumb {
        flex: 0 0 auto;
        margin-right: 15px;

        img {
          display: block;
          border-radius: 5px;

          max-width: 200px;
        }
      }

      .main {
        flex: 1 1 auto;

        h2 {
          margin: 0;
        }
      }

      .aside {
        font-size: @fontSize-small;
        color: @color-gray;

        span {
          margin-right: 15px;
        }
      }

      .desc {
        margin: 15px 0;
        font-size: @fontSize-small;
      }
    }
  }
}
</style>