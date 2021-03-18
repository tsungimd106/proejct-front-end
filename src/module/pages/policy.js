import React from 'react';
import { Row, Col, Carousel, InputGroup, FormControl, Button } from "react-bootstrap"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import { Pages } from "../pages.js";
import Chart from 'react-apexcharts'
import 'react-awesome-slider/dist/styles.css';
import "../../css/policy.css"


class Policy extends React.Component {
    
    data = [

    ]
    constructor(props) {
        super(props)
        this.state = {
            kpi: {
                series: [10, 50 ,40],
                options: {
                    colors: ['#95c95d', '#e3e53a','#e52125'],                
                    labels: ["同意", "中立", "反對"],

                },
            },
            data: [
                
                {
                    title: "公民投票法部分條文修正草案", content: "兒童及少年扶養津貼條例草案總說明\
                一、依行政院經濟建設委員會所作人口推計的中推計，2018 年新生兒的出生數預估會減少至 17.5\
                萬人左右，與死亡數接近後邁入人口減少的時代，如果少子女化現象繼續下降，則人口開始\
                負成長時間會更早，影響未來我國的人口結構將更趨嚴重，亦將造成高齡社會的提前到來，\
                對於未來的勞動市場、經濟發展、社會福利體系及公共基礎設施的影響巨大，因此，對於願\
                意生兒育女者，因其生兒育女所帶來的公共利益，應協助並減輕父母的養育壓力，提供公共\
                支援。\
                二、參考先進國家的政策，提供兒童及少年津貼確能有效降低家庭育兒經濟的負擔，國內許多家庭\
                也曾透過不同管道表示，經濟條件是阻礙其生育的主要因素之一，我國至今在國家與家庭育\
                兒支出的比例分擔，比起工業先進國家如日本，仍然偏低甚多，而且政策給予願意承擔生育\
                養育子女責任家庭的公共支持，實為彰顯兒童為公共財的表徵，未來社會將受惠於其生育決\
                定帶來的公共利益。\
                三、許多政府為了解決逐年下降的生育率，以及因為人口結構改變可能造成的社會、經濟各層面的\
                衝擊，積極鼓勵生育，故參考德國以長期補助方式，建構全面普及性的兒童或家庭支持津貼\
                政策，發放津貼，配合胎次別給予不同金額。歐洲國家發放兒童津貼行之有年，從嬰兒出生\
                有發放至 12 歲，也有發放至 25 歲，如德國如為在學者可發放至 27 歲，金額隨家庭兒童數與\
                年齡有不同發放標準，從 2010 年起德國每位兒童約可領 184 歐元，家庭中第四個兒童可領\
                215 歐元。\
                四、台灣目前為世界上生育率最低之國家，最主要原因乃在於經濟壓力。為稍微紓解上述現象，乃\
                制定本條例，共計十五條：分別規定立法目的（第一條）、主管機關（第二條）、請領津貼\
                之資格條件（第三條）、委託辦理機關（第四條）、請領程序（第五條）、審核流程及期限\
                （第六條）、相關機關協助義務（第七條）、生效日期及發給期限與方式（第八條）、再行\
                、改定申請之程序（第九條）、溢領處置（第十條）、領取權利之保護（第十一條）、委辦\
                機關應辦事項（第十二條）、經費來源（第十三條）、授權事項（第十四條）、施行日期", tag: ["金融", "國防"], date: "2020/11/22"
                },
                { title: "兒童及少年扶養津貼條例草案", content: "我是內文2", tag: ["金融", "國防"], date: "2020/11/22" }
            ],
            imageData: [
                "https://i2.kknews.cc/SIG=v2a4sv/31pr00022o71o8p5p001.jpg",
                "https://onepage.nownews.com/sites/default/files/styles/crop_thematic_pc_banner_img/public/2020-06/FotoJet%20%2878%29.jpg?h=66dd2fea&itok=dJ1r-peX",
                "https://i2.kknews.cc/SIG=fduuh/31pq00046psp1o455n95.jpg",
                "https://i1.kknews.cc/SIG=rf6m48/31p9000467p4po554154.jpg"

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
    toContent = () => {
        document.location.href = `.#/policyContent/`
    }

    

    render() {
        return (<Pages id={2} page={
            (<>
                {/* <div className="selectLeft">
                    <select className="select" name="議題">
                        <option value="" selected>議題</option>
                        <option value="eco">金融經濟</option>
                        <option value="edu">教育</option>
                        <option value="tec">科技發展</option>
                        <option value="pol">政治</option>
                        <option value="art">藝術音樂</option>
                        <option value="gen">性別平等</option>
                        <option value="ani">動物保育</option>
                        <option value="wor">勞資關係</option>
                        <option value="tra">交通</option>
                        <option value="old">高齡化社會</option>
                        <option value="ind">在地文化</option>
                        <option value="pe">體育</option>
                        <option value="eve">能源轉型</option>
                    </select>
                    <select className="select" name="地區">
                        <option value="" selected>地區</option>
                        <option value="eco">台北市</option>
                        <option value="edu">新北市</option>
                        <option value="tec">基隆市</option>
                        <option value="pol">桃園市</option>
                        <option value="art">新竹縣</option>
                        <option value="gen">新竹市</option>
                        <option value="ani">苗栗縣</option>
                        <option value="wor">台中市</option>
                        <option value="tra">南投縣</option>
                        <option value="old">彰化縣</option>
                        <option value="ind">雲林縣</option>
                        <option value="pe">嘉義縣</option>
                        <option value="eve">嘉義市</option>
                        <option value="eve">高雄市</option>
                        <option value="eve">台南市</option>
                        <option value="eve">屏東縣</option>
                    </select>
                </div> */}
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
                        <Col sm={10} className="selectTitle">提案進度：
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
                        data={this.state.sndata}
                        selectedTitle="姓名："
                        getSelected={values => alert(JSON.stringify(values))}
                    />
                    <Selector
                        data={this.state.scdata}
                        selectedTitle="分類："
                        getSelected={values => alert(JSON.stringify(values))}
                    />

                </div>
                {this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (<div className="topicBox justify-content-center" onClick={() => { this.toContent(placement.id) }}>
                            <Row>
                                <Col>
                                    <h3 className="topicBoxBold ">{placement.title}</h3>
                                    <p className="topicBoxBold ">
                                        <Row>
                                            <Col sm={"auto"}>{placement.date}</Col>
                                            {placement.tag.map(item => (<Col sm={"auto"}>#{item}</Col>))}
                                        </Row>
                                    </p>
                                    <p className="ellipsis">{placement.content}</p>
                                </Col>
                                <Col sm={4} >
                                    <Chart options={ this.state.kpi.options } series={ this.state.kpi.series } type="donut" />
                                </Col>
                            </Row>

                        </div>)
                    })}
                </>) : (<></>)}
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