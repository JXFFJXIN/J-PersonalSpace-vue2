<template>
  <div
    v-loading="loading" 
    class="carouselbox-container" 
    ref="container" 
    @wheel="handleWheel">
    <!-- 内容列表 -->
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="(item, i) in data" :key="item.id">
        <Item :carousel="item" />
      </li>
    </ul>
    <!-- 箭头控制 -->
    <div
      v-show="index >= 1"
      @click="changeItem(index - 1)"
      class="icon icon-up"
    >
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="changeItem(index + 1)"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 控制器 -->
    <ul class="indicator">
      <li
        :class="{
          active: i === index,
        }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="changeItem(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Item from "./item";
import Icon from "@/components/Icon";

export default {
  components: {
    Item,
    Icon,
  },
  data() {
    return {
      index: 0,
      containerHeight: 0,
      isSwitching: false,
    };
  },
  created() {
    this.$store.dispatch("banner/fetchBanner")
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return `${-this.index * +this.containerHeight}px`;
    },
    ...mapState("banner",["loading","data"])
  },
  methods: {
    changeItem(index) {
      this.index = index;
    },
    handleTransitionEnd() {
      // 图片加载后改变标识
      this.isSwitching = false;
    },
    handleResize() {
      // 改变窗口时触发的函数
      this.containerHeight = this.$refs.container.clientHeight;
    },
    handleWheel(e) {
      if (this.isSwitching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        // 往上滚动
        this.isSwitching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // 往下滚动
        this.isSwitching = true;
        this.index++;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.carouselbox-container {
  width: 100%;
  height: 100%;

  position: relative;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;

  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
@gap: 25px;
.icon {
  .self-center();

  font-size: @fontSize-big;
  color: @color-gray;
  cursor: pointer;

  transform: translateX(-50%);
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }

  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
}
.indicator {
  .self-center();
  transform: translateY(-50%);

  left: auto;
  right: @gap;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: @color-words;

    cursor: pointer;

    margin-bottom: 10px;
    border: 1px solid @color-white;
    box-sizing: border-box;

    &.active {
      background: @color-white;
    }
  }
}
</style>

