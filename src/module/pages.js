import React from 'react';
import { Row, Col } from "react-bootstrap"
import Nav from "./pages/nav"
import 'bootstrap/dist/css/bootstrap.min.css';

export  class Pages extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (<>
            <Row>
                <Col>
                    <Nav>
                    </Nav>
                </Col>
            </Row>
            <Row><Col>
            {this.props.page||(<></>)}
            </Col></Row>
        </>)
    }
}

