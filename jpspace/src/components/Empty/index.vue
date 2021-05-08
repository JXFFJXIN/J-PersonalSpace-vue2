<template>
  <div class="empty-container" :style="{fontSize: size + 'px'}">
      <Icon type="empty"/>
      <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
    components:{
        Icon,
    },
    props:{
        text:{
            type: String,
            default: "无数据"
        },
        size:{
            type: Number,
            default: 50,
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container {
    .self-center();
    color: @color-gray;
    text-align: center;
}
</style>