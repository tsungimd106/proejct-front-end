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
            <div className="">
            </div>
            <Row className="justify-content-center navtop align-items-center">
                <Col >                 <img className="navPicture" src={ logo_dark }></img>
                </Col>
                <Col sm={ "auto" } >
                    <a href="./#/" className={ this.props.id == 0 ? "pageOn" : "" }>首頁</a>
                </Col>
                <Col sm={ "auto" }>
                    <a href="./#/election" className={ this.props.id == 1 ? "pageOn" : "" }>選舉報你知</a>
                </Col>
                <Col sm={ "auto" } >
                    <a href="./#/policy/" className={ this.props.id == 2 ? "pageOn" : "" }>提案專區</a>
                </Col>
                <Col sm={ "auto" }>
                    <a href="./#/figure/" className={ this.props.id == 3 ? "pageOn" : "" }>政治人物</a>
                </Col>
                <Col sm={ "auto" }>
                    {/* <input className="searchbar" type="text" name="搜尋"></input> */ }
                    <Search /></Col>

                { (this.state.login || false ? (<>
                    <Col sm={ "auto" }>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                <CircleChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                            <Dropdown.Item href="#/user">
                                    <Row className="align-items-center" noGutters={ true }>
                                        <Col sm={ "auto" }> <Person /></Col>

                                        <Col>個人檔案</Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1">
                                    <Row className="align-items-center" noGutters={ true }>
                                        <Col sm={ "auto" }> <Envelope /></Col>

                                        <Col>提出問題與反饋</Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item href="./#/">
                                    <Row className="align-items-center" noGutters={ true }>
                                        <Col sm={ "auto" }> <Info /> </Col>

                                        <Col>法規與條款資訊</Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item href="./#/">
                                    <Row className="align-items-center" noGutters={ true }>
                                        <Col sm={ "auto" }>
                                            <SignOut onClick={ this.logout } /> </Col>

                                        <Col> 登出</Col>
                                    </Row>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </>) : (<>
                    <Col sm={ "auto" }><a href="./#/login">登入</a></Col>
                    <Col sm={ "auto" }><a href="./#/sign">註冊</a></Col>
                </>)) }


            </Row>
        </Container>)
    }
}
