<template>
    <ul class="list-container">
      <li>
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>
    <li>
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>
    <li>
      <a
        :href="
          `tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
        "
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>
    <li>
      <a>
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
    </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.list-container {
  padding-top: 10px;
  list-style: none;
  padding-left: 10px;
  margin: 0;
  color: @color-gray;
  @item-height: 30px;
  li {
    height: @item-height;
    line-height: @item-height;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: @fontSize-small;
  }
  .icon {
    font-size: @fontSize-big;
    width: 36px;
    &.weixin {
      font-size: 24px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @item-height + 5px;
    padding: 5px;
    background: #c7c7c7;
    text-align: center;

    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.2s;
    img {
      width: 120px;
      height: 120px;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #c7c7c7;
      bottom: -4px;
    }
  }
}
</style>