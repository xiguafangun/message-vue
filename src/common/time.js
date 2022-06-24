const THOUSAND = 1000

function formatTime(timestamp) {
    // 将时间戳转成文本

    const time = new Date(timestamp * THOUSAND)
    return `${time.getFullYear()}-${
        time.getMonth() + 1
    }-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`
}

export { formatTime }
