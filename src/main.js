import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import axios from "./plugins/http"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const app = createApp(App)

// 挂载 router
app.use(router)

// 绑定 axios 插件
app.use(axios)

// 绑定 element-plus
app.use(ElementPlus)

app.mount("#app")
