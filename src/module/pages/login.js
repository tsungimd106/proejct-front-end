import React from 'react';
import { Row, Col, Button } from "react-bootstrap"
import TestRequest from "../request/test"
import { ModalBase } from "../modal"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/login.css"

class Sign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showinfo: false,
            message: ""
        }
    }

    showinfo = (msg) => {
        this.setState({ showinfo: !this.state.showinfo, message: msg })
    }

    send = () => {
        const requestData = {
            "account": document.getElementById("account").value,
            "password": document.getElementById("password").value,
            "age": document.getElementById("age").value,
            "sex": document.getElementById("sex").value,
            "name": document.getElementById("name").value,
        }
        fetch("https://e647c9cb9db1.ngrok.io/user/sign", {
            mode:"cors",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',    
                'Origin': 'http://localhost:3000/',
                'Access-Control-Allow-Origin': 'https://e647c9cb9db1.ngrok.io',
            },
            body: JSON.stringify(requestData)
        }).then(response => {
            this.showinfo(response.message)
        }).catch(error => console.log(error))
        // TestRequest.sign(requestData).then(response => {
        //     this.showinfo(response.message)
        // }).catch(error => console.log(error))
    }

    render() {

        return (<>
            <Row className="justify-content-end sign">
                <Col sm={ 8 }>
                    <p >Logo</p>
                    <p >歡迎使用 "XXXX"</p>
                    <p><input type="text" placeholder="帳號" id="account" /></p>
                    <p><input type="text" placeholder="密碼" id="password" /></p>
                    <Button variant="danger" onClick={ this.send }>登入</Button>
                    <p><l>忘記密碼</l></p>
                    <Button variant="success" >以LINE帳號登入</Button>
                </Col>
            </Row>
            <ModalBase
                show={ this.state.showinfo }
                close={ ()=>{this.showinfo()} }
                ok={ ()=>{this.showinfo()} }
                message={ this.state.message }
            />
        </>)
    }
}

export default Sign = {
    routeProps: {
        path: "/sign",
        component: Sign
    },
    name: "首頁"
}