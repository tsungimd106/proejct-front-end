import React from 'react';
import { Pages } from "../pages.js"

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (<Pages page={
            (<>
                這裡是首頁

            </>)
        } />)
    }
}

export default Home = {
    routeProps: {
        path: "/",
        component: Home
    },
    name: "首頁"
}