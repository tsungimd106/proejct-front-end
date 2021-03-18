import React from 'react';
import { Row, Col, Carousel, InputGroup, FormControl, Button } from "react-bootstrap"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import { Pages } from "../pages.js";
import 'react-awesome-slider/dist/styles.css';
import Chart from 'react-apexcharts'
import "../../css/policyContent.css"
import agree from "../../imgs/agree.png"
class PolicyContent extends React.Component {
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
                { title: "提案標題", content: "兒童及少年扶養津貼條例草案總說明\
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
                機關應辦事項（第十二條）、經費來源（第十三條）、授權事項（第十四條）、施行日期", tag: ["金融", "國防"], date: "2020/11/22" },
               
            ],
            imageData: [
                "https://i2.kknews.cc/SIG=v2a4sv/31pr00022o71o8p5p001.jpg",
                "https://onepage.nownews.com/sites/default/files/styles/crop_thematic_pc_banner_img/public/2020-06/FotoJet%20%2878%29.jpg?h=66dd2fea&itok=dJ1r-peX",
                "https://i2.kknews.cc/SIG=fduuh/31pq00046psp1o455n95.jpg",
                "https://i1.kknews.cc/SIG=rf6m48/31p9000467p4po554154.jpg"

            ]

        }
    }

    render() {
        return (<Pages id={2} page={
            (<>{ }
                {this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (<div className="topic justify-content-center">
                            <h2 className="topicBold">{ placement.title }</h2>
                            <p >
                                <Row>
                                    <Col sm={ "auto" } className="lable" >{ placement.date }</Col>
                                    { placement.tag.map(item => (<Col sm={ "auto" } className="lable">#{item }</Col>)) }
                                    <Col sm={ 12 }>
                                        <div className="content">{ placement.content }</div>
                                    </Col>
                                    <Col sm={ 12 }>
                                        <div className="lable">您的看法！</div>
                                        <Row>
                                            <Col ><img src={agree} alt=""/></Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Col>
                                  
                                    <Col sm={ 12 }>
                                        <div className="lable">RUN民看法！</div>
                                        <Chart options={ this.state.kpi.options } series={ this.state.kpi.series } type="donut" />

                                    </Col>
                                    <Col sm={ 12 }>
                                        <div className="mes">
                                            <div className="mesTitle">RUN民討論專區</div>
                                        </div>
                                    </Col>
                                </Row>
                            </p>

                        </div>)
                    }) }
                </>) : (<></>) }
            </>)
        } />)
    }
}





export default PolicyContent = {
    routeProps: {
        path: "/PolicyContent",
        component: PolicyContent
    },
    name: "提案內容"
}