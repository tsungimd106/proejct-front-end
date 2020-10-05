const master = {
    // 正式機URL，勿動
    API_URL: ""
}

const dev = {
    API_URL: "http://localhost:8081"
}

export const config = process.env.NODE_ENV === "development" ? dev : master;