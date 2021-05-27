import React from 'react';
import { Pages } from "../pages.js"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import person from "../../imgs/person.png"
import f from "../../imgs/f.jpg"
import back from "../../imgs/back.jpg"
import logo from "../../imgs/LOGO.jpg"
// import "../../css/main.css"
import { Card, Button, Grid, List, Image, Header, Segment, Table, Label } from 'semantic-ui-react'
import { Fire, Book } from 'akar-icons';
import style from "../../css/main.module.css"

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            imageData: [
                f,
                f, f
            ],
            chart: [
                { name: '政要RUN', score: 100, img: person },
                { name: '賴品妤', score: 98, img: "http://www.ly.gov.tw//Images/Legislators/100102.jpg" },
                { name: '蔡適應', score: 52, img: "http://www.ly.gov.tw//Images/Legislators/100093.jpg" },
                { name: '林昶佐', score: 66, img: "http://www.ly.gov.tw//Images/Legislators/100029.jpg" },
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
           [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                    { name: '賴品妤', title: 34 },
           ]
            ,
            politics:
            {
                hot: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ],
            },
            rank: [
                { name: '政要RUN', score: 100 },
                { name: '王婉諭', score: 77 },
                { name: '劉建國', score: 55 },
                { name: '郭家瑜', score: 44 },
                { name: '賴品妤', score: 34 },
            ]

        }
    }


    render() {
        return (<Pages id={ 0 } page={
            (<>
                <div >
                    <div className={ style.slider_item }>
                        <Swiper
                            spaceBetween={ 50 }
                            slidesPerView={ 1 }
                            navigation
                            pagination={ { clickable: true } }
                        >
                            { this.state.imageData.map(item => {
                                return (<SwiperSlide  ><center><img src={ item } alt="" /></center></SwiperSlide>)
                            }) }
                        </Swiper>
                    </div>
                    <div>
                        <Card.Group itemsPerRow={ 3 }>
                            { this.state.rank.map((item, index) => {
                                if (index < 3) {
                                    return (<>
                                        <Card  >
                                            <Card.Header textAlign={ "center" }>
                                                <Image src={ person } circular centered size={ "small" } />
                                                <Header>{ item.name }</Header>
                                            </Card.Header>


                                            <Card.Content>

                                                { item.score }分
                                            </Card.Content>
                                        </Card>
                                    </>)
                                }
                            }) }


                        </Card.Group>
                        <Card.Group itemsPerRow={ 1 }>
                            { this.state.rank.map((item, index) => {
                                if (index >= 3) {
                                    return (<>
                                        <Card centered >
                                            <List horizontal relaxed verticalAlign={ "middle" } >
                                                <List.Item>

                                                </List.Item>
                                                <List.Item>
                                                    { item.name }
                                                </List.Item>
                                                <List.Item>
                                                    <Image src={ person } size={ "mini" } circular />
                                                </List.Item>
                                                <List.Item>  { item.score }分</List.Item>
                                            </List>

                                        </Card></>)
                                }
                            }) }
                        </Card.Group>
                    </div>


                </div>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={ 6 }><Segment>
                            <Image size={ "large" } src={back}/>
                        </Segment></Grid.Column>
                        <Grid.Column width={ 10 }>
                            <Header>最熱門留言</Header>
                            <Table padded >
                                <Table.Body>
                                    { this.state.message.map(item => {
                                        return (<>
                                            <Table.Row >
                                                <Table.Cell><Image src={ person } size={ "mini" } />
                                                </Table.Cell>
                                                <Table.Cell>{item.name}</Table.Cell>
                                                <Table.Cell>{item.title}</Table.Cell>
                                            </Table.Row>
                                        </>)
                                    }) }                                 
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>




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
