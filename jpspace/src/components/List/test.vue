<template>
  <div class="test-container">
    <List :data="data" />
  </div>
</template>

<script>
import List from "./";
import "@/styles/global.less";
export default {
  components: {
    List,
  },
  data(){
    return {
      data:[
        {
            src:"",
            icon:"github",
            text:"JXin",
        },
        {
            src:"tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
            icon:"qq",
            text:"3263023350",
            pop:{
                src:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
            }
        },
        {
            src:"mailto:23423424234@qq.com",
            icon:"mail",
            text:"23423424234@qq.com"
        },
        {
            src:"",
            icon:"weixin",
            text:"dsfggasas",
            pop:{
                src:"http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png"
            }
        }
      ]
    }
  }
};
</script>

<style lang="less" scoped>
.test-container {
  width: 500px;
  height: 400px;
  border: 2px solid;
  margin: 10px auto;
  position: relative;
  top: 100px;
  background: rgb(165, 115, 115);
  .list-container{
    color: #ccc;
  }
}
</style>
