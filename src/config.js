const master = {
    // 正式機URL，勿動
    API_URL: "https://test1022ntubimd.herokuapp.com/"
}

const dev = {
    API_URL: "https://test1022ntubimd.herokuapp.com/"
}

export const config = process.env.NODE_ENV === "development" ? dev : master;