import React from 'react';
import { Navbar, Nav, Row, Col, Jumbotron, Button } from "react-bootstrap"
import { Pages } from "../pages.js"
import AwesomeSlider from 'react-awesome-slider';
import MultiColorProgressBar from "../bar/mutiProcessBar"
import 'react-awesome-slider/dist/styles.css';
// import "../../css/main.css"
import style from "../../css/election.module.css"



class Election extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { title: "我是標題", content: "我是內文", tag: ["金融", "國防"], vote: [43, 53, 4] },
                { title: "我是標題2", content: "我是內文2", tag: ["金融", "國防"], vote: [35, 35, 30] }
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
        return (<Pages id={1} page={
            (<>

                <Navbar bg="light" variant="light">
                    <Nav className={style.nav}>
                        <a href="#vote-point"><Nav.Link disabled>投票要點</Nav.Link></a>
                        <a href="#qa"><Nav.Link disabled>QA大集合</Nav.Link></a>
                        <a href="#vote-place"><Nav.Link disabled>查詢投票地點</Nav.Link></a>
                        <a href="#history"><Nav.Link disabled>選舉大記事</Nav.Link></a>
                    </Nav>
                </Navbar>

                <Row className={style.Row}>
                    <Col sm={3}><img ></img></Col>
                    <Col>
                        <Jumbotron>
                            <h1>選舉公告</h1>
                            <p>
                                這裡是和選舉相關資訊的公告區
                            </p>
                            <p>
                                <Button variant="primary">看更多</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>

                <Row className={style.Row}>
                    <Col><Button variant="secondary" size="lg" disabled>投票要點</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbotron>
                                <h1>投票要點</h1>
                                <p>
                                    這裡是和投票要點,包含投票流程,投票必備品,相關影片和指南手冊
                                </p>
                            </Jumbotron>
                    </Col>
                </Row>

                <Row className={style.Row}>
                    <Col><Button variant="secondary" size="lg" disabled>QA大集合</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbotron>
                                <h1>QA大集合</h1>
                                <p>
                                    這裡是QA大集合,常見問題都在這~
                                </p>
                            </Jumbotron>
                    </Col>
                </Row>

                <Row className={style.Row}>
                    <Col><Button variant="secondary" size="lg" disabled>查詢投票地點</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbotron>
                                <h1>查詢投票地點</h1>
                                <p>
                                    在這裡查詢自己的投票地點~
                                </p>
                            </Jumbotron>
                    </Col>
                </Row>

                <Row className={style.Row}>
                    <Col><Button variant="secondary" size="lg" disabled>選舉大記事</Button></Col>
                </Row>
                <Row>
                    <Col>
                        <Jumbotron>
                                <h1>選舉大記事</h1>
                                <p>
                                    這裡是選舉大記事,記錄著台灣選舉開始以來發生的大事件。
                                </p>
                            </Jumbotron>
                    </Col>
                </Row>

            </>)
        } />)
    }
}





export default Election = {
    routeProps: {
        path: "/election",
        component: Election
    },
    name: "選舉專區"
}