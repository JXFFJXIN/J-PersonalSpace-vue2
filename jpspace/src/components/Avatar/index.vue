<template functional>
  <img 
    class="avatar-container"
    :src="props.url"
    :style="{
        width: props.size + 'px',
        height: props.size + 'px'
    }"
  />
</template>

<script>
export default {
    props:{
        url:{
            type: String,
            required: true
        },
        size: {
            type:Number,
            default: 150,
        }
    }
}
</script>

<style lang="less" scoped>
.avatar-container {
    border-radius: 50%;
    object-fit: cover;
    display: block;
    border: 1px solid rgb(212, 212, 212);
    margin: 0 auto;
}
</style>