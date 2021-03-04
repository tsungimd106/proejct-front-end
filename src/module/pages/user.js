import React from 'react';
import { Row, Col, Carousel } from "react-bootstrap"
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

        }
    }

    render() {
        return (<Pages page={
            (<>
                {this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (
                        <div className="profile"> 
                            <div>
                                <h5 className="topicBoxBold">暱稱</h5>
                                <div className="textBox"></div>
                            </div>   
                            <div>
                                <h5 className="topicBoxBold">生日</h5>
                                <div className="textBox"></div>
                            </div>  
                            <div>
                                <h5 className="topicBoxBold">性別</h5>
                                <div className="textBox"></div>
                            </div>  
                            <div>
                                <h5 className="topicBoxBold">地區</h5>
                                <div className="textBox"></div>
                            </div>     
                            <div>
                                <h5 className="topicBoxBold">密碼</h5>
                                <div className="textBox"></div>
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