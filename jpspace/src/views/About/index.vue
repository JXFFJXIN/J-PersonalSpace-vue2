<template>
  <div class="about-container" v-loading="loading || !isLoaded">
    <iframe
      v-if="src"
      class="about-item"
      :src="src"
      frameborder="0"
      @load="isLoaded = true"
    ></iframe>
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
  overflow: hidden;
  position: relative;
  .about-item{
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
  }
}
</style>
