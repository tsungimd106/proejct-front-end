import React from 'react';
import { Row, Col, Button } from "react-bootstrap"
import TestRequest from "../request/test"
import { ModalBase } from "../modal"
import logo_dark from '../../imgs/LOGO1.png'
import { Pages } from "../pages.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import"../../css/politician.css"
class Politician extends React.Component {
    render() {
        return (<Pages page={<>
            {
                <Row className="justify-content-center">
                    <Col sm={3}>
                        <Row className="ttt">
                            <Col sm={12}>這是貓</Col>
                            <Col sm={12}><img src="https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Farticle%2F201810%2Farticle-5bd182cf13ebb.jpg/?w=1600" alt="" /></Col>
                            
                            <Col >
                                <p>基本資料(大標)</p>
                                <div className="box">
                                    <p>學歷</p>
                                    <p>黨籍：時代力量</p>
                                    <p>屆別：第 10 屆</p>
                                    <p>性別：男</p>
                                    <p>選區：全國不分區及僑居國外國民</p>
                                    <p>委員會:</p>
                                    <p>第10屆第1會期：交通委員會
</p>
<p>第10屆第2會期：交通委員會</p>
<p>到職日期：109年2月1日</p>
<p>學歷:</p>
<p>德國海德堡大學法學博士候選人</p>
<p>德國海德堡大學法學碩士</p>
<p>臺北大學法學碩士</p>

<p>臺北大學法學士</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={7}>
                        
                        <p>KPI(大標)<a >{"50%    "}   (點數字會跳出計算過程)</a></p>
                        <p>經歷(大標)</p>
                        <p>經歷文字...可能會很多字所以我要測試他的寬度到底有多少，這樣一值讓字多起來他會換行嗎?看起來他會換優</p>
                        <p>政見(大標)</p>
                        <Row className="box pp">
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">居住正義 給年輕世代一個住得起的未來</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">親子正義 共創安心育兒環境,助爸媽一臂之力</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">經濟正義創新典範,營造公平的市場環境</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">金融正義打破金融幫,健全監理杜絕套利</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">主權正義強化民主防衛機制,遏止中共代理滲透</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">司法正義落實司法改革,提升人民信任感</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">勞動正義做勞工後盾,為各行各業爭取合理保障</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">環境正義結合制度科技,守護健康環境</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">動物正義 打造友善動物的進步社會</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">銀髮正義關心高齡化社會,安心照顧</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            <Col className="box"sm={3}>
                                <p>"#分類"</p>
                                <p className="e">世代正義為年輕世代找回夢想的權利</p>
                                <p>狀態</p>
                            <div className="read">read all</div>
                            </Col>
                            
                            
                            
                        </Row>

                    </Col>
                </Row>
            }

        </>} />)
    }
}

export default Politician={
    routeProps: {
        path: "/politician",
        component: Politician
    },
    name: "政治人物"
}