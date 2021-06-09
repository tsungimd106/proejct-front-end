import React from 'react';
import { Pages } from "../pages.js"
  import person from "../../imgs/person.png" 
import r from "../../imgs/r.jpg" 
import { Card,  Grid, List, Image, Header, Segment, Table  } from 'semantic-ui-react'
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
                { name: '林昶佐', score: 66, img: "http://www.ly.gov.tw//Images/Legislators/100029.jpg" },
            ],
            
           
            message:
                [
                    { name: '王婉諭', title: "公民投票法部分條文修正草案" },
                    { name: '劉建國', title: "太空發展法訂定草案" },
                    { name: '郭家瑜', title: "新住民孩童教育制定草案" },
                    { name: '賴品妤', title: 34 },
                    { name: '賴品妤', title: "88" },
                ]
            ,
            politics:
                [
                    { name: '高嘉瑜', title: "將持續推動廣設公幼，達到公幼公託免抽籤，以津貼、減稅及推動父母親產後共享育嬰假，實踐「0到6歲國家顧」" },
                    { name: '陳柏惟', title: "經濟有希望，國防能源產業變MIT，由政府投資帶動技術升級" },
                    { name: '劉世芳 ', title: "整合左訓中心、世運主埸館、楠梓文中足球場各級學校成為培育體育人才及發展運動產業的國家體育園區" },
                    {name:"孔文吉",title:"推動原住民族基本權利入法，使原住民享有政治、經濟、教育、文化、狩獵、土地、醫療、傳播及社會福利之完整權益。"},
                    {name:"高虹安",title:"修改民法，降低成年門檻至18歲，賦予青年更大的政治參與權"}
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
                        <Segment basic textAlign={"center"}>  <div>你知道哪一位政治人物提出政見後，有「說到做到」嗎?</div> 
                       <div>這裡可以一網打盡!</div>
                       <div>透過政見執行率的評分找出前五名，讓我們一起來看看吧!</div></Segment> 
                        <Card.Group itemsPerRow={ 3 }>
                            { this.state.rank.map((item, index) => {
                            
                                    return (index < 3?<>
                                        <Card  >
                                            <Card.Header textAlign={ "center" }>
                                                <Image src={ person } circular centered size={ "small" } />
                                                <Header>{ item.name }</Header>
                                               
                                            </Card.Header>


                                            <Card.Content textAlign={ "center" }>

                                                { item.score }分
                                            </Card.Content>
                                        </Card>
                                    </>:<></>)
                                
                            }) }


                        </Card.Group>
                        <Card.Group itemsPerRow={ 1 }>
                            { this.state.rank.map((item, index) => {
                              
                                    return (index >= 3?<>
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

                                        </Card></>:<></>)
                                
                            }) }
                        </Card.Group>
                    </div>


                </div>
                <Grid>
                    <Grid.Row verticalAlign={"middle"} columns={3}>
                        <Grid.Column width={ 16 }  >
                            <Header className={ style.hotMsg } as={ "h1" } >最熱門留言</Header>
                        </Grid.Column>
                        <Grid.Column   width={6}>
                            <Card fluid>
                                <Image src={ person } size={ "small" } centered />
                                <Card.Content>
                                    { this.state.message[0].name }
                                </Card.Content>
                                <Card.Content>
                                    { this.state.message[0].title }
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column  width={10}>

                            <Table   size={"large"}>
                                <Table.Body>
                                    { this.state.message.map((item,index) => {
                                        return (index>0?<>
                                            <Table.Row >
                                                <Table.Cell width={1}><Image src={ person } size={ "mini" } />
                                                </Table.Cell>
                                                <Table.Cell width="2">{ item.name }</Table.Cell>
                                                <Table.Cell>{ item.title }</Table.Cell>
                                            </Table.Row>
                                        </>:<></>)
                                    }) }
                                </Table.Body>
                            </Table>


                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign={"middle"}>
                        <Grid.Column width={16}> <Header className={ style.hotPolicy } as={ "h1" }>最熱門政見</Header></Grid.Column>
                        <Grid.Column width={ 6 }>
                        <Card fluid>
                                <Image src={ person } size={ "small" } centered />
                                <Card.Content>
                                    { this.state.politics[0].name }
                                </Card.Content>
                                <Card.Content>
                                    { this.state.politics[0].title }
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                        <Grid.Column width={ 10 }>
                           
                            <Table  size={"large"} >
                                <Table.Body>
                                    { this.state.politics.map((item,index) => {
                                        return (index>0?<>
                                            <Table.Row >
                                                <Table.Cell width={1}><Image src={ person } size={ "mini" } />
                                                </Table.Cell>
                                                <Table.Cell width="2">{ item.name }</Table.Cell>
                                                <Table.Cell>{ item.title }</Table.Cell>
                                            </Table.Row>
                                        </>:<></> )
                                    }) }
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row verticalAlign={"middle"}> 
                        <Grid.Column width={16}>
                        <Header className={ style.hotProposal } as={ "h1" }>最熱門提案</Header>
                        </Grid.Column>
                        <Grid.Column width={ 6 }>
                        <Card fluid>
                                <Image src={ person } size={ "small" } centered />
                                <Card.Content>
                                    { this.state.message[0].name }
                                </Card.Content>
                                <Card.Content>
                                    { this.state.message[0].title }
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={ 10 } >
                          
                            <Table   size={"large"}>
                                <Table.Body>
                                    { this.state.message.map((item,index) => {
                                        return (index>0?<>
                                            <Table.Row >
                                                <Table.Cell width={1}><Image src={ person } size={ "mini" } />
                                                </Table.Cell>
                                                <Table.Cell width="2">{ item.name }</Table.Cell>
                                                <Table.Cell >{ item.title }</Table.Cell>
                                            </Table.Row>
                                        </>:<></>)
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
