<template>
  <div class="pager-container">
      <button 
        @click="handleClick(1)"
        :class="{disabled:current === 1}"
      >|&lt;&lt;</button>
      <button
        @click="handleClick(current - 1)"
        :class="{disabled:current === 1}"
      >&lt;&lt;</button>
      <button
        @click="handleClick(n)"
        v-for=" ( n, i ) in arrayPager"
        :key="i"
        :class="{active: n === current}"
      >{{ n }}</button>
      <button
        @click="handleClick(current + 1)"
        :class="{ disabled: current === totalPage }"
      >&gt;&gt;</button>
      <button
        @click="handleClick(totalPage)"
        :class="{ disabled: current === totalPage }"
      >&gt;&gt;|</button>
  </div>
</template>

<script>
export default {
  // 页码总量 页码容量 当前页码 
  // 数据总量 数据容量 当前数据
  // 最小页码 页码数组 最大页码 [获取页码数组进行渲染]
  props:{
    current:{ // 当前页码
      type:Number,
      default: 1,
    },
    total:{ // 数据总量
      type: Number,
      default: 0,
    },
    limit:{ // 数据限制
      type: Number,
      default: 10,
    },
    visibleNumber: { // 页码容量
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页数
    totalPage(){
      return Math.ceil(this.total/this.limit)
    },
    // 最小页码
    minPager(){
      let min = this.current - Math.floor(this.visibleNumber / 2)
      if(min < 1){
        min = 1;
      }
      return min;
    },
    // 最大页码
    maxPager(){
      let max = this.minPager + this.visibleNumber - 1;
      if(max > this.totalPage){
        max = this.totalPage
      }
      return max;
    },
    // 页码数组
    arrayPager(){
      let nums = [];
      for(let i = this.minPager;i <= this.maxPager; i++){
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage){
      if(newPage<1){
        newPage = 1;
      }
      if(newPage > this.totalPage){
        newPage = this.totalPage;
      }
      if(newPage === this.current){
        return;
      }
      this.$emit("changePage",newPage);
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;

  margin: 20px 0;
  button{
    color: @color-primary;
    margin: 0 6px;
    cursor: pointer;
    border: @border-base;
    &.disabled {
      color: @color-lightWords;
      cursor: not-allowed;
    }
    &.active {
      color: @color-words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>