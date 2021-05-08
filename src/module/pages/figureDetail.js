import React from 'react';
import { Row, Col, CardDeck, Card, DropdownButton, Dropdown } from "react-bootstrap"
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
                session: 10,
                todo: [{ tag: "環境", t: "因應全球氣候變遷，大幅提高原住民地區禁伐補償及造林補助，推動原住民土地受限補償，保障原住民生存權。" },
                { tag: "教育", t: "要求教育部應制訂尊重原住民為台灣歷史主人的教綱與課程，創立原住民大學、廣設原住民族教育資源中心。" },
                { tag: "環境發展", t: "推動商圈補助計劃。針對舊產業部落加以輔導。讓歷史產業部落可以脫胎換骨。國發會地方創生計劃納入六都傳統社區。" }],

                persoal: {
                    option: {chart: {
                            toolbar: { show: false }, foreColor: "#fff"
                        },
                       

                        xaxis: {
                            categories: ["退回程序", "審查完畢", "交付審查", "排入院會", "三讀", "逕付二讀"],

                        },
                        fill: {
                            colors: ['#f8f9EE',],
                            opacity: 1.0,
                        },  colors: ['#77B6EA', "#123123"]

                    },
                    series: [{ data: [20, 45, 64, 26, 27, 85,] }, { data: [44, 5, 6, 6, 27, 8,] }
                    ],

                    legend: {
                        show: false,
                    }
                }

            },
            go: [{ name: "該政治人物", data: [99, 98] }, { name: "立委總平均", data: [88, 85] }],
            score: [{ name: "該政治人物", data: [85, 90] }, { name: "立委總平均", data: [77, 85] }],
            scoreD: {
                chart: { toolbar: { show: false, }, foreColor: "#fff" },
                colors: ['#77B6EA', "#123123"],

                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: '政見達成分數走勢',
                    align: 'left',

                },
                xaxis: {
                    categories: ['9', '10'],
                    title: {
                        text: '',
                    },

                }
            },
            goO: {
                chart: { toolbar: { show: false, }, foreColor: "#fff" },
                colors: ['#77B6EA', "#123123"],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: '出席率走勢圖',
                    align: 'left',

                },
                xaxis: {
                    categories: ['9', '10'],
                    title: {
                        text: '',
                    },
                },

            },
            selfD: [{ no: "degree", name: "學歷" }, { no: "tel", name: "電話" }]


        }
    }
    componentDidMount() {
        this.figureID = this.props.match.params.id
        // trackPromise(
        PoliticianR.detail(this.figureID).then(res => {
            console.log(res)
            this.setState({ "resData": res.data.data[0].data[0] })
            console.log(res.data.data[0])
            let cond = [{ no: "degree", name: "學歷" }, { no: "tel", name: "電話" }]
            let selfD = []
            cond.map(placement => {
                if (placement["no"] in res.data.data[0].data[0]) {
                    selfD.push({
                        "content": res.data.data[0].data[0][placement.no].replace(/;/g, " <br />"),
                        "title": placement.name
                    })
                    document.getElementById(placement.no).innerHTML = res.data.data[0].data[0][placement.no]
                        .replace(/;/g, " $%^& <br />").split("$%^&").reverse().join("").replace(/,/g, " <br />")
                }
            })

            this.setState({
                name: res.data.data[0].data[0].name,
                area: res.data.data[0].data[0].e_n,
                policy: res.data.data[0].data[0].experience.split("\n"),
                areaReamrk: res.data.data[0].data[0].remark.replace("null", "")
            })

        })
        // )
        window.scrollTo(0, 0)
        this.changeTerm("當屆")

    }

    changeTerm = (s) => {
        this.setState({ term: s })
    }

    render() {
        return (<Pages id={3} page={
            (<>
                <div className={style.people}>
                    {


                        <Row className={style.dashboard}>
                            <Col sm={3} className={style.dashboardcard + " " + style.white}>
                                <Row className="align-items-center">
                                    <Col>
                                        <img src={this.state.resData?.photo} className={style.figurePh}></img>
                                    </Col>
                                    <Col>
                                        <div>

                                            <DropdownButton id="dropdown-basic-button" title={this.state.term && this.state.term}
                                                variant="outline-light"
                                            >

                                                <Dropdown.Item onClick={() => { this.changeTerm("當屆") }}>當屆</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { this.changeTerm("歷屆") }}>歷屆</Dropdown.Item>
                                                <Dropdown.Item onClick={() => { this.changeTerm("9") }}>9</Dropdown.Item>

                                            </DropdownButton>
                                        </div>
                                        <p >{this.state.selfD && this.state.name}</p>

                                        <p >{this.state.selfD && this.state.area}</p>
                                        <p>{this.state.selfD && this.state.areaReamrk}</p>
                                    </Col>
                                </Row>


                                {this.state.selfD && this.state.selfD.map(placement => {
                                    return (<>
                                        <Row>
                                            <Col sm="auto" >{placement.name}</Col>
                                            <Col id={placement.no} className={style.line}></Col>
                                        </Row>
                                        {/* <div className={style.white}>{placement.title}</div> */}
                                    </>)
                                })}
                                <Row><Col sm={"auto"}>經歷</Col>
                                    <Col>
                                        {this.state.policy && this.state.policy.map((item, index) => {
                                            return (<>

                                                <Card style={{ color: "#000", margin: "15px 0" }}>

                                                    <Card.Body>
                                                        <Card.Text >{item}</Card.Text>
                                                    </Card.Body>

                                                </Card>
                                                {/* <div>{item}</div> */}
                                            </>)
                                        })}</Col>
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Row className={style.dashboardcard}>
                                    {/* <Col className={ style.white }>政見分數
                                            <Chart options={ this.state.data.kpi.options } series={ this.state.data.kpi.series } type="radialBar" />

                                            </Col> */}
                                    <Col className={style.white}>
                                        <Chart options={this.state.scoreD} series={this.state.score} type="area" height={350} />
                                    </Col>
                                </Row>
                                <Row className={style.dashboardcard}>
                                    {/* <Col className={ style.white }>出席率
                                                <Chart options={ this.state.data.attendanceRate.options } series={ this.state.data.attendanceRate.series } type="radialBar" />
                                            </Col> */}
                                    <Col className={style.white}>
                                        <Chart options={this.state.goO} series={this.state.go} type="area" height={350} />
                                    </Col>
                                </Row>
                                <Row className={style.dashboardcard}>
                                    <Col className={style.white}>
                                        提案數量統計
                                            <Chart options={this.state.data.persoal.option} series={this.state.data.persoal.series} type="bar" />
                                    </Col>

                                </Row>
                            </Col>
                            <Col sm={3} className={style.dashboardcard}>
                                <span className={style.white}>政見</span>
                                {this.state.data.todo.map((placement, index) => {
                                    return (<>
                                        <div><CardDeck><Card>
                                            <Card.Header>#{placement.tag}</Card.Header>
                                            <Card.Body>
                                                <Card.Text>{placement.t}</Card.Text>
                                            </Card.Body>
                                            <Card.Footer>Read more</Card.Footer>
                                        </Card></CardDeck>
                                            <hr /></div>
                                    </>)
                                })}
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
