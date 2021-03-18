import React from 'react';
import { Row, Col, Carousel } from "react-bootstrap"
import { Pages } from "../pages.js"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../../css/main.css"

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (<Pages id={ 0 } page={
            (<>

                <Row>
                    <Col></Col>

                </Row>

            </>)
        } />)
    }
}





export default Home = {
    routeProps: {
        path: "/",
        component: Home
    },
    name: "首頁"
}