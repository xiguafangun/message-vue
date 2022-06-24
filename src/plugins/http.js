import axios from "axios"

export default {
    install: (app) => {
        // 将 axios 绑定到全局属性中
        app.config.globalProperties.$http = axios
    },
}
