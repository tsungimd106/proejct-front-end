const master = {
    // 正式機URL，勿動
    // API_URL: "https://tsungimd-project-backend.herokuapp.com/"
    API_URL: "140.131.114.148:8080"
}

const dev = {
    API_URL: "https://tsungimd-project-backend.herokuapp.com/"
}

export const config = process.env.NODE_ENV === "development" ? dev : master;