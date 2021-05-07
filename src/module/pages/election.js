import React from 'react';
import { Row, Col, Carousel } from "react-bootstrap"
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

               
                <div className={style.white}>
                    <div><h1>查詢投票地點</h1></div>
                    <div><h1>投票要點</h1></div>
                    <div><h1>QA大集合</h1></div>
                    <div><h1>選舉大記事</h1></div>
                </div>

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