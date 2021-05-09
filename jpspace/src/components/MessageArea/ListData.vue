<template>
  <ul class="data-list-container">
      <li
        v-for="item in list"
        :key="item.id"
      >
        <Avatar :url="item.avatar" :size="44" />
        <div class="data">
            <div class="nickname">{{ item.nickname }}</div>
            <div class="content">{{ item.content }}</div>
            <div class="time">{{ formatDate(item.createDate,true) }}</div>
        </div>
      </li>
  </ul>
</template>

<script>
import Avatar from "@/components/Avatar";
import formatDate from "@/mixins/formatDate";
export default {
    components:{
        Avatar,
    },
    mixins:[formatDate()],
    props:{
        list: {
            type: Array,
            default: ()=>[],
        },
    },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-list-container {
    margin: 0;
    padding: 0;

    list-style: none;

    li {
        border-bottom: 1px solid lighten(@color-gray,20%);

        padding: 15px 0;

        display: flex;

        .avatar-container {
            margin-bottom: 10px;
        }

        .data {
            flex: 1 1 auto;
            position: relative;

            .nickname{
                color: darken(@color-success,10%);
                margin-bottom: 10px;
            }

            .content{
                font-size: @fontSize-base;
            }
            .time{
                position: absolute;
                right: 0;
                top: 5px;

                font-size: @fontSize-small;
                color: @color-gray;
            }
        }
    }
}

</style>