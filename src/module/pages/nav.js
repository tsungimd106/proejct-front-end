import React from 'react';
import { Row, Col, Container ,Button} from "react-bootstrap"
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
    logout=()=>{
        localStorage.clear()
        this.setState({"login":false})
        window.location.href = "./"

    }
    render() {
        return (<Container>
            <div className="navtop">
                <img className="navPicture" src={logo_dark}></img>
            </div>
            <Row className="justify-content-center">
              
                <Col sm={ "auto" }>
                    <a href="./#/">議題大小事</a></Col>
                <Col sm={ "auto" }>
                    <a href="./#/policy/">提案專區</a></Col>
                <Col sm={ "auto" }>
                    <a href="./#/figure/">人物專區</a></Col>
                { (this.state.login || false ? (<>
                    <Col sm={ "auto" }>個人檔案</Col><Col sm={ "auto" }>
                    <Button onClick={this.logout}>登出</Button></Col>
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
