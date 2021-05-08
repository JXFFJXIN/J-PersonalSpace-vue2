<template>
  <div class="menu-container">
    <RouterLink
      :exact="item.exact"
      v-for="(item,index) in items"
      :key="index"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{item.title}}</span>
    </RouterLink>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  components:{
    Icon,
  },
  data(){
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, 
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
      ],
    };
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @color-gray;
  a {
    &.selected { // 选择状态类名
      background: darken(@color-words, 3%);
    }
    padding: 0 10px;
    display: flex;
    align-items: center;

    height: 40px;
    .icon {
      width: 24px;
      padding-right: 10px;
    }
    &:hover {
      color: @color-white;
    }
  }
}
</style>