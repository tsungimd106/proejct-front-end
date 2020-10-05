import React from 'react';
import TestRequest from "../request/test"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "test": []
        }
    }

    test = () => {
        TestRequest.forTest().then(response => {
            
            console.log(response)
            this.setState({"test": response.data})
        }).catch(error => console.log(error))
    }

    render() {
        return (<>
            這裡是首頁
            以下測試
            <button onClick={()=>this.test()}>測試用</button>
            {this.state.test.map(item => {
                return (<div>{ item.id }</div>)
            }) }
        </>)
    }
}

export default Home = {
    routeProps: {
        path: "/",
        component: Home
    },
    name: "首頁"
}