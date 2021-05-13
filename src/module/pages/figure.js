import React from 'react';
import {
    Row, Col, CardColumns, Card, InputGroup, FormControl, Button, CardGroup
} from "react-bootstrap"
import { Pages } from "../pages.js"
import { PoliticianR } from "../request/politicianR"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import style from "../../css/figure.module.css"
// import { CAccordion, Test } from "../accordion"
import { trackPromise } from 'react-promise-tracker'
import Search from "../bar/search"
import { AlignToTop } from "akar-icons"
class Figure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            like: {

            },
            listD: []
        }
    }
    componentDidMount() {

        trackPromise(
            PoliticianR.getList().then(response => {

                this.setState({ "data": response.data.data, resource: response.data.data })
            }))
        trackPromise(
            PoliticianR.cond().then(response => {
                let test = {}
                for (let i of response.data.data) {
                    let inside = {}
                    for (let j of i.data) {
                        inside[j.name] = false
                    }
                    test[i.name] = inside

                }
                this.setState({ "like": test })
            })
        )



    }

    getList = () => {
        let d = {}
        let term = []
        let area = []
        let name = []

        console.log(this.state.like)
        for (let key in this.state.like) {
            for (let v in this.state.like[key]) {
                if (this.state.like[key][v]) {
                    switch (key) {
                        case "屆別":
                            term.push(v)
                            break;
                        case "地區":
                            area.push(v)
                            break;
                        case "姓名":
                            name.push(v)
                    }
                }

            }

        }
        if (term.length > 0) {
            d["term"] = term
        }
        if (area.length > 0) {
            d["other"] = area
        }
        if (Array.isArray(this.state.resource)) {
            let newd = this.state.resource.filter(i => {

                let res = false
                let areab = false
                let termb = false
                let nameb = false

                if (area.length > 0) { area.forEach(item => { if (i["a_n"] == item) { areab = true; return; } }) }
                if (term.length > 0) {
                    term.forEach(item => { if (i["term"] == item) { termb = true; return; } })
                }
                if (name.length > 0) {
                    name.forEach(item => { if (i["name"] == item) { nameb = true; return; } })
                }
                areab = area.length > 0 ? areab : true
                termb = term.length > 0 ? termb : true
                nameb = name.length > 0 ? nameb : true

                return areab & termb & nameb
            })
            console.log(newd)

            this.setState({ "data": newd })

        }


    }

    toDetail = (toName) => {
        document.location.href = `.#/figure/${toName}`
    }
    onScroll = (e) => {
        let element = e.target
        console.log(element)
    }

    cut = (obj, n) => {
        var regPos = /^[0-9]+.?[0-9]*/; //判断是否是数字。

        if ("d" in obj) {
            return (<Col>
                <p>{obj["name"]}</p>
                {(!regPos.test(obj["name"]) ? <>
                    <p>test</p>
                    { obj["d"].map(placement => {
                        return this.cut(placement, obj["name"])
                    })}{
                        <p>ttt</p>
                    }
                </> : <Row>
                    <div></div>
                    {obj["d"].map(placement => {
                        return this.cut(placement, obj["name"])
                    })}</Row>
                )}



            </Col>)
        } else {
            return (<Col sm={3}>

                <Card onClick={() => { this.toDetail(obj["id"]) }} className={style.figureC}>

                    <Card.Body>

                        <Row noGutters={true} >
                            <Col>
                                {<Card.Text>
                                    <img src={obj["photo"]} className={style.figurePh}></img>
                                </Card.Text>}
                            </Col>
                            <Col> <p>{obj["name"]}</p> {obj["a_n"]}</Col>
                        </Row>

                    </Card.Body>

                </Card>

            </Col>)
        }
    }

    render() {
        return (<Pages id={3}
            onScroll={console.log("ii")}
            page={
                (<>
                    <div  >
                        <Search like={this.state.like} getList={this.getList} />
                        {/* <div className={ style.searchBtn }><Button variant="dark">開始搜尋</Button>{ ' ' }</div> */}

                    </div>
                    <Row>
                        {
                            this.state.data && this.state.data.map(placement => {
                                return this.cut(placement)
                            })
                        }
                    </Row>
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
