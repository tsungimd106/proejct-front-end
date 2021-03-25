import React from 'react';
import {
    Row, Col, CardColumns, Card, InputGroup, FormControl, Button, CardGroup
} from "react-bootstrap"
import { Pages } from "../pages.js"
import { PoliticianR } from "../request/politicianR"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import "../../css/policy.css"
// import { CAccordion, Test } from "../accordion"
import { trackPromise } from 'react-promise-tracker'
import Search from "../bar/search"
class Figure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
            ], like: {
                "種類一": { "灰色": false, "白色": false, "綠色": false, "紅色": false, "淺灰色": false, "淺白色": false, "深灰色": false, "深白色": false, "輝灰色": false, "聖光我要湊字數白色": false, "繼續需要湊字數所以貓咪出來了": false },
                "種類二": { "白色": false }

            },




            listD: []
        }
    }
    componentDidMount() {
        // var myHeaders = new Headers({
        //     "Content-Type": "text/plain",
        //     "Access-Control-Allow-Origin": '*'
        // });

        // var myInit = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     // mode: 'cors',
        // };
        // fetch("http://localhost:8088/get",
        //     myInit
        // ).then(function (response) {
        //     return response.json();
        // })
        //     .then(function (myJson) {
        //         console.log(myJson);
        //     }).catch(function (error) {
        //         console.log('There has been a problem with your fetch operation: ', error.message);
        //     });;


        // trackPromise(
        PoliticianR.list().then(response => {
            this.setState({ "data": response.data })
        })
        PoliticianR.area().then(response => {
            let d = this.state.like
            let dd={}
            for (let j of response.data.data) {
                dd[j.other]=false
            }
            d["地區"] =dd
            this.setState({ area: response.data })
            console.log(response)
        })

        // )




        // PoliticianR.getList().then(response => {
        //     this.setState({ "listD": response.data.data })
        //     console.log(response.data.data)
        //     // console.log(response)
        // })

    }
    loading = () => {

    }
    toDetail = (toName) => {
        document.location.href = `.#/figure/${toName}`
    }

    cut = (obj, n) => {
        var regPos = /^[0-9]+.?[0-9]*/; //判断是否是数字。

        if ("d" in obj) {
            return (<div>
                <p>{ obj["name"] }</p>
                {(!regPos.test(obj["name"]) ? <>
                    { obj["d"].map(placement => {
                        return this.cut(placement, obj["name"])
                    }) }
                </> : <CardGroup>
                    { obj["d"].map(placement => {
                        return this.cut(placement, obj["name"])
                    }) }
                </CardGroup>) }


                {/* if {obj["name"] } */ }
                {/* <Accordion >
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

                </Accordion> */}
            </div>)
        } else {
            return (<Col sm={ 3 }>

                <Card border="light" onClick={ () => { this.toDetail(obj["id"]) } }>
                    <Card.Header>{ }</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Row>
                            <Col>
                                <Card.Text>
                                    <img src={ obj["photo"] } className={ "figurePh" }></img>
                                </Card.Text>
                            </Col>
                            <Col> <p>{ obj["name"] }</p> { obj["area"] }</Col>
                        </Row>

                    </Card.Body>

                </Card>

            </Col>)
        }
    }

    render() {
        return (<Pages id={ 3 } page={
            (<>


                <div className="searchBar">
                    <Search like={ this.state.like } />
                    <hr></hr>
                    <Row>
                        <Col className="selectTitle">屆別：
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
                        <Col sm={ 10 } className="selectTitle">提案進度：
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
                        data={ this.state.sndata }
                        selectedTitle="姓名："
                        getSelected={ values => alert(JSON.stringify(values)) }
                    />
                    <Selector
                        data={ this.state.scdata }
                        selectedTitle="分類："
                        getSelected={ values => alert(JSON.stringify(values)) }
                    />
                    <Selector
                        data={ this.state.sadata }
                        selectedTitle="地區："
                        getSelected={ values => alert(JSON.stringify(values)) }
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
                        <div className="searchBtn"><Button variant="dark">開始搜尋</Button>{ ' ' }</div>
                    </div>
                </div>


                {
                    this.state.data && this.state.data.map(placement => {

                        return this.cut(placement)
                    })
                }


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
