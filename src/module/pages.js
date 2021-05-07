import React from 'react';
import { Row, Col } from "react-bootstrap"
import Nav from "./pages/nav"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../css/pages.module.css"

export class Pages extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<>
            <div className={style.pagesC +" "}>
                <div> <Nav id={this.props.id}>
                        </Nav></div>
                <div></div>
                { this.props.page || (<></>) }
            </div>
            <div className={style.footer}>tsungimd106@gmail.com</div>
        </>)
    }
}

