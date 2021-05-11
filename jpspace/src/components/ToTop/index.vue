<template>
  <div 
    class="totop-container"
    @click="handleClick"
    v-show="isShow"
  >
    Top
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false,
        }
    },
    created(){
        this.$bus.$on("mainScroll",this.handleScroll);
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.handleScroll);
    },
    methods: {
        handleScroll(dom){
            if(!dom){
                this.isShow = false;
                return;
            }
            this.isShow = dom.scrollTop >= 300;
        },
        handleClick(){
            this.$bus.$emit("setMainScroll",0);
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.totop-container {
    background: @color-primary;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    line-height: 50px;
    color: @color-white;
    text-align: center;

    position: fixed;
    right: 50px;
    bottom: 50px;
    
    cursor: pointer;
    z-index: 50;
}
</style>