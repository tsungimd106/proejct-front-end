import React from 'react';
import { Row, Col, CardDeck, Card, DropdownButton, Dropdown, ToggleButtonGroup, ToggleButton } from "react-bootstrap"
import { Pages } from "../pages.js"
import { Card as CardUI, Button as BtnUI } from 'semantic-ui-react'
import Chart from 'react-apexcharts'
import style from "../../css/figureDetail.module.css"
import { PoliticianR } from "../request/politicianR"
import { trackPromise } from 'react-promise-tracker';
import { ScoreModal } from "../modal"

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
                    option: {
                        chart: {
                            toolbar: { show: false }, foreColor: "#fff"
                        },
                        tootip: {
                            style: { color: "#000" }
                        },


                        xaxis: {
                            categories: ["退回程序", "審查完畢", "交付審查", "排入院會", "三讀", "逕付二讀"],
                            colors: ['#586F7C', "#c6d8d3"],
                            style: { colors: ['#586F7C', "#c6d8d3"], }

                        },

                        fill: {
                            colors: ['#586F7C', "#c6d8d3"],
                            opacity: 1.0,
                        }, colors: ['#586F7C', "#c6d8d3"],

                    },
                    series: [{ name: "當屆", data: [20, 45, 64, 26, 27, 85,] }, { name: "歷屆平均", data: [44, 5, 6, 6, 27, 8,] }
                    ],

                    legend: {
                        show: false,
                    }
                }

            },
            go: [{ name: "該政治人物", data: [99, 98] }, { name: "立委總平均", data: [88, 85] }, { name: "該政治人總平均", data: [98.5, 98.5] }],
            score: [{ name: "該政治人物", data: [85, 90] }, { name: "立委總平均", data: [77, 85] }, { name: "該政治人總平均", data: [87.5, 87.5] }],
            scoreD: {
                chart: { toolbar: { show: false, }, foreColor: "#fff" },
                colors: ['#08B2E3', "#EE6352", "#EFE9F4"],

                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: '政見達成分數走勢:總平均80',
                    align: 'left',
                    style: { fontSize: "25px" }
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
                colors: ['#08B2E3', "#EE6352", "#EFE9F4"],
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: '出席率走勢圖:總平均:98.5',
                    align: 'left',

                },
                xaxis: {
                    categories: ['9', '10'],
                    title: {
                        text: '',
                    },
                },

            },
            selfD: [{ no: "degree", name: "學歷" }, { no: "tel", name: "電話" }],
            scoreShow: false,
            scoreRule: [
                { name: "完全落實", class: "outline-success", remark: "承諾的政見確實已完成" },
                { name: "部分落實", class: "outline-success", remark: "承諾的政見有部分完成" },
                { name: "進行中", class: "outline-warning", remark: "相關政策已有草案版本" },
                { name: "卡住", class: "outline-warning", remark: "政府提出草案已進入審議程序，但進度卡關（例如被立法院杯葛）" },
                { name: "開始動作", class: "outline-warning", remark: "政府相關部會已開始進行研究，但尚未有草案版本" },
                { name: "未有動作", class: "outline-danger", remark: "政府相關部會沒有任何動作" },
                { name: "政策破局", class: "outline-danger", remark: "明確違背原本承諾的政見" }

            ]


        }
    }
    componentDidMount() {
        this.figureID = this.props.match.params.id
        trackPromise(

            PoliticianR.detail(this.figureID).then(res => {
                console.log(res)
                this.setState({ "resData": res.data.data[0].data[0], "policy": res.data.data[1].data })
                console.log(res.data.data[1])
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
                    experience: res.data.data[0].data[0].experience.split("\n"),
                    areaReamrk: res.data.data[0].data[0].remark.replace("null", "")
                })

            })
        )
        window.scrollTo(0, 0)
        this.changeTerm("當屆")


    }

    changeTerm = (s) => {
        this.setState({ term: s })
    }
    scoreShow = (txt) => {
        if (this.state.scoreShow) {

        }
        console.log(txt)
        this.setState({ scoreShow: !this.state.scoreShow, scoreTitle: txt })
    }

    render() {
        return (<Pages id={ 3 } page={
            (<>
                <div className={ style.people }>
                    {


                        <Row className={ style.dashboard }>
                            <Col sm={ 3 } className={ style.dashboardcard + " " + style.white }>
                                <Row className={ style.line + " align-items-center" }>
                                    <Col>
                                        <img src={ this.state.resData?.photo } className={ style.figurePh }></img>
                                    </Col>
                                    <Col>
                                        <p>

                                            <DropdownButton id="dropdown-basic-button" title={ this.state.term && this.state.term }
                                                variant="outline-light"                                            >

                                                <Dropdown.Item onClick={ () => { this.changeTerm("當屆") } }>當屆</Dropdown.Item>
                                                <Dropdown.Item onClick={ () => { this.changeTerm("歷屆") } }>歷屆</Dropdown.Item>
                                                <Dropdown.Item onClick={ () => { this.changeTerm("9") } }>9</Dropdown.Item>

                                            </DropdownButton>
                                        </p>
                                        <p >{ this.state.selfD && this.state.name }</p>

                                        <p >{ this.state.selfD && this.state.area }</p>
                                        <p>{ this.state.selfD && this.state.areaReamrk }</p>
                                    </Col>
                                </Row>


                                { this.state.selfD && this.state.selfD.map(placement => {
                                    return (<>
                                        <Row>
                                            <Col sm="auto" >{ placement.name }</Col>
                                            <Col id={ placement.no } className={ style.line }></Col>
                                        </Row>
                                        {/* <div className={style.white}>{placement.title}</div> */ }
                                    </>)
                                }) }
                                <Row><Col sm={ "auto" }>經歷</Col>
                                    <Col>
                                        { this.state.experience && this.state.experience.map((item, index) => {
                                            return (<>

                                                <Card style={ { color: "#000", margin: "15px 0" } }>

                                                    <Card.Body>
                                                        <Card.Text >{ item }</Card.Text>
                                                    </Card.Body>

                                                </Card>
                                                {/* <div>{item}</div> */ }
                                            </>)
                                        }) }</Col>
                                </Row>
                            </Col>
                            <Col sm={ 6 }>
                                <Row className={ style.dashboardcard }>

                                    <Col className={ style.white }>
                                        <Chart options={ this.state.scoreD } series={ this.state.score } type="line" height={ 350 } />
                                    </Col>
                                </Row>
                                <Row className={ style.dashboardcard }>

                                    <Col className={ style.white }>
                                        <Chart options={ this.state.goO } series={ this.state.go } type="line" height={ 350 } />
                                    </Col>
                                </Row>
                                <Row className={ style.dashboardcard }>
                                    <Col className={ style.white }>
                                        提案數量統計
                                            <Chart options={ this.state.data.persoal.option } series={ this.state.data.persoal.series } type="bar" />
                                    </Col>

                                </Row>
                            </Col>
                            <Col sm={ 3 } className={ style.dashboardcard }>
                                <span className={ style.white }>政見</span>
                                <CardUI.Group>



                                    { this.state.policy && this.state.policy.map((placement, index) => {
                                        if (index == 0) return (<></>)
                                        else {
                                            return (<>
                                                <CardUI>
                                                    <CardUI.Content>
                                                        <CardUI.Header>{ placement.cateogry.map((item, index) => {
                                                            return (<>#{ item }</>)
                                                        }) }</CardUI.Header>

                                                        <CardUI.Description>
                                                            { placement.content }
                                                        </CardUI.Description>
                                                    </CardUI.Content>
                                                </CardUI>
                                                <div><CardDeck><Card>
                                                    <Card.Header>{ placement.cateogry.map((item, index) => {
                                                        return (<>#{ item }</>)
                                                    }) }</Card.Header>
                                                    <Card.Body onClick={ () => { this.scoreShow(placement.content) } }>
                                                        <Card.Text>{ placement.content }</Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>Read more</Card.Footer>
                                                </Card></CardDeck>
                                                    <hr /></div>
                                            </>)
                                        }
                                    }) } </CardUI.Group>

                            </Col>
                        </Row>







                    }</div>
                <ScoreModal show={ this.state.scoreShow } ok={ this.score } close={ () => { this.scoreShow("") } }
                    policy={ this.state.scoreTitle }
                    content={ (<>
                        <Row>
                            <Col sm={ 12 }>
                                您可依自己的判斷，針對每項政見承諾的落實程度，進行評分。
                            </Col>
                            <Col sm={ 2 }>
                                <ToggleButtonGroup vertical type="radio" name="options" >
                                    { this.state.scoreRule.map((item, index) => {
                                        return (<>
                                            <ToggleButton value={ index + 1 } variant={ item.class } style={ { width: "100px" } }>{ item.name }</ToggleButton>

                                        </>)
                                    }) }

                                </ToggleButtonGroup>
                            </Col>
                            <Col sm={ 10 }>
                                { this.state.scoreRule.map((item, index) => {
                                    return (<>

                                        <div>{ item.remark }</div>


                                    </>)
                                }) }
                            </Col>
                            { this.state.scoreRule.map((item, index) => {
                                return (<>
                                    <div className={ style.space }></div>
                                </>)
                            }) }


                        </Row>


                        { this.state.status && this.state.status.map((item, index) => {
                            return (<>
                                { }
                            </>)
                        }) }
                    </>) }
                />
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
