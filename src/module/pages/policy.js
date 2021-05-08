import React from 'react';
import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import { Pages } from "../pages.js";
import Chart from 'react-apexcharts'
import 'react-awesome-slider/dist/styles.css';
import style from "../../css/policy.module.css"
import { ProposalR } from "../request/proposalR"


class Policy extends React.Component {

    data = [

    ]


    constructor(props) {
        super(props)
        ProposalR.list().then(response => {
            console.log(response)
            this.setState({ Sdata: response.data.data })

        })

        this.state = {
            kpi: {
                series: [10, 50, 40],
                options: {
                    colors: ['#95c95d', '#e3e53a', '#e52125'],
                    labels: ["同意", "中立", "反對"],
                    title: {
                        text: 'Run民立場投票',
                        align: 'left',

                    },

                },
            },
            data: [
                { title: "公民投票法部分條文修正草案", tag: ["國民", "立法"], date: "2020/11/22" },

            ],

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
            ]

        }
    }
    toContent = (id) => {
        document.location.href = `.#/policyContent/${id}`
    }
    componentDidMount() {
        this.setState({ condData: [{ n: "進度", d: ["完全落實", "部分落實", "進行中"] }] })
    }
    test = () => {
        fetch("http://localhost:5000/politician/list?name='abc','name'&name=[ab,dd]", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            },

        }).then(res => res.json()).then(r => { console.log(r) })
    }


    render() {
        return (<Pages id={ 2 } page={
            (<>

                <div className="searchBar">
                    <div className="selectTitle">
                        <InputGroup className="mb-3">
                            <Col md="auto" className="search" >關鍵字搜尋：</Col>
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">搜尋</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                    <Row>
                        <Col className="selectTitle">屆別：
                            <select className="select" name="屆別">
                                <option value="" selected>當屆</option>
                                <option value="eco">11</option>
                                <option value="edu">10</option>
                                <option value="tec">9</option>
                                <option value="pol">8</option>
                                <option value="art">7</option>
                                <option value="gen">6</option>
                                <option value="ani">5</option>
                                <option value="wor">4</option>
                                <option value="tra">3</option>
                                <option value="old">2</option>
                                <option value="ind">1</option>
                            </select>
                        </Col>
                        <Col sm={ 10 } className="selectTitle">提案進度：
                            <select className="select" name="提案進度">
                                <option value="" selected>不限</option>
                                <option value="eco">退回程序</option>
                                <option value="eco">審查完畢</option>
                                <option value="tec">交付審查</option>
                                <option value="pol">排入院會</option>
                                <option value="art">三讀</option>
                                <option value="gen">逕付二讀</option>
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

                </div>
                {/* <button onClick={ this.test }>click me</button> */ }
                {this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (<div className={ style.topicBox + " justify-content-center" } onClick={ () => { this.toContent(placement.id) } }>
                            <Row>
                                <Col>
                                    <h3 className={ style.topicBoxBold }>{ placement.title }</h3>
                                    <p className={ style.topicBoxBold }>
                                        <Row>
                                            <Col sm={ "auto" }>{ placement.date }</Col>
                                            { placement.tag.map(item => (<Col sm={ "auto" }>#{item }</Col>)) }
                                            <Col>排入院會</Col>
                                        </Row>
                                    </p>
                                </Col>
                                <Col sm={ 4 } >
                                    <Chart options={ this.state.kpi.options } series={ this.state.kpi.series } type="donut" />
                                </Col>
                            </Row>

                        </div>)
                    }) }
                </>) : (<></>) }
                <hr />
                {this.state.Sdata && this.state.Sdata.map((placement, index) => {
                    return (<div className={ style.topicBox + " justify-content-center" } onClick={ () => { this.toContent(placement.id) } }>
                        <Row className={ style.topicBoxBold}>
                            <Col >
                                <p className={ style.ellipsis }>{ placement.title }</p>
                                <p >
                                    {/* <Row>
                                        <Col sm={ "auto" }>{ placement.date }</Col>
                                        { placement.tag.map(item => (<Col sm={ "auto" }>#{item }</Col>)) }
                                    </Row> */}
                                </p>
                                {/* <p className="ellipsis">{ placement.content }</p> */ }
                            </Col>
                            {/* <Col sm={ 4 } >
                                <Chart options={ this.state.kpi.options } series={ this.state.kpi.series } type="donut" />
                            </Col> */}
                            <Col>{placement.status}</Col>
                        </Row>

                    </div>)
                }) }
            </>)
        } />)
    }
}





export default Policy = {
    routeProps: {
        path: "/Policy",
        component: Policy
    },
    name: "提案專區"
}