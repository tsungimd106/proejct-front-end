import React from 'react';
import { Row, Col, Carousel, InputGroup, FormControl, Button } from "react-bootstrap"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import { Pages } from "../pages.js";
import 'react-awesome-slider/dist/styles.css';
import "../../css/policy.css"

class Policy extends React.Component {
    data = [

    ]
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { title: "提案標題", content: "我是內文", tag: ["金融", "國防"], date: "2020/11/22" },
                { title: "提案標題2", content: "我是內文2", tag: ["金融", "國防"], date: "2020/11/22" }
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
        return (<Pages page={
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
                {this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (<div className="topicBox justify-content-center" onClick={ () => { this.toContent(placement.id) } }>
                            <h3 className="topicBoxBold">{placement.title}</h3>
                            <h6 className="topicBoxBold">
                                <Row>
                                    <Col sm={"auto"}>{placement.date}</Col>
                                    {placement.tag.map(item => (<Col sm={"auto"}>#{item}</Col>))}
                                </Row>
                            </h6>
                            <h3>{placement.content}</h3>

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