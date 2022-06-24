<!-- <template>
    <h1>消息墙的首页</h1>
    <a href="/about?search=hello">跳转关于页面</a>
    <br />
    <router-link
        :to="{
            name: 'about',
            query: {
                search: 'hello',
                keyword: 'testtest',
            },
        }"
        >router-link 跳转关于页面</router-link
    >
</template> -->
<template>
    <div class="container">
        <h1 class="title">三眼鸭的消息墙</h1>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="url in images" :key="url">
                <el-image :src="url" fit="cover" />
            </el-carousel-item>
        </el-carousel>
        <el-button round type="success" @click="hello">中文</el-button>
        <el-button round type="info" @click="hello">中文</el-button>
        <el-button type="danger" @click="hello">中文</el-button>
        <el-button>中文</el-button>
        <router-link :to="{ name: 'about' }">关于页面</router-link>
        <InputDialog
            v-show="isPublish"
            @quxiao="isPublish = false"
            @queren="queren"
        ></InputDialog>
        <div class="posts"></div>
        <p v-if="posts.length === 0" class="empty">什么消息都没有~</p>
        <Message
            v-for="post in posts"
            :key="post.post_id"
            :post-id="post.post_id"
            :content="post.content"
            :publish-time="post.publish_time"
        ></Message>
    </div>
    <div class="publish" @click="isPublish = !isPublish">发布</div>
</template>

<script>
import InputDialog from "../components/InputDialog.vue"
import Message from "../components/Message.vue"
import { getPosts, createPost } from "../api/message.js"

import axios from "axios"

export default {
    components: {
        InputDialog,
        Message,
    },
    data() {
        return {
            // 消息数据列表
            posts: [],
            // 发布框是否显示
            isPublish: false,
            images: [
                "https://3yya.com/examples/assets/诸葛亮.jpg",
                "https://3yya.com/examples/assets/进击.jpg",
                "https://3yya.com/examples/assets/进击-大.jpg",
            ],
        }
    },
    async mounted() {
        // 页面载入时
        // 获取了服务器数据
        await this.refresh()

        const response = await this.$http.get(
            "https://3yya.com/u/d8cf630cf5f367cc/rest/app/posts"
        )

        console.log(response.data)
    },
    methods: {
        hello() {
            alert("你好你好")
        },
        async queren(content) {
            // 发布消息
            await createPost(content)
            await this.refresh()

            this.isPublish = false
        },
        async refresh() {
            const response = await getPosts()
            const data = await response.json()
            this.posts = data.results
        },
    },
}
</script>

<style>
html {
    background-color: black;
}
a {
    color: white;
}

.container {
    width: 450px;
    margin: 0 auto;
}
.container p {
    margin: 0;
}

.container .post {
    background-color: #0f0f0f;
    padding: 20px;
    border-radius: 16px;

    margin: 20px 0;
}

.container .post .content {
    color: white;

    margin-bottom: 20px;
}

.container .post .bottom {
    color: white;
    font-size: 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container .post .bottom .buttons {
    display: flex;
    /* 子项的间距 */
    gap: 10px;

    opacity: 0;

    transition: opacity 0.5s;
}

.container .post:hover .bottom .buttons {
    opacity: 1;
}

.container .post .bottom .button {
    cursor: pointer;

    padding: 5px 10px;
    /* 两端变圆 */
    border-radius: 999999px;
}

.container .post .bottom .buttons .edit {
    background-color: teal;
}

.container .post .bottom .buttons .delete {
    background-color: orangered;
}

.container .post .bottom .buttons .confirm {
    background-color: teal;
}

.publish {
    width: 60px;
    height: 60px;

    background-color: teal;
    color: white;

    font-weight: bold;
    border-radius: 50%;

    /* 方法一 */
    /* text-align: center; */
    /* 字会在一行居中 */
    /* line-height: 60px; */

    /* 方法二 */
    display: flex;
    /* 水平 */
    justify-content: center;
    /* 垂直 */
    align-items: center;

    position: fixed;
    bottom: 20px;
    right: 20px;

    cursor: pointer;
}

.container .post .time {
    color: #aaa;
}

.container .post .input-content {
    width: 100%;
    height: 100px;

    margin-bottom: 20px;

    outline: none;
    border: none;
    background-color: #aaa;

    padding: 10px;

    border-radius: 6px;
}

.container .input-dialog .bottom .buttons {
    opacity: 1;
}

.container .bottom .buttons .cancel {
    background-color: gray;
}

.container .input-dialog .bottom {
    justify-content: flex-end;
}

.container .title {
    color: white;
}

.container .empty {
    color: #aaa;
    font-size: 20px;

    margin: 80px 0;

    text-align: center;
}
</style>
