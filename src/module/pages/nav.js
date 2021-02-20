import React from 'react';
import { Row, Col, Container, Button, Dropdown,  } from "react-bootstrap"
import logo_dark from '../../imgs/LOGO1.jpg'
import { Search, Person, CircleChevronDown, SignOut } from 'akar-icons';
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

                {(this.state.login || true ? (<>
                    <Col sm={"auto"}><Person /></Col>
                    <Col sm={"auto"}>
                    <Dropdown>
                        <Dropdown.Toggle  id="dropdown-basic">
                            <CircleChevronDown />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                        
                    <SignOut onClick={this.logout} /></Col>
                </>) : (<>
                    <Col sm={"auto"}><a href="./#/login">登入</a></Col>
                    <Col sm={"auto"}><a href="./#/sign">註冊</a></Col>
                </>))}


            </Row>
        </Container>)
    }
}
