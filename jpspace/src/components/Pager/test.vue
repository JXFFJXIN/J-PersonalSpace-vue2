<template>
  <div>
    <Pager
      :total="total"
      :current="current"
      @changePage="handleChangePage($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    handleChangePage(newPage) {
      this.current = newPage;
      console.log(`加载${newPage}页数据`);
    },
  },
};
</script>

<style scoped></style>
