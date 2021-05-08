<template>
    <ul class="list-container">
      <li v-for="(it, i) in data" :key="i">
        <a :href="it.src">
          <div class="icon">
            <Icon :type="it.icon" />
          </div>
          <span>{{ it.text }}</span>
        </a>
        <div class="pop" v-if="it.pop">
          <img :src="it.pop.src" alt="" />
        </div>
      </li>
    </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.list-container {
  list-style: none;
  padding: 10px;
  margin: 0;
  color: @color-gray;
  @item-height: 30px;
  li {
    height: @item-height;
    line-height: @item-height;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: @fontSize-small;
  }
  .icon {
    font-size: @fontSize-big;
    width: 36px;
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @item-height + 5px;
    padding: 5px;
    background: #c7c7c7;
    text-align: center;

    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.2s;
    img {
      width: 120px;
      height: 120px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #c7c7c7;
      bottom: -4px;
    }
  }
}
</style>