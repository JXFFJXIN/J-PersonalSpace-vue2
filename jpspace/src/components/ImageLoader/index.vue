<template>
  <div class="image-loader-container">
      <img
        class="placeholder"
        :src="placeholder"
        v-if="!isDone"
      >
      <img 
        :src="src"
        @load="handleLoad"
        :style="{ opacity: originOpacity, transition: `${duration}ms` }"
        alt=""
      >
  </div>
</template>

<script>
export default {
    props:{
        src:{
            type:String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 500,
        }
    },
    data(){
        return {
            isLoaded: false,
            isDone: false,
        }
    },
    computed: {
        originOpacity(){
            return this.isLoaded ? 1 : 0;
        }
    },
    methods:{
        handleLoad(){
            this.isLoaded = true;
            setTimeout(()=>{
                this.isDone = true;
                this.$emit("load");
            },this.duration);
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>