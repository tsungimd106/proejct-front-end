import React from 'react';
import { Row, Col, Carousel, Accordion, Card } from "react-bootstrap"
import { Pages } from "../pages.js"
import { PoliticianR } from "../request/politicianR"
import CAccordion from "../accordion"
// import "../../css/policy.css"

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
            }]


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