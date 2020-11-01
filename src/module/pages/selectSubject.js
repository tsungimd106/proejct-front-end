import React from 'react';
import { Row, Col, Button } from "react-bootstrap"
import TestRequest from "../request/test"
import { ModalBase } from "../modal"
import logo_dark from '../../imgs/LOGO1.png'
import { Pages } from "../pages.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/selectSubject.css"

class SelectSubject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                "金融經濟", "教育","科技","醫療","環境","藝文"
                
            ]
        }
    }

    render() {
        return (<Pages page={
            (<>
                <div className="ss_lineheight">
                <center>
                    <img id="logo" src={logo_dark}></img>
                    <p>Hi! XXX歡迎您使用<img src={logo_dark}></img></p>
                    <p>請選擇您所感興趣的議題</p>
                    <Row className="select" >
                        {
                            (this.state.data || false ? (<>   {/* 看data在不在，不再會執行39行(傳回空的)。在就會接著執行 */}
                                {this.state.data.map(item => {      {/*data跑回圈，裡面的值取變數名稱叫item。map類似foreach*/}
                                    return (<>
                                        <Col sm={4}><button className="need_to_center ss_subjectbtn">{item}</button> {/*data內的item一個一個跑回圈*/}
                                        </Col>
                                    </>)
                                })}
                            </>) : (<></>))
                        }
                    </Row>
                </center>
                </div>
                <p><Button className="ss_checkbtn" onClick={this.send}>確認</Button></p>
            </>)
        } />)
    }
}


export default SelectSubject = {
    routeProps: {
        path: "/selectSubject",
        component: SelectSubject
    },
    name: "選擇議題"
}
