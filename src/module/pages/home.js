import React from 'react';
import { Pages } from "../pages.js"
import person from "../../imgs/person.png"
import r from "../../imgs/r.jpg"
import { Card, Grid, List, Image, Header, Segment, Table, Icon, Tab } from 'semantic-ui-react'
import style from "../../css/main.module.css"

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            imageData: [
                r,
                r, r
            ],
            chart: [
                { name: '政要RUN', score: 100, img: person },
                { name: '賴品妤', score: 98, img: "http://www.ly.gov.tw//Images/Legislators/100102.jpg" },
                { name: '蔡適應', score: 52, img: "http://www.ly.gov.tw//Images/Legislators/100093.jpg" },


            ],


            message:
                [
                    { name: ' Eric', title: "一萬七千多位建教生可能因為沒有實習津貼影響生計！請教育部的紓困方案別忘了照顧建教合作生！", score: 88, img: "../../imgs/首頁/林奕華.jpg" },
                    { name: '耀耀', title: "謝謝警察在這段艱辛的日子，守護人民安全、對抗疫情，您們辛苦了！", score: 63 },
                    { name: 'Sherry', title: "3+11機組員防疫漏洞  加強版可亡羊補牢？", score: 44 },
                    { name: '小青', title: "各國推進 #疫苗護照，台灣何時跟上世界？", score: 33 },
                    { name: '陳威琦', title: "傳日本將再贈疫苗給台灣，蔡政府應誠實面對疫苗困境，積極爭取協助", score: 32 },
                ]
            ,
            politics:
                [
                    { name: '高嘉瑜', title: "將持續推動廣設公幼，達到公幼公託免抽籤，以津貼、減稅及推動父母親產後共享育嬰假，實踐「0到6歲國家顧」", score: 73, photo: "http://www.ly.gov.tw//Images/Legislators/100048.jpg" },
                    { name: '陳柏惟', title: "經濟有希望，國防能源產業變MIT，由政府投資帶動技術升級", score: 53, photo: "http://www.ly.gov.tw//Images/Legislators/100063.jpg" },
                    { name: '劉世芳 ', title: "整合左訓中心、世運主埸館、楠梓文中足球場各級學校成為培育體育人才及發展運動產業的國家體育園區", score: 32, photo: "http://www.ly.gov.tw//Images/Legislators/100088.jpg" },
                    { name: "孔文吉", title: "推動原住民族基本權利入法，使原住民享有政治、經濟、教育、文化、狩獵、土地、醫療、傳播及社會福利之完整權益。", score: 31, photo: "http://www.ly.gov.tw//Images/Legislators/100001.jpg" },
                    { name: "高虹安", title: "修改民法，降低成年門檻至18歲，賦予青年更大的政治參與權", score: 21, photo: "http://www.ly.gov.tw//Images/Legislators/100047.jpg" }
                ]
            ,
            proposal:
                [
                    { name: ['王婉諭'], title: "公民投票法部分條文修正草案", score: 85 },
                    { name: ['劉建國'], title: "太空發展法訂定草案", score: 68 },
                    { name: ['郭家瑜 '], title: "新住民孩童教育制定草案", score: 55 },
                    { name: ["陳歐珀"], title: "動物保護法第二十三條及第二十九條條文修正草案", score: 31 },
                    { name: ["呂玉玲"], title: "教師待遇條例第十七條條文修正草案", score: 21 }
                ]
            ,
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
                    <div className={ style.sort }>
                        <Header textAlign={ "center" } as={ "h1" }>人物排行榜

                        </Header>
                        <Segment basic textAlign={ "center" }>  <div>你知道哪一位政治人物提出政見後，有「說到做到」嗎?</div>
                            <div>這裡可以一網打盡!</div>
                            <div>透過政見執行率的評分找出前五名，讓我們一起來看看吧!</div></Segment>
                        <Card.Group itemsPerRow={ 3 }>
                            { this.state.chart.map((item, index) => {

                                return (<>
                                    <Card  >
                                        <Card.Header textAlign={ "center" }>
                                            <Image src={ item.img } circular centered size={ "small" } />
                                            <Header>{ item.name }</Header>
                                        </Card.Header>
                                        <Card.Content textAlign={ "center" }>

                                            { item.score }分
                                        </Card.Content>
                                    </Card>
                                </>)

                            }) }


                        </Card.Group>

                    </div>


                </div>

                <Grid columns={ 2 }>
                    <Grid.Row stretched  >
                        <Grid.Column width={ 16 }> <Header className={ style.hotMsg } as={ "h1" } >最熱門留言</Header></Grid.Column>
                        <Grid.Column width={ 6 }  >
                            <Card fluid>
                                <Image src={ person } size={ "small" } centered />
                                <Card.Content>
                                    { this.state.message[0].name }
                                </Card.Content>
                                <Card.Content>
                                    「{ this.state.message[0].title }」
                                </Card.Content>
                                <Card.Content textAlign={ "center" }><Icon name={ "thumbs up" } />{ this.state.message[0].score }</Card.Content>
                            </Card>


                        </Grid.Column>
                        <Grid.Column width={ 10 }> <Table verticalAlign={ "middle" } >
                            { this.state.message.map((item, index) => {
                                return (index > 0 ? <>

                                    <Table.Row>
                                        <Table.Cell width={ 1 }><Image src={ person } size={ "mini" } />
                                        </Table.Cell>

                                        <Table.Cell width="2" >{ item.name }</Table.Cell>
                                        <Table.Cell>「{ item.title }」</Table.Cell>
                                        <Table.Cell width={ 2 }><Icon name={ "thumbs up" } />{ item.score }
                                        </Table.Cell></Table.Row>


                                </> : <></>)
                            }) }  </Table>

                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row stretched>
                        <Grid.Column width={ 16 }> <Header className={ style.hotPolicy } as={ "h1" }>最熱門政見</Header></Grid.Column>

                        <Grid.Column width={ 6 } >

                            <Card fluid>
                                <Image src={ this.state.politics[0].photo } size={ "small" } centered />
                                <Card.Content>
                                    { this.state.politics[0].name }
                                </Card.Content>
                                <Card.Content>
                                    { this.state.politics[0].title }
                                </Card.Content>
                                <Card.Content textAlign={ "center" }><Icon name={ "star" } />
                                    { this.state.politics[0].score }
                                </Card.Content>
                            </Card>

                        </Grid.Column>
                        <Grid.Column width={ 10 }>

                            <Table    >
                                <Table.Body>
                                    { this.state.politics.map((item, index) => {
                                        return (index > 0 ? <>
                                            <Table.Row >
                                                <Table.Cell width={ 1 }><Image src={ item.photo } size={ "mini" } />
                                                </Table.Cell>
                                                <Table.Cell width="2">{ item.name }</Table.Cell>
                                                <Table.Cell>{ item.title }</Table.Cell>
                                                <Table.Cell width={ "2" }><Icon name={ "star" } />{ item.score }</Table.Cell>
                                            </Table.Row>
                                        </> : <></>)
                                    }) }
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched>
                        <Grid.Column width={ 16 }>
                            <Header className={ style.hotProposal } as={ "h1" }>最熱門提案</Header>
                        </Grid.Column>
                        <Grid.Column width={ 6 }>
                            <Card fluid>
                                <Card.Content>
                                    { this.state.proposal[0].name }
                                </Card.Content>
                                <Card.Content>
                                    { this.state.proposal[0].title }
                                </Card.Content>
                                <Card.Content  >
                                    <Icon name={ "heart" } />{ this.state.proposal[0].score }
                                    <Icon name={ "comment" } />{ this.state.proposal[0].score }
                                    <Icon name={ "star" } />{ this.state.proposal[0].score }
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={ 10 } >

                            <Table   >
                                <Table.Body>
                                    { this.state.proposal.map((item, index) => {
                                        return (index > 0 ? <>
                                            <Table.Row >
                                                 <Table.Cell width="2">{ item.name }</Table.Cell>
                                                <Table.Cell >{ item.title }</Table.Cell>
                                                <Table.Cell width={ 4 } >
                                                    <Icon name={ "heart" } />{ item.score }
                                                    <Icon name={ "comment" } />{ item.score }
                                                    <Icon name={ "star" } />{ this.state.proposal[0].score }
                                                </Table.Cell>
                                            </Table.Row>
                                        </> : <></>)
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
