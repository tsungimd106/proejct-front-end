import React from 'react';
import { Pages } from "../pages.js"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import person from "../../imgs/person.png"
import f from "../../imgs/f.jpg"
import logo from "../../imgs/LOGO.jpg"
// import "../../css/main.css"
import { Card, Button, Grid, List, Image } from 'semantic-ui-react'
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
            {
                hot: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ],
            }
            ,
            politics:
            {
                hot: [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                ],
            }
            ,

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
                    {/* <div className={ style.slider_rank }>
                        <Swiper
                            spaceBetween={ 50 }
                            slidesPerView={ 3 }
                            navigation
                            pagination
                        >
                            { this.state.chart || false ? (
                                this.state.chart.map(placement => {
                                    return (
                                        <SwiperSlide>
                                           
                                            <Card className={ style.pimg } >
                                                <Card.Header>政治人物排行榜</Card.Header>
                                                <Card.Img variant="top" src={ placement.img } className={ style.pimg } />
                                                <Card.Body>
                                                    <Card.Title>{ placement.name }{ " " }{ placement.score }分</Card.Title>

                                               
                                                </Card.Body>
                                            </Card>
                                        </SwiperSlide>)
                                })
                            ) : (<></>) }

                        </Swiper>
                    </div> */}

                </div>

                {/* <div className={ style.title }>政治人物排行榜
                   <Grid> <Grid.Row>
                        { this.state.chart || false ? (<>
                            { this.state.chart.map(placement => {
                                return (
                                    <Grid.Column width={ "3" }>
                                        <Card className={ style.pimg } >
                                            <Card.Img variant="top" src={ placement.img } className={ style.pimg } />
                                            <Card.Body>
                                                <Card.Title>{ placement.name }</Card.Title>
                                                <Card.Text>
                                                    我的分數：{ placement.score }
                                                </Card.Text>
                                                <Button variant="primary">我的數據儀表板</Button>
                                            </Card.Body>
                                        </Card>
                                    </Grid.Column>)
                            }) }
                        </>) : (<></>) }
                   </Grid.Row></Grid>  
                </div> */}
                <Grid > <Grid.Row columns={ 2 }>
                    <Grid.Column>
                        <Card className={ style.table }>
                            <Card.Header as="h5" className={ style.newhot_title }><Book className={ style.tab } />最新提案</Card.Header>
                            <Card.Content className={ style.newhot }>
                                <List variant="flush">
                                    { this.state.proposal || false ? (<>
                                        { this.state.proposal.new.map(placement => {
                                            return (
                                                <List.Item>
                                                <Image avatar src={ person } />
                                                <List.Content  >
                                                    <List.Header>{ placement.name }</List.Header>
                                                    <List.Description>{ placement.title }</List.Description>
                                                </List.Content>
                                            </List.Item>
                                            )
                                        }) }
                                    </>) : (<></>) }
                                </List>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card className={ style.table }>
                            <Card.Header as="h5" className={ style.newhot_title }><Fire className={ style.fire + " " + style.tab } />最熱門提案</Card.Header>
                            <Card.Content className={ style.newhot }>
                                <List variant="flush">
                                    { this.state.proposal || false ? (<>
                                        { this.state.proposal.hot.map(placement => {
                                            return (
                                                <List.Item>
                                                    <Image avatar src={ person } />
                                                    <List.Content  >
                                                        <List.Header>{ placement.name }</List.Header>
                                                        <List.Description>{ placement.title }</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            )
                                        }) }
                                    </>) : (<></>) }
                                </List>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card className={ style.table }>
                            <Card.Header as="h5" className={ style.newhot_title }><Fire className={ style.fire + " " + style.tab } />最熱門留言</Card.Header>
                            <Card.Content className={ style.newhot }>
                                <List variant="flush">
                                    { this.state.message || false ? (<>
                                        { this.state.message.hot.map(placement => {
                                            return (
                                                
                                                <List.Item>
                                                    <Image avatar src={ person } />
                                                    <List.Content  >
                                                        <List.Header>{ placement.name }</List.Header>
                                                        <List.Description>{ placement.title }</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            )
                                        }) }
                                    </>) : (<></>) }
                                </List>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card className={ style.table }>
                            <Card.Header as="h5" className={ style.newhot_title }><Fire className={ style.fire + " " + style.tab } />最熱門政見</Card.Header>
                            <Card.Content className={ style.newhot }>
                                <List variant="flush">
                                    { this.state.politics || false ? (<>
                                        { this.state.politics.hot.map(placement => {
                                            return (
                                                <List.Item>
                                                    <Image avatar src={ person } />
                                                    <List.Content  >
                                                        <List.Header>{ placement.name }</List.Header>
                                                        <List.Description>{ placement.title }</List.Description>
                                                    </List.Content>
                                                </List.Item>
                                            )
                                        }) }
                                    </>) : (<></>) }
                                </List>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row></Grid>



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
