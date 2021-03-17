import React from 'react';
import { Row, Col, Carousel, InputGroup, FormControl, Button } from "react-bootstrap"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import { Pages } from "../pages.js";
import 'react-awesome-slider/dist/styles.css';
import "../../css/policyContent.css"

class PolicyContent extends React.Component {
    data = [

    ]
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { title: "提案標題", content: "我是內文", tag: ["金融", "國防"], date: "2020/11/22" },
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
        return (<Pages page={
            (<>{ }
                {this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (<div className="topic justify-content-center">
                            <h2 className="topicBold">{placement.title}</h2>
                            <p >
                                <Row>
                                    <Col sm={"auto"} className="lable" >{placement.date}</Col>
                                    {placement.tag.map(item => (<Col sm={"auto"} className="lable">#{item}</Col>))}
                                    <Col sm={12}><div className="content">{placement.content}</div></Col>
                                    <Col sm={12}><div className="lable">您的看法！</div></Col>
                                    <Col sm={12}><div className="lable">民眾看法！</div></Col>
                                    <Col sm={12}><div className="lable">RUN民看法！</div></Col>
                                    <Col sm={12}>
                                        <div className="mes">
                                            <div className="mesTitle">RUN民討論專區</div>
                                        </div>
                                    </Col>
                                </Row>
                            </p>

                        </div>)
                    })}
                </>) : (<></>)}
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