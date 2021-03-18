import React from 'react';
import { Row, Col, CardDeck, Card } from "react-bootstrap"
import { Pages } from "../pages.js"
import "../../css/figureDetail.css"
import Chart from 'react-apexcharts'
import "../../css/figureDetail.css"
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
                experience: [{ y: 2016, thing: "擔任貓咪興起計畫總負責人", y: 2014, thing: "貓咪學員創始人" }],
                todo: [{ tag: "環境", t: "因應全球氣候變遷，大幅提高原住民地區禁伐補償及造林補助，推動原住民土地受限補償，保障原住民生存權。" }, 
                { tag: "教育", t: "要求教育部應制訂尊重原住民為台灣歷史主人的教綱與課程，創立原住民大學、廣設原住民族教育資源中心。" }],
                kpi: {
                    series: [50, 50],
                    options: {
                        colors: ['#E4E7f0', '#955242'],
                    },
                },
                attendanceRate: {
                    series: [88, 12],
                    options: {
                        fill: {
                            colors: ['#c5b7a1', '#b05553'],
                        },

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
                        fill: {
                            colors: ['#f8f9EE',],
                            opacity: 1.0,
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
        trackPromise(
            PoliticianR.detail(this.figureID).then(res => {
                console.log(res)
                this.setState({ "resData": res.data.data[0] })
                console.log(res.data.data[0])
                let cond = [{
                    no:
                    "area_id",name:"地區"},{no: "address",name:"地址"},{no:"degree" ,name:"學歷"},{no:"tel",name:"電話"}] 
                let selfD=[]
                cond.map(placement=>{
                    if(placement["no"] in res.data.data[0]){
                        let title=placement.name
                        selfD.push({"title":res.data.data[0][placement.no]})
                    }
                })
                this.setState({selfD:selfD})
            })
        )

    }

    render() {
        return (<Pages id={3}page={
            (<>
                <div className="people">
                    {
                        <Row className="justify-content-center align-items-center">

                            <Col sm={ 4 } className="name">
                                <Row className=" align-items-center">
                                    <Col ><img src={ this.state.resData?.photo ?? "" }></img></Col>
                                    <Col>{ this.state.resData?.name ?? "" }</Col>

                                </Row>
                            </Col>
                            <Col sm={ 6 } className="self">

                                <Row>
                                    {this.state.selfD&&this.state.selfD.map(placement=>{
                                        return(<>
                                        <p>{placement.title}</p>
                                        </>)
                                    })}
                                </Row>
                            </Col>
                            <Col sm={ 10 } className=""><p>經歷</p>
                                { this.state.resData?.experience }
                            </Col>
                            <Col sm={ 5 } ><p>政見績效評分</p>
                                <Chart options={ this.state.data.kpi.options } series={ this.state.data.kpi.series } type="donut" />

                            </Col>
                           
                            <Col sm={ 5 }>
                                政見
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
                            <Col sm={ 5 } ><p>出席率</p>
                                <Chart options={ this.state.data.kpi.options } series={ this.state.data.attendanceRate.series } type="donut" />

                            </Col>
                            <Col sm={ 5 } >提案
                        <Chart options={ this.state.data.persoal.option } series={ this.state.data.persoal.series } type="bar" />
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