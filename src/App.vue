<!-- <script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue"
</script>

<template>
    <h1>composition-api</h1>
    <h1>option-api</h1>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style> -->

<template>
    <!-- 页面模板 -->
    <h1 class="title" @click="hit">{{ title }}</h1>
</template>

<script>
export default {
    computed: {
        language() {
            return localStorage.getItem("language") || "zh-CN"
        },
    },
    data() {
        // 数据
        return {
            title: "213123213123123",
        }
    },
    methods: {
        // 定义函数的地方
        hit() {
            alert("hit")
        },
    },
}
</script>

<style>
/* 样式 */
.title {
    color: teal;
}
</style>
