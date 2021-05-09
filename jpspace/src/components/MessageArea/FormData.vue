<template>
  <form
    id="data-form-container"
    ref="form"
    @submit.prevent="handleSubmit"
    class="data-form-container"
  >
<!-- 用户昵称 -->
    <div class="form-item">
        <div class="input-area">
            <input 
                type="text"
                maxlength="10"
                v-model="formData.nickname"
                placeholder="用户昵称"    
            >
            <span class="tip">{{formData.nickname.length}}/10</span>
        </div>
        <div class="error">{{ error.nickname }}</div>
    </div>
<!-- 输入内容 -->
    <div class="form-item">
        <div class="text-area">
            <textarea 
            maxlength="300"
            placeholder="输入内容"
            v-model="formData.content"
        ></textarea>
        <span class="tip">{{ formData.content.length }}</span>
        </div>
        <div class="error">{{error.content}}</div>
    </div>
<!-- 提交按钮 -->
    <div class="form-item">
        <div class="button-area">
            <button :disabled="isSubmiting">
            {{isSubmiting ? "提交ing" : "提交"}}
            </button>
        </div>
    </div>
  </form>
</template>

<script>
export default {
    data(){
        return {
            formData: {
                nickname: "",
                content: "",
            },
            error: {
                nickname: "",
                content: "",
            },
            isSubmiting:false,
        }
    },
    methods:{
        handleSubmit(){
            this.error.nickname = this.formData.nickname ? "" : "请填写昵称";
            this.error.content = this.formData.content ? "" : "请填写内容";
            if(this.error.nickname || this.error.content){
                return;
            }
            this.isSubmiting = false;
            this.$emit("submit",this.formData,(successMsg)=>{
                this.$showmessage({
                    content: successMsg,
                    type: "success",
                    duration: 1000,
                    container: this.$refs.form,
                    callback: () => {
                        this.isSubmiting = false;
                        this.formData.nickname = "";
                        this.formData.content = "";
                    }
                })
            })
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container {
    margin-bottom: 20px;

    overflow: hidden;

    .form-item{
        margin-bottom: 8px;
        
        .input-area {
            width: 50%;
            position: relative;
        }

        .text-area {
            position: relative;
        }

        .tip {
            position: absolute;
            right: 5px;
            bottom: 5px;
            color: @color-white;
            font-size: @fontSize-small;
        }
        input,textarea {
            width: 100%;
            color: @color-words;
            font-size: @fontSize-base;
            border-radius: 4px;

            display: block;
            box-sizing: border-box;
            border: 1px dashed @color-gray;
            
            outline: none;

            &:focus {
                border-color: @color-primary;
            }
        }
        input {
            padding: 0 15px;
            height: 40px;
        }
        textarea {
            resize: none;
            padding: 8px 15px;
            height: 120px;
        }
        .error {
            height: 20px;
            color: @color-danger;
            font-size: @fontSize-base;
            line-height: 20px;

            margin-top: 6px;
        }
        button {
            width: 100px;
            height: 34px;
            color: @color-white;
            border: none;
            border-radius: 4px;
            background: @color-primary;

            position: relative;

            outline: none;
            cursor: pointer;

            &:hover{
                background: darken(@color-primary,10%);
            }
            &:disabled {
                background: lighten(@color-primary,20%);
                cursor: not-allowed;
            }
        }
    }
}

</style>