<template>
  <div class="aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1 class="title">锥辅の小窝</h1>
    </template>

    <Menu />
    <List v-if="data" :data="data" />
    <p v-if="data" class="footer">
      深ICP备17003838号
    </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/Menu";
import List from "@/components/List";
import {mapState} from "vuex";
export default {
  components: {
    Avatar,
    Menu,
    List,
  },
  computed: mapState("setting",["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside-container {
  width: 100%;
  height: 100%;
  background: @color-dark;

  padding: 10px 0;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: auto;

  .footer {
    text-align: center;
    font-size: @fontSize-base;
  }
  .title {
    font-size: @fontSize-base;
    color: @color-white;
    text-align: center;
  }
}
</style>