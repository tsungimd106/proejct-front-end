import React from 'react';
import { Row, Col, Carousel } from "react-bootstrap"
import { Pages } from "../pages.js"
import 'react-awesome-slider/dist/styles.css';
import "../../css/policy.css"

class Policy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { title: "政策標題", content: "我是內文", tag: ["金融", "國防"], date: "2020/11/22" },
                { title: "我是標題2", content: "我是內文2", tag: ["金融", "國防"], date: "2020/11/22" }
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
            (<>
                { this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (<div className="topicBox justify-content-center">
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
    name: "政策專區"
}