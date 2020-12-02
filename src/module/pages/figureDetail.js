import React from 'react';
import { Row, Col, Carousel } from "react-bootstrap"
import { Pages } from "../pages.js"
import "../../css/policy.css"

class FigureDetail extends React.Component {
    figureID = null
    constructor(props) {
        super(props)
        this.state = {


        }
    }
    componentDidMount() {
        this.figureID = this.props.match.params.id

    }

    render() {
        return (<Pages page={
            (<>
                <div>人物專區</div>
                {
                    <Row>
                        <Col sm={12}></Col>
                        <Col sm={3} > 這是基本資料</Col>
                        <Col sm={9} >
                            <Row>
                                <Col sm={6}>績效</Col>
                                <Col sm={6}>出席率</Col>
                                <Col sm={12}>經歷</Col>
                                <Col sm={12}>提案</Col>
                            </Row>
                        </Col>
                    </Row>
                }
            </>)
        } />)
    }
}





export default FigureDetail = {
    routeProps: {
        path: "/figure/:id",
        component: FigureDetail
    },
    name: "人物專區"
}