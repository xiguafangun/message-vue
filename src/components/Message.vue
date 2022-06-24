<template>
    <div v-if="isExist" class="post">
        <textarea
            v-if="isEdit"
            v-model="selfContent"
            class="input-content"
            placeholder="请输入消息"
        ></textarea>
        <div v-else class="content">{{ selfContent }}</div>
        <div class="bottom">
            <p class="time">{{ textTime }}</p>
            <div class="buttons">
                <div v-if="isEdit" class="button confirm" @click="confirm">
                    确认
                </div>
                <div v-else class="button edit" @click="edit">编辑</div>
                <div v-if="isEdit" class="button cancel" @click="cancel">
                    取消
                </div>
                <div v-else class="button delete" @click="remove">删除</div>
            </div>
        </div>
    </div>
</template>
<script>
import { formatTime } from "../common/time.js"
import { deletePost, updatePost } from "../api/message.js"

export default {
    props: ["postId", "content", "publishTime"],
    data() {
        return {
            // 组件是否存在
            isExist: true,
            // 是否是编辑状态
            isEdit: false,
            // 内容
            selfContent: this.content,
        }
    },
    computed: {
        textTime() {
            return formatTime(this.publishTime)
        },
    },
    methods: {
        async remove() {
            // 删除消息
            await deletePost(this.postId)
            // 隐藏组件
            this.isExist = false
        },
        edit() {
            // 切换到编辑状态
            this.isEdit = true
        },
        async confirm() {
            // 确认按钮
            await updatePost(this.postId, this.selfContent)

            // 取消编辑状态
            this.isEdit = false
        },
        cancel() {
            // 取消按钮
            this.isEdit = false

            // 回复初始值
            this.selfContent = this.content
        },
    },
}
</script>
