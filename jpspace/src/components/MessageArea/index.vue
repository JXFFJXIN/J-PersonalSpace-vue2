<template>
  <div class="message-area-container">
      <FormData v-on="$listeners" />
        <h3>
            {{title}}
            <span>{{subTitle}}</span>
        </h3>
        <ListData :list="list" />
        <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import FormData from "./FormData";
import ListData from "./ListData";
export default {
    components:{
        FormData,
        ListData,
    },
    props:{
        title:{
            type:String,
            default:"",
        },
        subTitle: {
            type: String,
            default:"",
        },
        list:{
            type:Array,
            default:()=>[],
        },
        isListLoading: {
            type:Boolean,
            default:false,
        }
    }
}
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>