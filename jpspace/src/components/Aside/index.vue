<template>
  <div class="aside-container">
    <Avatar
      url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c"
      :size="110"
    />
    <h1 class="title">一个狗窝</h1>
    <Menu />
    <List :data="data" />
    <p class="footer">深ICP备xxxxxxxx号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/Menu";
import List from "@/components/List";
export default {
  components: {
    Avatar,
    Menu,
    List,
  },
  data() {
    return {
      data: [
        {
          src: "",
          icon: "github",
          text: "JXin",
        },
        {
          src: "mailto:23423424234@qq.com",
          icon: "mail",
          text: "23423424234@qq.com",
        },
        {
          src:
            "tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45",
          icon: "qq",
          text: "3263023350",
          pop: {
            src:
              "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
          },
        },
        {
          src: "",
          icon: "weixin",
          text: "dsfggasas",
          pop: {
            src:
              "http://www.duyiedu.com/source/img/%E5%85%AC%E4%BC%97%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png",
          },
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside-container {
  width: 100%;
  height: 100%;
  background: @color-dark;

  padding: 10px 0;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: auto;

  .footer {
    text-align: center;
    font-size: @fontSize-base;
  }
  .title {
    font-size: @fontSize-base;
    color: @color-white;
    text-align: center;
  }
}
</style>