import React from 'react';
import { Row, Col, Container, Button, Dropdown, } from "react-bootstrap"
import logo_dark from '../../imgs/LOGO1.png'
import { Search, Person, CircleChevronDown, SignOut, Info, Envelope, Star } from 'akar-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../../css/nav.module.css"


export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login"),
            "check": localStorage.getItem("isManage")

        }
    }
    logout = () => {
        localStorage.clear()
        this.setState({ "login": false })
        window.location.href = "./"

    }

    render() {
        return (<>

            <Row className={ style.navtop + " " + style.i_dont_know_how_to_name_it + " justify-content-center  align-items-center" }>
                <Col >            <a href="./#/"><img className={ style.navPicture } src={ logo_dark } /></a>
                </Col>
                <Col sm={ "auto" } >
                    <a href="./#/" className={ this.props.id == 0 ? style.pageOn : "" }>首頁</a>
                </Col>
                <Col sm={ "auto" }>
                    <a href="./#/election" className={ this.props.id == 1 ? style.pageOn : "" }>選舉報你知</a>
                </Col>
                <Col sm={ "auto" } >
                    <a href="./#/policy/" className={ this.props.id == 2 ? style.pageOn : "" }>提案專區</a>
                </Col>
                <Col sm={ "auto" }>
                    <a href="./#/figure/" className={ this.props.id == 3 ? style.pageOn : "" }>政治人物</a>
                </Col>
                <Col sm={ "auto" }>
                    {/* <input className="searchbar" type="text" name="搜尋"></input> */ }
                    <Search /></Col>

                { (this.state.login || false ? (<>
                    <Col sm={ "auto" }>
                        <Dropdown variant="secondary">
                            <Dropdown.Toggle className={ style.down_btn }>
                                <CircleChevronDown />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/user" className={ style.dropdown_item }>
                                    <Row className={ " align-items-center justify-content-center" } noGutters={ false }>
                                        <Col sm={ 2 }> <Person /></Col>

                                        <Col>個人檔案</Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-1" className={ style.dropdown_item }>
                                    <Row className={ " align-items-center justify-content-center" } noGutters={ false }>
                                        <Col sm={ 2 }> <Envelope /></Col>

                                        <Col>提出問題與反饋</Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item href="./#/" className={ style.dropdown_item }>
                                    <Row className={ " align-items-center justify-content-center" } noGutters={ false }>
                                        <Col sm={ 2 }> <Info /> </Col>
                                        <Col>法規與條款資訊</Col>
                                    </Row>
                                </Dropdown.Item>
                                <Dropdown.Item href="./#/" className={ style.dropdown_item }>
                                    <Row className={ " align-items-center justify-content-center" } noGutters={ false }>
                                        <Col sm={ 2 }>
                                            <SignOut onClick={ this.logout } /> </Col>

                                        <Col onClick={ this.logout }> 登出</Col>
                                    </Row>
                                </Dropdown.Item>                                
                                { this.state.check=="true" ? <Dropdown.Item href="./#/manage" className={ style.dropdown_item }>
                                    <Row className={ " align-items-center justify-content-center" } noGutters={ false }>
                                        <Col sm={ 2 }>
                                            {/* <img src={manage}/> */ }
                                            <Star /> </Col>
                                        <Col > 管理者</Col>
                                    </Row>
                                </Dropdown.Item> : <></> }


                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </>) : (<>
                    <Col sm={ "auto" }><a href="./#/login">登入</a></Col>
                    <Col sm={ "auto" }><a href="./#/sign">註冊</a></Col>
                </>)) }


            </Row>
        </>)
    }
}
