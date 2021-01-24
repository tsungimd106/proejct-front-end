import React from 'react';
import { Row, Col, CardDeck, Card } from "react-bootstrap"
import { Pages } from "../pages.js"
import "../../css/figureDetail.css"
import Chart from 'react-apexcharts'


class FigureDetail extends React.Component {
    figureID = null
    constructor(props) {
        super(props)
        this.state = {
            options: {},
            data: {
                name: "我是貓",
                img: "https://twgreatdaily.com/images/elastic/wJ3/wJ3w6W8Bgx9BqZZIWtZu.jpg",
                session: 10,
                area: "貓咪星球第一選區",
                degree: "貓咪星球地衣勢力北區南靈子計畫高等教育學院博士班畢業",
                experience: [{ y: 2016, thing: "擔任貓咪興起計畫總負責人", y: 2014, thing: "貓咪學員創始人" }],
                todo: [{ tag: "貓咪", t: "增加貓咪星球的罐罐" }, { tag: "家庭", t: "增加貓咪星球貓抓板數量" }],
                kpi: {
                    series: [50, 50],
                    options: {


                    },
                },
                attendanceRate: {
                    series: [88, 12],
                    options: {
                        chart: {
                            type: 'donut',
                        },

                    },
                },
                persoal: {
                    option: {
                        xaxis: {
                            categories: ["step 1", "step 2", "step 3", "step 4", "step 5", "step 6", "step 7"]
                        },



                    },
                    series: [
                        {
                            data: [20, 45, 64, 26, 27, 85, 24]
                        }
                    ]
                }

            },

        }
    }
    componentDidMount() {
        this.figureID = this.props.match.params.id

    }

    render() {
        return (<Pages page={
            (<>
                <div className="people">
                    {
                        <Row className="justify-content-center align-items-center">

                            <Col sm={ 4 } className="name">
                                <Row className=" align-items-center">
                                    <Col ><img src={ this.state.data.img }></img></Col>
                                    <Col>{ this.state.data.name }</Col>

                                </Row>
                            </Col>
                            <Col sm={ 6 } className="self">

                                <Row></Row>
                            </Col>
                            <Col sm={ 10 } className="">經歷</Col>
                            <Col sm={ 5 } ><p>證件績效評分</p>
                                <Chart options={ this.state.options } series={ this.state.data.kpi.series } type="donut" />

                            </Col>
                            <Col sm={ 5 } ><p>出席率</p>
                                <Chart options={ this.state.options } series={ this.state.data.attendanceRate.series } type="donut" />

                            </Col>
                            <Col sm={ 10 } >提案
                        <Chart options={ this.state.data.persoal.option } series={ this.state.data.persoal.series } type="bar" />
                            </Col>
                            <Col sm={ 10 } >
                                <p>政見</p>
                                <CardDeck>
                                    { this.state.data.todo.map((placement, index) => {
                                        return <Card>
                                            <Card.Header>#{placement.tag}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>{ placement.t }</Card.Text>
                                            </Card.Body>
                                            <Card.Footer>Read more</Card.Footer>
                                        </Card>
                                    }) }

                                </CardDeck>
                            </Col>
                        </Row>
                    }</div>
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