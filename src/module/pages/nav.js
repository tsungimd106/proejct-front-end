import React from 'react';
import { Row, Col, Container, Button, Dropdown, } from "react-bootstrap"
import logo_dark from '../../imgs/LOGO1.jpg'
import { Search, Person, CircleChevronDown, SignOut, Info, Envelope } from 'akar-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/nav.css"


export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login")
        }
    }
    logout = () => {
        localStorage.clear()
        this.setState({ "login": false })
        window.location.href = "./"

    }
    render() {
        return (<Container>
            <div className="navtop">
                <img className="navPicture" src={logo_dark}></img>
            </div>
            <Row className="justify-content-center">

                <Col sm={"auto"}>
                    <a href="./#/">選舉專區</a></Col>
                <Col sm={"auto"}>
                    <a href="./#/policy/">提案專區</a></Col>
                <Col sm={"auto"}>
                    <a href="./#/figure/">人物專區</a></Col>
                <Col sm={"auto"}>
                    <input className="searchbar" type="text" name="搜尋"></input>
                    <Search /></Col>

                {(this.state.login || false ? (<>
                    <Col sm={"auto"}> <a href="./#/user/"><Person /></a></Col>
                    <Col sm={"auto"}>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <CircleChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                    <Row className="align-items-center" noGutters={true}>
                                        <Col sm={"auto"}> <Envelope /></Col>
                                        
                                        <Col>提出問題與反饋</Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item href="./#/">
                                    <Row className="align-items-center" noGutters={true}>
                                        <Col sm={"auto"}> <Info /> </Col>
                                        
                                        <Col>法規與條款資訊</Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item href="./#/">
                                    <Row className="align-items-center" noGutters={true}>
                                        <Col sm={"auto"}>
                                            <SignOut onClick={this.logout} /> </Col>
                                    
                                        <Col> 登出</Col>
                                    </Row>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </>) : (<>
                    <Col sm={"auto"}><a href="./#/login">登入</a></Col>
                    <Col sm={"auto"}><a href="./#/sign">註冊</a></Col>
                </>))}


            </Row>
        </Container>)
    }
}
