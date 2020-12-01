import React from 'react';
import { Row, Col, Container } from "react-bootstrap"
import logo_dark from '../../imgs/LOGO1.png'
import search from '../../imgs/search.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/nav.css"

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login")
        }
    }
    render() {
        return (<Container>
            <div className="navtop">
                <img className="navPicture" src={logo_dark}></img>
            </div>
            <Row className="justify-content-center">
                {/* <Col sm={ "auto" }>
                    <a href="./#/">首頁</a>
                </Col> */}
                <Col sm={ "auto" }>
                    <a href="./#/">議題大小事</a></Col>
                <Col sm={ "auto" }>
                    <a href="./#/policy/">提案專區</a></Col>
                <Col sm={ "auto" }>人物專區</Col>
                { (this.state.login || false ? (<>
                    <Col sm={ "auto" }>個人檔案</Col><Col sm={ "auto" }>登出</Col>
                </>) : (<>
                    <Col sm={ "auto" }><a href="./#/login">登入</a></Col>
                    <Col sm={ "auto" }><a href="./#/sign">註冊</a></Col>
                </>)) }
                <Col sm={ "auto" }><input className="searchbar" type="text" name="搜尋"></input>
                <img className="searchimg" src={search}></img></Col>

            </Row>
        </Container>)
    }
}
