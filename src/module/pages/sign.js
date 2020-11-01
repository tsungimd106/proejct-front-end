import React from 'react';
import { Row, Col, Button } from "react-bootstrap"
import TestRequest from "../request/test"
import { ModalBase } from "../modal"
import logo_light from '../../imgs/logo(light).png'
import home_icon from '../../imgs/homeKey.png'
import logo_dark from '../../imgs/LOGO1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/sign.css"

class Base extends React.Component {

    render() {
        return (<>
            <Row className="sign" noGutters="true">
                <Col sm={6} id="left">
                    <h4>Welcome</h4>
                    <h6>__</h6>
                    <img src={logo_light}/>
                </Col>
                <Col sm={6} id="right" >
                    <a href="./#/"><img src={home_icon} id="homeKey"></img></a>
                    <img src={logo_dark}></img>
                    {this.props.content}
                </Col>
            </Row>

        </>)
    }
}

class Sign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": ""
        }
    }
    
    send = () => {
        window.location.href = "./#/sign2"
    }

    showinfo = (msg) => {
        this.setState({ showinfo: !this.state.showinfo, message: msg })
    }

    render() {
        return (<Base content={<div>
            <p><input type="text" placeholder="&nbsp;帳號" id="account" /></p>
            <p><input type="text" placeholder="&nbsp;密碼" id="password" /></p>
            <p><input type="text" placeholder="&nbsp;確認密碼" id="checkpsd" /></p>
            <p><input type="text" placeholder="&nbsp;暱稱" id="name" /></p>
            <p><select id="year">
                <option value=" ">出生年</option>
                <option value="year">1920</option>
                <option value="year">1921</option>
                <option value="year">1922</option>
                <option value="year">1923</option>
            </select></p>
            <p >出生日期</p><p><input type="date" placeholder="出生日期"></input></p>
            <p><select id="city">
                <option value=" ">現居地</option>
                <option value="year">基隆市</option>
                <option value="year">台北市</option>
                <option value="year">新北市</option>
                <option value="year">桃園市</option>
            </select></p>
            <p><Button id="continue" onClick={this.send} >繼續</Button></p>
            <p><Button variant="success" >以LINE帳號註冊</Button></p>
            <a href="./#/login">已有帳號  &nbsp; &nbsp; <h5>登入</h5></a>
            <ModalBase
                show={this.state.showinfo}
                close={() => { this.showinfo() }}
                ok={() => { this.showinfo() }}
                message={this.state.message}
            />
        </div>}></Base>)
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": ""
        }
    }
    render() {
        return (<Base content={<div className="need_to_center">
            <p><input type="text" placeholder="&nbsp;帳號" id="account" /></p>
            <p><input type="text" placeholder="&nbsp;密碼" id="password" /></p>
            <p><i>忘記密碼</i></p>       
            <p><Button id="continue" onClick={this.send}>繼續</Button></p>
            <p><Button variant="success" >以LINE帳號登入</Button></p>
            <a href="./#/sign">沒有帳號  &nbsp; &nbsp; <h5>註冊</h5></a>
            <ModalBase
                show={this.state.showinfo}
                close={() => { this.showinfo() }}
                ok={() => { this.showinfo() }}
                message={this.state.message}
            />
        </div>}></Base>)
    }
}

class SignNext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": ""
        }
    }
    send = () => {
        window.location.href = "./#/selectSubject"
    }

    render() {
        return (<Base content={<div className="need_to_center">
            <center><p id="rule">我們絕不會將您的個資販售給廣告商，且除非您授予我們特定權限，否則我們也不會與廣告商分享可識別您個人身分的資訊（例如姓名、電子郵件地址或其他聯絡資訊）。 然而廣告商可以告知我們想要顯示廣告的目標受眾類型，我們再針對可能會感興趣的對象顯示他們的廣告。 我們為廣告商提供廣告成效報告，協助他們瞭解用戶與廣告內容的互動情形。 請參考後續第 2 節瞭解詳情。</p></center>
            <p><input type="checkbox" id="agree" />我同意以上內容</p>
            <p><Button id="continue" onClick={this.send}>確認註冊</Button></p>
            <ModalBase
                show={this.state.showinfo}
                close={() => { this.showinfo() }}
                ok={() => { this.showinfo() }}
                message={this.state.message}
            />
        </div>}></Base>)
    }
}


export const sign = {
    routeProps: {
        path: "/sign",
        component: Sign
    },
    name: "註冊"
}

export const signNext = {
    routeProps: {
        path: "/sign2",
        component: SignNext
    },
    name: "註冊2"
}

export const login = {
    routeProps: {
        path: "/login",
        component: Login
    },
    name: "登入"
}