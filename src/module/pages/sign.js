import React from 'react';
import { Row, Col, Button } from "react-bootstrap"
import TestRequest from "../request/test"
import { ModalBase } from "../modal"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/sign.css"

class Base extends React.Component {

    // TestRequest.sign(requestData).then(response => {
    //     this.showinfo(response.message)
    // }).catch(error => console.log(error))


    render() {

        return (<>
            <Row className="justify-content-end sign">
                <Col sm={6} id="left">
                    <h4>Welcome</h4>
                    <h6>__</h6>
                    <img src={require('../../imgs/logo(light).png')}></img>
                </Col>
                <Col sm={6} id="right">
                    <a href="home.js"><img src={require('../../imgs/homeKey.png')} id="homeKey"></img></a>
                    <img src={require('../../imgs/LOGO1.png')}></img>
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
        this.showinfo("測試")
    }


    showinfo = (msg) => {
        this.setState({ showinfo: !this.state.showinfo, message: msg })
    }

    render() {
        return (<Base content={<>
            <p><input type="text" placeholder="帳號" id="account" /></p>
            <p><input type="text" placeholder="密碼" id="password" /></p>
            <p><input type="text" placeholder="確認密碼" id="checkpsd" /></p>
            <p><input type="text" placeholder="暱稱" id="name" /></p>
            <p><select id="year">
                <option value=" ">出生年</option>
                <option value="year">1920</option>
                <option value="year">1921</option>
                <option value="year">1922</option>
                <option value="year">1923</option>
            </select></p>
            <p><select id="city">
                <option value=" ">現居地</option>
                <option value="year">基隆市</option>
                <option value="year">台北市</option>
                <option value="year">新北市</option>
                <option value="year">桃園市</option>
            </select></p>
            <p>記住我</p>
            <p><Button id="continue" onClick={this.send}>繼續</Button></p>
            <p><Button variant="success" >以LINE帳號註冊</Button></p>
            <a>已有帳號  &nbsp; &nbsp;</a><h5>登入</h5>
            <ModalBase
                show={this.state.showinfo}
                close={() => { this.showinfo() }}
                ok={() => { this.showinfo() }}
                message={this.state.message}
            />
        </>}></Base>)
    }
}

class Login extends React.Component {
    render() {
        return (<Base content={<>
            <p><input type="text" placeholder="帳號" id="account" /></p>
            <p><input type="text" placeholder="密碼" id="password" /></p>

            <p>記住我</p>
            <p><Button id="continue" onClick={this.send}>繼續</Button></p>
            <p><Button variant="success" >以LINE帳號註冊</Button></p>
            <a>已有帳號  &nbsp; &nbsp;</a><h5>登入</h5>
            <ModalBase
                show={this.state.showinfo}
                close={() => { this.showinfo() }}
                ok={() => { this.showinfo() }}
                message={this.state.message}
            />
        </>}></Base>)
    }
}


export const sign = {
    routeProps: {
        path: "/sign",
        component: Sign
    },
    name: "首頁"
}

export const login = {
    routeProps: {
        path: "/login",
        component: Login
    },
    name: "首頁"
}