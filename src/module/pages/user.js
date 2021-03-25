import React from 'react';
import { Pages } from "../pages.js"
import 'react-awesome-slider/dist/styles.css';
import "../../css/user.css"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { title: "提案標題", content: "我是內文", tag: ["金融", "國防"], date: "2020/11/22" }
            ],
            imageData: [
                "data:image/jpeg;base64,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",
            ]

        }
    }

    render() {
        return (<Pages page={
            (<>
                {this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (
                        <div className="profile"> 
                            <img className="pic" src={this.state.imageData} alt=""/>
                            <div className="data">
                                <h5 className="topicBold">暱稱</h5>
                                <div><input type="text" className="textBox"></input></div>   
                            </div>   
                            <div className="data">
                                <h5 className="topicBold">興趣類別</h5>
                                <div><input type="text" className="textBox"></input></div>
                            </div>
                            <div className="data">
                                <h5 className="topicBold">生日</h5>
                                <div><input type="text" className="textBox"></input></div>
                            </div>  
                            <div className="data">
                                <h5 className="topicBold">性別</h5>
                                <div><input type="text" className="textBox"></input></div>
                            </div>  
                            <div className="data">
                                <h5 className="topicBold">地區</h5>
                                <div><input type="text" className="textBox"></input></div>
                            </div>     
                            <div className="data">
                                <h5 className="topicBold">密碼</h5>
                                <div><input type="text" className="textBox"></input></div>
                            </div>                        
                        </div>)
                    })}
                </>) : (<></>)}
            </>)
        } />)
    }
}





export default User = {
    routeProps: {
        path: "/user",
        component: User
    },
    name: "個人檔案"
}