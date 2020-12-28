const master = {
    // 正式機URL，勿動
    API_URL: ""
}

const dev = {
    API_URL: "https://tsungimd-project-backend.herokuapp.com/"
}

export const config = process.env.NODE_ENV === "development" ? dev : master;