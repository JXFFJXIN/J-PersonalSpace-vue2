<template>
  <div class="carousel-item-container">
      <div class="carousel-img">
        <ImageLoader
          @load="this.showWords"
          :src="carousel.bigImg"
          :placeholder="carousel.midImg"
        />
      </div>
      <div class="title" ref="title">{{ carousel.title }}</div>
      <div class="desc" ref="desc">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props:["carousel"],
  components:{
    ImageLoader,
  },
  data(){
    return {
      titleWidth: 0,
      descWidth: 0,
    }
  },
  mounted(){
    // 获取宽度，利于动画表现
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
  },
  methods:{
    // 加载回调函数，显示title和desc
    showWords(){
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制渲染
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = `${this.titleWidth}px`;

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = `${this.descWidth}px`
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;

  color: @color-white;

  position: relative;

  .carousel-img {
    width: 100%;
    height: 100%;
  }

  @textShadow:1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  .title,
  .desc {
    position: absolute;
    left: 30px;

    color: @color-white;
    text-shadow: @textShadow;
    overflow: hidden;
    opacity: 0;

    letter-spacing: 3px;
    white-space: nowrap;
  }
  .title {
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desc {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: lighten(@color-gray,20%);
  }

}
</style>