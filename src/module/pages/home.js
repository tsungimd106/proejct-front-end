import React from 'react';
import { Row, Col, Carousel, Card, Button, ListGroup, } from "react-bootstrap"
import { Pages } from "../pages.js"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import person from "../../imgs/person.png"

// import "../../css/main.css"
import style from "../../css/main.module.css"


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            imageData: [
                "https://i2.kknews.cc/SIG=v2a4sv/31pr00022o71o8p5p001.jpg",
                "https://onepage.nownews.com/sites/default/files/styles/crop_thematic_pc_banner_img/public/2020-06/FotoJet%20%2878%29.jpg?h=66dd2fea&itok=dJ1r-peX",
                "https://i2.kknews.cc/SIG=fduuh/31pq00046psp1o455n95.jpg",
                "https://i1.kknews.cc/SIG=rf6m48/31p9000467p4po554154.jpg"

            ],
            chart: [
                { name: '王婉諭', score: 72, },
                { name: '賴品妤', score: 98 },
                { name: '蔡適應', score: 52 },
                { name: '林昶佐', score: 66 },
            ],
            proposal:
            {
                hot: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ],
                new: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ]
            }
            ,
            message:
            {
                hot: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ],
                new: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ]
            }
            ,
            politics:
            {
                hot: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ],
                new: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ]
            }
            ,

        }
    }


    render() {
        return (<Pages id={0} page={
            (<>
                <div className={style.width85}>
                    <Row>
                        <Col sm={"8"} className={style.slider_item}>
                            {this.state.imageData || false ? (<>
                                <AwesomeSlider animation="foldOutAnimation">
                                    {this.state.imageData.map(item => {
                                        return (<div data-src={item} />)
                                    })}
                                </AwesomeSlider>
                            </>) : (<></>)}
                        </Col>

                        <Col className={style.slider_item}>
                            {this.state.imageData || false ? (<>
                                <AwesomeSlider animation="foldOutAnimation">
                                    {this.state.imageData.map(item => {
                                        return (<div data-src={item} />)
                                    })}
                                </AwesomeSlider>
                            </>) : (<></>)}
                        </Col>

                    </Row>
                </div>

                <div className={style.title}>政治人物排行榜
                    <Row>
                        {this.state.chart || false ? (<>
                            {this.state.chart.map(placement => {
                                return (
                                    <Col sm={"3"}>
                                        <Card className={style.pimg} >
                                            <Card.Img variant="top" src={person} className={style.pimg} />
                                            <Card.Body>
                                                <Card.Title>{placement.name}</Card.Title>
                                                <Card.Text>
                                                    我的分數：{placement.score}
                                                </Card.Text>
                                                <Button variant="primary">我的數據儀表板</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>)
                            })}
                        </>) : (<></>)}
                    </Row>
                </div>
                <Row className={style.width85}>
                    <Col>
                        <Card>
                            <Card.Body>最新提案：
                                <ListGroup variant="flush">
                                    {this.state.proposal || false ? (<>
                                        {this.state.proposal.new.map(placement => {
                                            return (
                                                <ListGroup.Item>
                                                    <Row className="align-items-center" noGutters={true}>
                                                        <Col sm={3}>
                                                            <Row className="justify-content-center">
                                                                <Col sm={7}><img src={person} className="" /></Col>
                                                                <Col sm={12}><div className={style.msg_name}>{placement.name}</div></Col>
                                                            </Row>

                                                        </Col>
                                                        <Col sm={8}>{placement.title}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </>) : (<></>)}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Body>最熱門提案：
                                <ListGroup variant="flush">
                                    {this.state.proposal || false ? (<>
                                        {this.state.proposal.hot.map(placement => {
                                            return (
                                                <ListGroup.Item>
                                                    <Row className="align-items-center" noGutters={true}>
                                                        <Col sm={3}>
                                                            <Row className="justify-content-center">
                                                                <Col sm={7}><img src={person} className="" /></Col>
                                                                <Col sm={12}><div className={style.msg_name}>{placement.name}</div></Col>
                                                            </Row>

                                                        </Col>
                                                        <Col sm={8}>{placement.title}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </>) : (<></>)}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


                <Row className={style.width85}>
                    <Col>
                        <Card>
                            <Card.Body>最新留言：
                                <ListGroup variant="flush">
                                    {this.state.message || false ? (<>
                                        {this.state.message.new.map(placement => {
                                            return (
                                                <ListGroup.Item>
                                                    <Row className="align-items-center" noGutters={true}>
                                                        <Col sm={3}>
                                                            <Row className="justify-content-center">
                                                                <Col sm={7}><img src={person} className="" /></Col>
                                                                <Col sm={12}><div className={style.msg_name}>{placement.name}</div></Col>
                                                            </Row>

                                                        </Col>
                                                        <Col sm={8}>{placement.title}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </>) : (<></>)}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Body>最熱門留言：
                                <ListGroup variant="flush">
                                    {this.state.message || false ? (<>
                                        {this.state.message.hot.map(placement => {
                                            return (
                                                <ListGroup.Item>
                                                    <Row className="align-items-center" noGutters={true}>
                                                        <Col sm={3}>
                                                            <Row className="justify-content-center">
                                                                <Col sm={7}><img src={person} className="" /></Col>
                                                                <Col sm={12}><div className={style.msg_name}>{placement.name}</div></Col>
                                                            </Row>

                                                        </Col>
                                                        <Col sm={8}>{placement.title}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </>) : (<></>)}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className={style.width85}>
                    <Col>
                        <Card>
                            <Card.Body>最新政見：
                                <ListGroup variant="flush">
                                    {this.state.politics || false ? (<>
                                        {this.state.politics.new.map(placement => {
                                            return (
                                                <ListGroup.Item>
                                                    <Row className="align-items-center" noGutters={true}>
                                                        <Col sm={3}>
                                                            <Row className="justify-content-center">
                                                                <Col sm={7}><img src={person} className="" /></Col>
                                                                <Col sm={12}><div className={style.msg_name}>{placement.name}</div></Col>
                                                            </Row>

                                                        </Col>
                                                        <Col sm={8}>{placement.title}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </>) : (<></>)}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Body>最熱門政見：
                                <ListGroup variant="flush">
                                    {this.state.politics || false ? (<>
                                        {this.state.politics.hot.map(placement => {
                                            return (
                                                <ListGroup.Item>
                                                    <Row className="align-items-center" noGutters={true}>
                                                        <Col sm={3}>
                                                            <Row className="justify-content-center">
                                                                <Col sm={7}><img src={person} className="" /></Col>
                                                                <Col sm={12}><div className={style.msg_name}>{placement.name}</div></Col>
                                                            </Row>

                                                        </Col>
                                                        <Col sm={8}>{placement.title}</Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )
                                        })}
                                    </>) : (<></>)}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </>)
        } />)
    }
}





export default Home = {
    routeProps: {
        path: "/",
        component: Home
    },
    name: "首頁"
}