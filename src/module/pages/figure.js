import React from 'react';
import { Row, Col, Carousel, Accordion, Card, InputGroup, FormControl, Button } from "react-bootstrap"
import { Pages } from "../pages.js"
import { PoliticianR } from "../request/politicianR"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import CAccordion from "../accordion"
import 'react-awesome-slider/dist/styles.css';
import "../../css/policy.css"

class Figure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [
                { name: "賴品妤", id: "534" }
            ],
            data: [{
                "name": "貓咪",
                "d": [{
                    "name": "第1屆",
                    "d": [
                        {
                            "name": "餅乾區",
                            "d": [
                                { "name": "常爾維斯" }
                            ]
                        }
                    ]
                }]
            }, {
                "name": "兔子",
                "d": [
                    {
                        "name": "第1屆",
                        "d": [
                            {
                                "name": "餅乾區",
                                "d": [
                                    { "name": "兔毛" }
                                ]
                            }
                        ]
                    }
                ]
            }],
            sndata: [
                { category: 'calculate', name: '王婉諭', value: 89519 },
                { category: 'calculate', name: '賴品妤', value: 49024 },
                { category: 'lavender', name: '蔡適應', value: 90170 },
                { category: 'lavender', name: '林昶佐', value: 56963 },
                { category: 'lavender', name: '莊瑞雄', value: 12343 },
                { category: 'lavender', name: '傅崐萁', value: 22673 },
                { category: 'lavender', name: '劉建國', value: 45723 },
            ],
            scdata: [
                { category: 'calculate', name: '財政金融', value: 89519 },
                { category: 'calculate', name: '教育', value: 49024 },
                { category: 'lavender', name: '內政', value: 90170 },
                { category: 'lavender', name: '司法及法制', value: 56963 },
                { category: 'lavender', name: '科技', value: 12343 },
                { category: 'lavender', name: '文化', value: 22673 },
                { category: 'lavender', name: '外交國防', value: 45723 },
            ],
            sadata: [
                { category: 'calculate', name: '台北市', value: 89519 },
                { category: 'calculate', name: '新北市', value: 49024 },
                { category: 'lavender', name: '基隆市', value: 90170 },
                { category: 'lavender', name: '桃園市', value: 56963 },
                { category: 'lavender', name: '新竹縣', value: 12343 },
                { category: 'lavender', name: '新竹市', value: 22673 },
                { category: 'lavender', name: '苗栗縣', value: 45723 },
            ]



        }
    }
    componentDidMount() {

        PoliticianR.list().then(response => {
            console.log(response)
        })
    }
    toDetail = (toName) => {
        document.location.href = `.#/figure/${toName}`
    }

    cut = (obj, n) => {
        console.log(obj)
        console.log("d" in obj)
        if ("d" in obj) {
            return (<div>

                {/* if {obj["name"] } */}
                <Accordion >
                    <Card>
                        <Accordion.Toggle as={ Card.Header } eventKey={ obj["name"] }>
                            { obj["name"] }
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={ obj["name"] }>
                            <Card.Body>{ obj["d"].map(placement => {
                                return this.cut(placement, obj["name"])
                            }) }</Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </div>)
        } else {
            return (<div>


                {
                    <Card>
                        政治人物{ obj["name"] }
                    </Card>
                }
            </div>)
        }
    }

    render() {
        return (<Pages page={
            (<>
                <div className="searchBar">
                    <Row>
                        <Col  className="selectTitle">屆別：
                            <select className="select" name="屆別">
                                <option value="" selected>當屆</option>
                                <option value="eco">1</option>
                                <option value="edu">2</option>
                                <option value="tec">3</option>
                                <option value="pol">4</option>
                                <option value="art">5</option>
                                <option value="gen">6</option>
                                <option value="ani">7</option>
                                <option value="wor">8</option>
                                <option value="tra">9</option>
                                <option value="old">10</option>
                                <option value="ind">11</option>
                            </select>
                        </Col>
                        <Col sm={10} className="selectTitle">提案進度：
                            <select className="select" name="提案進度">
                                <option value="" selected>1</option>
                                <option value="eco">2</option>
                                <option value="tec">3</option>
                                <option value="pol">4</option>
                                <option value="art">5</option>
                                <option value="gen">6</option>
                                <option value="ani">7</option>
                                <option value="wor">8</option>
                                <option value="tra">9</option>
                                <option value="old">10</option>
                                <option value="ind">11</option>
                            </select>
                        </Col>
                    </Row>
                    <Selector
                        data={this.state.sndata}
                        selectedTitle="姓名："
                        getSelected={values => alert(JSON.stringify(values))}
                    />
                    <Selector
                        data={this.state.scdata}
                        selectedTitle="分類："
                        getSelected={values => alert(JSON.stringify(values))}
                    />
                    <Selector
                        data={this.state.sadata}
                        selectedTitle="地區："
                        getSelected={values => alert(JSON.stringify(values))}
                    />
                    <div className="selectTitle">關鍵字搜尋：
                        <InputGroup className="mb-3">
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">確認</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <div className="searchBtn"><Button variant="dark">開始搜尋</Button>{' '}</div>
                    </div>
                </div>
                               <CAccordion ></CAccordion>

                {
                    this.state.data.map(placement => {
                        return this.cut(placement)
                    })
                }

                {this.state.item.map((placement, index) => {
                    return (<div>

                        <button onClick={ () => { this.toDetail(placement.id) } } >
                            <div >
                                { placement.name }
                            </div>
                            <div>50</div>
                        </button>


                    </div>)
                }) }



            </>)
        } />)
    }
}





export default Figure = {
    routeProps: {
        path: "/figure",
        component: Figure
    },
    name: "人物專區"
}