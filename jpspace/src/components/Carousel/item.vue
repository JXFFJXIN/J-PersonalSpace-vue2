<template>
  <div 
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
      <div 
        class="carousel-img"
        ref="image"
        :style="imagePosition"
      >
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
      widthTitle: 0,
      widthDesc: 0,
      sizeContainer: null,
      sizeInner: null,
      mouseX: 0,
      mouseY: 0,
    }
  },
  computed:{
    imagePosition(){
      if(!this.sizeInner||!this.sizeContainer){
        return;
      }
      const widthExtra = this.sizeInner.width - this.sizeContainer.width;
      const heightExtra = this.sizeInner.height - this.sizeContainer.height;
      const left = (-widthExtra / this.sizeContainer.width) * this.mouseX;
      const top = (-heightExtra / this.sizeContainer.height) * this.mouseY;
      console.log(left);
      return {
        transform:`translate(${left}px,${top}px)`
      }
    },
    center(){
      return {
        x: Math.floor(this.sizeContainer.width / 2),
        y: Math.floor(this.sizeContainer.height / 2)
      }
    }
  },
  mounted(){
    // 获取宽度，利于动画表现
    this.widthTitle = this.$refs.title.clientWidth;
    this.widthDesc = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize",this.setSize);
  },
  destroyed(){
    window.removeEventListener("resize",this.setSize);
  },
  methods:{
    // 加载回调函数，显示title和desc
    showWords(){
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制渲染
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = `${this.widthTitle}px`;

      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.transition = "2s 1s";
      this.$refs.desc.style.width = `${this.widthDesc}px`
    },
    setSize(){
      this.sizeContainer = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      },
      this.sizeInner = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight
      }
    },
    handleMouseMove(e){
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave(){
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
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
  overflow: hidden;

  .carousel-img {
    width: 120%;
    height: 120%;
    position: absolute;
    left: 0;
    top: 0;
    transition: .3s;
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