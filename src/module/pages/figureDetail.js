import React from 'react';
import { Row, Col, CardDeck, Card } from "react-bootstrap"
import { Pages } from "../pages.js"

import Chart from 'react-apexcharts'
import style from "../../css/figureDetail.module.css"
import { PoliticianR } from "../request/politicianR"
import { trackPromise } from 'react-promise-tracker';

// import PacmanLoader from "react-spinners/ClipLoader";


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
                experience: [{ y: 2016, thing: "擔任貓咪興起計畫總負責人" }, { y: 2014, thing: "貓咪學員創始人" }],
                todo: [{ tag: "環境", t: "因應全球氣候變遷，大幅提高原住民地區禁伐補償及造林補助，推動原住民土地受限補償，保障原住民生存權。" },
                { tag: "教育", t: "要求教育部應制訂尊重原住民為台灣歷史主人的教綱與課程，創立原住民大學、廣設原住民族教育資源中心。" },
                { tag: "環境發展", t: "推動商圈補助計劃。針對舊產業部落加以輔導。讓歷史產業部落可以脫胎換骨。國發會地方創生計劃納入六都傳統社區。" }],
                kpi: {
                    series: [50],

                    options: {
                        // colors: ['#E4E7f0', '#955242'],
                        colors: ['#955242'],
                        labels: ["50分"],
                        legend: {
                            show: false,
                        }, plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: '20px',
                                        color: "#fff",
                                    },
                                    value: { show: false }
                                }
                            }

                        }
                    },
                },
                attendanceRate: {
                    series: [88],
                    options: {
                        colors: ['#955242'],
                        labels: ["88%"],
                        legend: {
                            show: false,
                        }, plotOptions: {
                            radialBar: {
                                dataLabels: {
                                    name: {
                                        fontSize: '20px',
                                        color: "#fff",
                                    },
                                    value: { show: false }
                                }
                            }

                        }
                    },
                },
                persoal: {
                    option: {
                        xaxis: {
                            categories: ["step 1", "step 2", "step 3", "step 4", "step 5", "step 6", "step 7"],
                            labels: {
                                style: {
                                    colors: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff",]
                                }
                            }
                        },
                        yaxis: { labels: { style: { colors: ["#fff"] } } },
                        fill: {
                            colors: ['#f8f9EE',],
                            opacity: 1.0,
                        }, chart: {
                            toolbar: { show: false }
                        }

                    },
                    series: [
                        {
                            data: [20, 45, 64, 26, 27, 85, 24]
                        }
                    ],
                    legend: {
                        show: false,
                    }
                }

            },
            go: [{
                name: "走勢圖",
                data: [99, 98]
            }],
            goO: {

                chart: {

                    toolbar: {
                        show: false,
                    }
                },
                colors: ['#77B6EA'],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: '走勢圖',
                    align: 'left',
                    style: {
                        color: "#fff"
                    }
                },

                xaxis: {
                    categories: ['9', '10'],
                    title: {
                        text: '',
                        style: {
                            color: "#fff"
                        }
                    },
                    labels: { style: { colors: ["#fff", "#fff"] } }
                }, yaxis: { labels: { style: { colors: ["#fff"] } } },



            },


        }
    }
    componentDidMount() {
        this.figureID = this.props.match.params.id
        // trackPromise(
        PoliticianR.detail(this.figureID).then(res => {
            console.log(res)
            this.setState({ "resData": res.data.data[0] })
            console.log(res.data.data[0])
            let cond = [{
                no: "a_n", name: "地區"
            }, { no: "name", name: "姓名" }, { no: "degree", name: "學歷" }, { no: "tel", name: "電話" }]
            let selfD = []
            cond.map(placement => {
                if (placement["no"] in res.data.data[0]) {
                    selfD.push({ "title": res.data.data[0][placement.no].replace(/;/g, "<br />")
                })
        }
            })
            this.setState({ selfD: selfD })
        })
        // )

    }

render() {
    return (<Pages id={ 3 } page={
        (<>
            <div className={ style.people }>
                {
                    <Row className="justify-content-center ">
                        <div>
                            <Row className={ style.dashboard }>
                                <Col sm={ 3 } className={ style.dashboardcard }>
                                    <Row>
                                        <Col>
                                            <img src={ this.state.resData?.photo } className={ style.figurePh }></img>
                                        </Col>
                                        <Col>

                                        </Col>
                                    </Row>

                                    { this.state.selfD && this.state.selfD.map(placement => {
                                        return (<>
                                            <div className={ style.white }>{ placement.title }</div>
                                        </>)
                                    }) }
                                </Col>
                                <Col sm={ 6 }>
                                    <Row className={ style.dashboardcard }>
                                        {/* <Col className={ style.white }>政見分數
                                            <Chart options={ this.state.data.kpi.options } series={ this.state.data.kpi.series } type="radialBar" />

                                            </Col> */}
                                        <Col className={ style.white }>
                                            <Chart options={ this.state.goO } series={ this.state.go } type="line" height={ 350 } />
                                        </Col>
                                    </Row>
                                    <Row className={ style.dashboardcard }>
                                        {/* <Col className={ style.white }>出席率
                                                <Chart options={ this.state.data.attendanceRate.options } series={ this.state.data.attendanceRate.series } type="radialBar" />
                                            </Col> */}
                                        <Col className={ style.white }>
                                            <Chart options={ this.state.goO } series={ this.state.go } type="line" height={ 350 } />
                                        </Col>
                                    </Row>
                                    <Row className={ style.dashboardcard }>
                                        <Col className={ style.white }>
                                            提案圖
                                            <Chart options={ this.state.data.persoal.option } series={ this.state.data.persoal.series } type="bar" />
                                        </Col>

                                    </Row>
                                </Col>
                                <Col sm={ 3 } className={ style.dashboardcard }>
                                    <span className={ style.white }>政見</span>
                                    { this.state.data.todo.map((placement, index) => {
                                        return (<>
                                            <div><CardDeck><Card>
                                                <Card.Header>#{ placement.tag }</Card.Header>
                                                <Card.Body>
                                                    <Card.Text>{ placement.t }</Card.Text>
                                                </Card.Body>
                                                <Card.Footer>Read more</Card.Footer>
                                            </Card></CardDeck>
                                                <hr /></div>
                                        </>)
                                    }) }
                                </Col>
                            </Row>
                        </div>





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