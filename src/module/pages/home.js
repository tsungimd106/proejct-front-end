import React from 'react';
import { Pages } from "../pages.js"
import person from "../../imgs/person.png"
import r from "../../imgs/R.png"
import invit from "../../imgs/invit.gif"
import { Grid, Header, Segment } from 'semantic-ui-react'
import { HomeFirst, HomeTable, TailwindModal } from "../tailwind"
import style from "../../css/main.module.css"
import { HomeR } from '../request/homeR.js';

import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            imageData: [
                r,
                invit
            ],
            chart: [
                { name: '政要RUN', score: 100, img: person },
                { name: '賴品妤', score: 98, img: "http://www.ly.gov.tw//Images/Legislators/100102.jpg" },
                { name: '蔡適應', score: 52, img: "http://www.ly.gov.tw//Images/Legislators/100093.jpg" },


            ],


            // message:
            //     [
            //         { name: ' Eric', title: "一萬七千多位建教生可能因為沒有實習津貼影響生計！請教育部的紓困方案別忘了照顧建教合作生！", score: 88, img: "../../imgs/首頁/林奕華.jpg" },
            //         { name: '耀耀', title: "謝謝警察在這段艱辛的日子，守護人民安全、對抗疫情，您們辛苦了！", score: 63 },
            //         { name: 'Sherry', title: "3+11機組員防疫漏洞  加強版可亡羊補牢？", score: 44 },
            //         { name: '小青', title: "各國推進 #疫苗護照，台灣何時跟上世界？", score: 33 },
            //         { name: '陳威琦', title: "傳日本將再贈疫苗給台灣，蔡政府應誠實面對疫苗困境，積極爭取協助", score: 32 },
            //     ]
            // ,
            // politics:
            //     [
            //         { name: '高嘉瑜', title: "將持續推動廣設公幼，達到公幼公託免抽籤，以津貼、減稅及推動父母親產後共享育嬰假，實踐「0到6歲國家顧」", score: 73, photo: "http://www.ly.gov.tw//Images/Legislators/100048.jpg" },
            //         { name: '陳柏惟', title: "經濟有希望，國防能源產業變MIT，由政府投資帶動技術升級", score: 53, photo: "http://www.ly.gov.tw//Images/Legislators/100063.jpg" },
            //         { name: '劉世芳 ', title: "整合左訓中心、世運主埸館、楠梓文中足球場各級學校成為培育體育人才及發展運動產業的國家體育園區", score: 32, photo: "http://www.ly.gov.tw//Images/Legislators/100088.jpg" },
            //         { name: "孔文吉", title: "推動原住民族基本權利入法，使原住民享有政治、經濟、教育、文化、狩獵、土地、醫療、傳播及社會福利之完整權益。", score: 31, photo: "http://www.ly.gov.tw//Images/Legislators/100001.jpg" },
            //         { name: "高虹安", title: "修改民法，降低成年門檻至18歲，賦予青年更大的政治參與權", score: 21, photo: "http://www.ly.gov.tw//Images/Legislators/100047.jpg" }
            //     ]
            // ,
            // proposal:
            //     [
            //         { name: ['王婉諭', '劉建國'], title: "公民投票法部分條文修正草案", score: 85 },
            //         { name: ['劉建國'], title: "太空發展法訂定草案", score: 68 },
            //         { name: ['郭家瑜 '], title: "新住民孩童教育制定草案", score: 55 },
            //         { name: ["陳歐珀"], title: "動物保護法第二十三條及第二十九條條文修正草案", score: 31 },
            //         { name: ["呂玉玲"], title: "教師待遇條例第十七條條文修正草案", score: 21 }
            //     ]
            // ,
            rank: [
                { name: '政要RUN', score: 100 },
                { name: '王婉諭', score: 77 },
                { name: '劉建國', score: 55 },
                { name: '郭家瑜', score: 44 },
                { name: '賴品妤', score: 34 },
            ]

        }
    }
    componentDidMount() {
        HomeR.home().then(res => {
            let resData = res.data.D
            this.setState({ politics: resData.policy, message: resData.mes, proposal: resData.proposal })
            console.log(resData)
        }, error => console.log(error))
    }


    render() {
        SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel,]);
        return (<Pages id={ 0 } page={
            (<>
                <div >
                    <div className={ style.slider_item }>
                        <Swiper
                            spaceBetween={ 50 }
                            slidesPerView={ 1 }
                            navigation
                            mousewheel
                            pagination={ { clickable: true } }
                        >
                            { this.state.imageData.map(item => {
                                return (<SwiperSlide  ><center><img src={ item } alt="" /></center></SwiperSlide>)
                            }) }
                        </Swiper>
                    </div>

                    {/* 測試新套件 */ }
                    <div className={ style.sort }>
                        <Header textAlign={ "center" } as={ "h1" }>人物排行榜                        </Header>
                        <Segment basic textAlign={ "center" }>
                            <div>你知道哪一位政治人物提出政見後，有「說到做到」嗎?</div>
                            <div>這裡可以一網打盡!</div>
                            <div>透過政見執行率的評分找出前三名，讓我們一起來看看吧!</div>
                            <div><TailwindModal></TailwindModal></div>
                        </Segment>
                        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3  ">
                            {
                                this.state.chart.map((item, index) => {
                                    return (<>
                                        <div class="relative flex flex-col items-center justify-center mb-10">
                                            <div class="container flex justify-center">
                                                <div class="max-w-md w-72 bg-white shadow-lg rounded-xl p-6">
                                                    <div class="flex flex-col ">
                                                        <div class="">
                                                            <div class="relative h-72 w-full mb-10">
                                                                <img src={ item.img } alt="Just a flower" class=" h-18 w-auto   object-fill  rounded-2xl" />
                                                            </div>
                                                            <div class="flex-auto justify-evenly ">
                                                                <div class="flex flex-wrap ">
                                                                    <div class="w-full flex-none text-sm flex items-center text-gray-600">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                                        </svg>
                                                                        <span class="text-gray-400 whitespace-nowrap mr-3">4.60</span><span class="mr-2 text-gray-400">
                                                                            { item.score }分
                                                                            {/* { obj["a_n"] } */ }
                                                                        </span>
                                                                    </div>

                                                                </div>
                                                                <div class="text-xl  font-semibold mt-1">{ item["name"] }</div>
                                                                <div class="lg:flex  py-4  text-sm text-gray-600">


                                                                </div>
                                                                <div class="flex space-x-2 text-sm font-medium justify-start">
                                                                    {/* <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-gray-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-gray-600 "
                                                                               
                                                                            >
                                                                                <span>more </span>
                                                                            </button> */}

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </>)
                                })
                            }

                        </div>
                    </div>
                </div>
                <Grid columns={ 2 } >
                    <Grid.Row stretched className="mt-6">
                        <Grid.Column width={ 16 } > <h1 className={ style.hotMsg + " m-3" }   >最熱門留言</h1></Grid.Column>
                        <Grid.Column width={ 6 } mobile={ 16 } computer={ 6 } tablet={ 6 } stretched >
                            { this.state.message == null ? <></> : <>
                                <HomeFirst person={ person } name={ this.state.message[0].name && "" } title={ this.state.message[0].title && "" } score={ this.state.message[0].score && "" }></HomeFirst>
                            </> }


                        </Grid.Column>

                        <Grid.Column width={ 10 } mobile={ 16 } computer={ 10 } tablet={ 10 } stretched>
                            <HomeTable data={ this.state.message } person={ person }></HomeTable>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row stretched className="mt-6">
                        <Grid.Column width={ 16 }> <h1 className={ style.hotPolicy + " m-3" }  >最熱門政見</h1></Grid.Column>

                        <Grid.Column width={ 6 } mobile={ 16 } tablet={ 6 } computer={ 6 }>
                            { this.state.politics == null ? <></> : <>
                                <HomeFirst person={ this.state.politics[0].photo } name={ this.state.politics[0].name } title={ this.state.politics[0].title } score={ this.state.politics[0].score }></HomeFirst>
                            </> }


                        </Grid.Column>
                        <Grid.Column width={ 10 } mobile={ 16 } computer={ 10 } tablet={ 10 }>
                            <HomeTable data={ this.state.politics } ></HomeTable>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row stretched className="mt-6">
                        <Grid.Column width={ 16 }>
                            <h1 className={ style.hotProposal } >最熱門提案</h1>
                        </Grid.Column>
                        <Grid.Column width={ 6 } mobile={ 16 } tablet={ 6 } computer={ 6 }>
                            { this.state.politics == null ? <></> : <>
                                <HomeFirst name={ this.state.proposal[0].name } title={ this.state.proposal[0].title } score={ this.state.proposal[0].score }></HomeFirst>
                            </> }

                        </Grid.Column>
                        <Grid.Column width={ 10 } mobile={ 16 } computer={ 10 } tablet={ 10 }>
                            <HomeTable data={ this.state.proposal } ></HomeTable>
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
