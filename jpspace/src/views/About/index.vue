<template>
  <div class="about-container" v-loading="loading || !isLoaded">
    <img
      v-if="src"
      class="about-item"
      src="../../assets/about.png"
      @load="isLoaded = true"
    ></img>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  }),
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  .about-item{
    width: 100%;
    display: block;
    box-sizing: border-box;
    object-fit:fill;
  }
}
</style>
