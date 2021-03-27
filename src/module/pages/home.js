import React from 'react';
import { Row, Col, Carousel, Card, Button, } from "react-bootstrap"
import { Pages } from "../pages.js"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
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
                <div className={style.width85}>政治人物排行榜
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <   Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div>最新排行榜</div>
                <div>最熱門排行榜</div>

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