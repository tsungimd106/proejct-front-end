import React from 'react';
import { Row, Col, Carousel } from "react-bootstrap"
import { Pages } from "../pages.js"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../../css/main.css"

class Home extends React.Component {
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
        return (<Pages page={
            (<>

                <div className="slider">
                    {this.state.imageData || false ? (<>
                        <AwesomeSlider
                            animation="foldOutAnimation"
                        >
                            {this.state.imageData.map(item => {
                                return (<div data-src={item} />)
                            })}
                        </AwesomeSlider>
                    </>) : (<></>)}


                </div>
                <div className="line"></div>

                { this.state.data || false ? (<>
                   <p className="GuessYouLike">猜你喜歡?</p> 
                    {this.state.data.map(placement => {
                        return (<div className="topicBox justify-content-center">
                            <h3 className="topicBoxBold">{placement.title}</h3>
                            <p>{placement.content}</p>
                            <h6 className ="topicBoxBold">
                                <Row>
                                    {placement.tag.map(item => (<Col sm={"auto"}>#{item}</Col>))}
                                </Row>
                            </h6>
                            <p><MultiColorProgressBar readings={placement.vote} /></p>
                        </div>)
                    })}
                </>) : (<></>)}
            </>)
        } />)
    }
}


class MultiColorProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const parent = this.props;
        const color = ["#eb4d4b", '#22a6b3', "#6ab04c"]

        let values = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            if (item > 0) {
                return (
                    <div className="value" style={{ 'color': color[i], 'width': item + '%' }} key={i}>
                        <span>{item}%</span>
                    </div>
                )
            }
        }, this);

        let calibrations = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            if (item > 0) {
                return (
                    <div className="graduation" style={{ 'color': color[i], 'width': item + '%' }} key={i}>
                        <span>|</span>
                    </div>
                )
            }
        }, this);

        let bars = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            if (item > 0) {
                return (
                    <div className="bar" style={{ 'backgroundColor': color[i], 'width': item + '%' }} key={i} />
                )
            }
        }, this);

        let legends = parent.readings && parent.readings.length && parent.readings.map(function (item, i) {
            if (item > 0) {
                return (
                    <div className="legend" key={i} />
                )
            }
        }, this);

        return (
            <div className="multicolor-bar">
                <div className="values">
                    {values == '' ? '' : values}
                </div>
                <div className="scale">
                    {calibrations == '' ? '' : calibrations}
                </div>
                <div className="bars">
                    {bars == '' ? '' : bars}
                </div>
                <div className="legends">
                    {legends == '' ? '' : legends}
                </div>
            </div>
        );
    }
}


export default Home = {
    routeProps: {
        path: "/",
        component: Home
    },
    name: "首頁"
}