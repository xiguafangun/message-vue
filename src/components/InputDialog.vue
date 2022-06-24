<template>
    <div class="post input-dialog">
        <textarea
            v-model="content"
            class="input-content"
            placeholder="请输入消息"
        ></textarea>
        <div class="bottom">
            <div class="buttons">
                <div class="button confirm" @click="confirm">确认</div>
                <div class="button cancel" @click="cancel">取消</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content: "",
        }
    },
    methods: {
        cancel() {
            this.$emit("quxiao")
        },
        confirm() {
            this.$emit("queren", this.content)
        },
    },
}
</script>
