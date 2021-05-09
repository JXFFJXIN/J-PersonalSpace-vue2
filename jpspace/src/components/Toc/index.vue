<template>
  <ul class="toc-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        @click="handleClick(item)"
        class="aside"
        :class="{ active: item.isSelect }"
      >
        {{ item.aside }}
      </span>
      <Toc :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "Toc",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.toc-container {
  list-style: none;

  padding: 0;

  .toc-container {
    margin-left: 1em;
  }
  li {
    min-height: 30px;
    line-height: 30px;
    cursor: pointer;

    font-size: @fontSize-base;

    .active {
      color: @color-warn;
      font-weight: bold;
    }

    .aside {
      font-size: @fontSize-small;
      color: @color-gray;

      margin-left: 1em;
    }
  }
}
</style>