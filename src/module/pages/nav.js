import React from 'react';
import { Row, Col, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login")
        }
    }
    render() {
        return (<Container>
            <Row className="justify-content-center">
                {/* <Col sm={ "auto" }>
                    <a href="./#/">首頁</a>
                </Col> */}
                <Col sm={ "auto" }>
                    <a href="./#/">議題大小事</a></Col>
                <Col sm={ "auto" }>政策專區</Col>
                <Col sm={ "auto" }>人物專區</Col>
                <Col sm={ "auto" }>進度專區</Col>
                { (this.state.login || false ? (<>
                    <Col sm={ "auto" }>個人檔案</Col><Col sm={ "auto" }>登出</Col>
                </>) : (<>
                    <Col sm={ "auto" }><a href="./#/login">登入</a></Col>
                    <Col sm={ "auto" }><a href="./#/sign">註冊</a></Col>
                </>)) }

            </Row>
        </Container>)
    }
}
