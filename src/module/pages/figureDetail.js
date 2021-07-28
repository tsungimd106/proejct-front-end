import React from 'react';
import { Pages } from "../pages.js"
import { Card, Dropdown, Button, Form, Label, Segment, Image } from 'semantic-ui-react'
import Chart from 'react-apexcharts'
import { Line,Bar } from 'react-chartjs-2';

import style from "../../css/figureDetail.module.css"
import { PoliticianR } from "../request/politicianR"
import { trackPromise } from 'react-promise-tracker';
import { ScoreModal, InfoModal } from "../modal"
import { Grid } from 'semantic-ui-react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import PacmanLoader from "react-spinners/ClipLoader";


class FigureDetail extends React.Component {
    figureID = null
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login"),
            userName: localStorage.getItem("login"),
            options: {},
            data: {
                session: 10,
                persoal: {
                    option: {
                        chart: { toolbar: { show: false }, foreColor: "#fff" },
                        tootip: { style: { color: "#000" } },
                        xaxis: { categories: ["退回程序", "審查完畢", "交付審查", "排入院會", "三讀", "逕付二讀"], },
                        fill: { opacity: 1.0, }, colors: ['#586F7C', "#c6d8d3"],
                        title: {
                            text: "提案數量統計", align: 'left',
                            style: { fontSize: "25px" }
                        }
                    },
                    series: [{ name: "當屆", data: [20, 45, 64, 26, 27, 85,] }, { name: "歷屆平均", data: [44, 5, 6, 6, 27, 8,] }],
                    legend: { show: false, }
                }

            },
            go: [{ name: "該政治人物", data: [99, 98] }, { name: "該政治人總平均", data: [98.5, 98.5] }, { name: "立委總平均", data: [88, 85] }],
            score: [{ name: "該政治人物", data: [85, 90] }, { name: "該政治人總平均", data: [87.5, 87.5] }, { name: "立委總平均", data: [77, 85] }],
            scoreD: {
                chart: { toolbar: { show: false, }, foreColor: "#fff" },
                colors: ['#08B2E3', "#EE6352", "#EFE9F4"],
                dataLabels: { enabled: true, },
                stroke: { curve: 'smooth' },
                title: {
                    text: '政見達成分數走勢:總平均80',
                    align: 'left',
                    style: { fontSize: "25px" }
                },
                xaxis: { categories: ['9', '10'], title: { text: '', }, }
            },
            goO: {
                chart: { toolbar: { show: false, }, foreColor: "#fff" },
                colors: ['#08B2E3', "#EE6352", "#EFE9F4"],
                dataLabels: { enabled: true, },
                stroke: { curve: 'smooth' },
                title: {
                    text: '出席率走勢圖:總平均:98.5',
                    align: 'left',
                    style: { fontSize: "25px" }
                },
                xaxis: { categories: ['9', '10'], title: { text: '', }, },

            },
            selfD: [{ no: "degree", name: "學歷" }, { no: "tel", name: "電話" }],
            scoreShow: false,
            scoreRule: [
                { name: "完全落實", class: "outline-success", remark: "承諾的政見確實已完成" },
                { name: "部分落實", class: "outline-success", remark: "承諾的政見有部分完成" },
                { name: "進行中", class: "outline-warning", remark: "相關政策已有草案版本" },
                { name: "卡住", class: "outline-warning", remark: "政府提出草案已進入審議程序，但進度卡關（例如被立法院杯葛）" },
                { name: "開始動作", class: "outline-warning", remark: "政府相關部會已開始進行研究，但尚未有草案版本" },
                { name: "未有動作", class: "outline-danger", remark: "政府相關部會沒有任何動作" },
                { name: "政策破局", class: "outline-danger", remark: "明確違背原本承諾的政見" }

            ],
            scoreActitivy: null,
            open: false


        }
    }
    componentDidMount() {
        this.figureID = this.props.match.params.id
        trackPromise(

            PoliticianR.detail(this.figureID).then(res => {
                let cond = [{ no: "degree", name: "學歷" }, { no: "tel", name: "電話" }]
                let selfD = []
                cond.map(placement => {
                    if (placement["no"] in res.data.data[0].data[0]) {
                        selfD.push({
                            "content": res.data.data[0].data[0][placement.no].replace(/;/g, " <br />"),
                            "title": placement.name
                        })
                        document.getElementById(placement.no).innerHTML = res.data.data[0].data[0][placement.no]
                            .replace(/;/g, " <br />").replace(/,/g, " <br />")

                    }
                })

                this.setState({
                    policy: res.data.data[1].data,
                    name: res.data.data[0].data[0].name,
                    area: res.data.data[0].data[0].e_n,
                    experience: res.data.data[0].data[0].experience.split("\n"),
                    areaReamrk: res.data.data[0].data[0].remark.replace("null", ""),
                    photo: res.data.data[0].data[0].photo
                })

            })
        )
        window.scrollTo(0, 0)
        this.changeTerm("當屆")


    }

    changeTerm = (s) => {
        this.setState({ term: s })
    }
    scoreShow = (txt, id, tag) => {
        if (this.state.login) {
            this.setState({ scoreShow: !this.state.scoreShow, scoreTitle: txt, scoreId: id, tag: tag })
        } else {

        }
    }

    scoreRule = (i) => {
        this.setState({ scoreActitivy: i })
    }
    score = () => {
        PoliticianR.score({
            "user_id": this.state.userName,
            "policy_id": this.state.scoreId,
            "ps_id": this.state.scoreActitivy,
            "remark": document.getElementById("scoreRemark").value || " "
        }).then(res => {
            if (res.data["success"]) {
                this.scoreShow("")
                this.setState({ "open": true, noteModalC: "評分成功" })
            }
        })
    }
    closeNoteModal = (m) => {

        this.setState({ open: false })
    }
    render() {
        const ldata = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                label: '該政治人物',
                data: [10, 9, 13, 15, 12, 13],
                fill: false,
                backgroundColor: '#FEC240',
                borderColor: '#FEC240',
              },
              {
              label: '該政治人物總平均',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: '#DE4B43',
                borderColor: '#DE4B43',
              },
              {
                label:'立委總平均',
                data: [1, 10, 4, 7, 8, 15],
                fill: false,
                backgroundColor: '#98C4D1',
                borderColor:'#98C4D1',
              }
            ],
        };
          
          const loptions = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            layout: {
                padding: 35
            },
            plugins: {
                title: {
                    display: true,
                    text: '政見達成分數走勢圖',
                    color:'#ffffff',
                    font: {
                        size: 25
                    },
                    padding: {
                        top: 3,
                    }
                }
            },
            color:'#ffffff'
          };

        const lldata = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
              {
                label: '該政治人物',
                data: [9, 9, 8, 15, 7, 10],
                fill: false,
                backgroundColor: '#FEC240',
                borderColor: '#FEC240',
              },
              {
              label: '該政治人物總平均',
                data: [6, 6, 5, 8, 6, 8],
                fill: false,
                backgroundColor: '#DE4B43',
                borderColor: '#DE4B43',
              },
              {
                label:'立委總平均',
                data: [7, 10, 4, 6, 8, 9],
                fill: false,
                backgroundColor: '#98C4D1',
                borderColor:'#98C4D1',
              }
            ],
        };
          
          const lloptions = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            layout: {
                padding: 35
            },
            plugins: {
                title: {
                    display: true,
                    text: '出席率走勢圖',
                    color:'#ffffff',
                    font: {
                        size: 25
                    },
                    padding: {
                        top: 3,
                    }
                }
            },
            color:'#ffffff'
          };

        const bdata = {
            labels: ['退回程序', '審查完畢', '交付審查', '排入院會', '三讀', '逕付二讀'],
            datasets: [
              {
                label: '當屆',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: '#FEC240',
              },
              {
                label: '歷屆平均',
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: '#98C4D1',
              },
            ],
        };
          
          const boptions = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            layout: {
                padding: 35
            },
            plugins: {
                title: {
                    display: true,
                    text: '提案數量統計長條圖',
                    color:'#ffffff',
                    font: {
                        size: 25
                    },
                    padding: {
                        top: 3,
                    }
                }
            },
            color:'#ffffff'
          };

        return (<Pages id={ 3 }
            pageInfo={ [{ content: '政治人物', link: true, href: "./#/figure" },
            { content: this.state.name, active: true, href: `./#/figure/${this.props.match.params.id}` }] }

            page={
                (<>
                    <div className={ style.people }>
                        {
                            <Grid> <Grid.Row className={ style.dashboard } >
                                <Grid.Column mobile={ 16 } computer={ 5 } >
                                    <Card  >
                                        <Grid columns={ 2 } verticalAlign={ "middle" } >
                                            <Grid.Row >
                                                <Grid.Column >
                                                    <center className={ style.imgBox }>
                                                        <Image src={ this.state.photo } alt="" size={ "small" } centered />
                                                    </center>
                                                </Grid.Column>
                                                <Grid.Column >

                                                    <p className={ style.bigSize }>{ this.state.selfD && this.state.name }</p>
                                                    <p className={ style.in }>
                                                        <Dropdown text={ this.state.term && this.state.term }>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item onClick={ () => { this.changeTerm("當屆") } }>當屆</Dropdown.Item>
                                                                <Dropdown.Item onClick={ () => { this.changeTerm("歷屆") } }>歷屆</Dropdown.Item>
                                                                <Dropdown.Item onClick={ () => { this.changeTerm("9") } }>9</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </p>
                                                    <p className={ style.in }>{ this.state.selfD && this.state.area }</p>
                                                    <p className={ style.in }> { this.state.selfD && this.state.areaReamrk }</p>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                                        <Card.Content>
                                            <Grid>
                                                <Grid.Row columns={ "equal" } >
                                                    { this.state.selfD && this.state.selfD.map(placement => {
                                                        return (<>

                                                            <Grid.Column ><Label content={ placement.name } tag /></Grid.Column>
                                                            <Grid.Column id={ placement.no } width={ 16 } className={ style.labelContent } />


                                                        </>)
                                                    }) }
                                                </Grid.Row>
                                                <Grid.Row columns={ "equal" }>
                                                    <Grid.Column > <Label content={ "經歷" } tag /> </Grid.Column>
                                                    <Grid.Column width={ 16 } className={ style.labelContent }>
                                                        { this.state.experience && this.state.experience.map((item, index) => {
                                                            return (<p>
                                                                { item }

                                                            </p>)
                                                        }) }</Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Card.Content>
                                    </Card>


                                </Grid.Column>
                                <Grid.Column computer={ 11 } mobile={ 16 }>
                           
                                      
                                  <Swiper
                                   className={ style.dashboardcard }
                                        spaceBetween={ 50 }
                                        slidesPerView={ 1 }
                                        navigation
                                        pagination={ { clickable: true } }
                                    >
                                        {/* <SwiperSlide  >
                                            <center><Chart options={ this.state.scoreD } series={ this.state.score } type="line" height={ 250 } width={ 450 } /></center>
                                        </SwiperSlide>
                                        <SwiperSlide  > <center><Chart options={ this.state.goO } series={ this.state.go } type="line" height={ 250 } width={ 450 } /></center></SwiperSlide>
                                        <SwiperSlide  ><center><Chart options={ this.state.data.persoal.option } series={ this.state.data.persoal.series } type="bar" width={ 450 } height={ 250 } /></center></SwiperSlide> */}
                                        <SwiperSlide>
                                            <Line data={ldata} options={loptions} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Line data={lldata} options={lloptions} />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Bar data={bdata} options={boptions} />
                                        </SwiperSlide>
                                    </Swiper>

                                    <Segment  basic><div className={ style.bigSize + " " + style.center }>政見</div></Segment>
                                    <Card.Group itemsPerRow={ 2 }  >
                                        { this.state.policy && this.state.policy.map((placement, index) => {
                                            if (index === 0) return (<></>)
                                            else {
                                                return (<>
                                                    <Card onClick={ () => { this.scoreShow(placement.content, placement.id, placement.cateogry) } }>

                                                        <Card.Content> <Card.Description>
                                                            { placement.content }
                                                        </Card.Description></Card.Content>
                                                        <Card.Content extra>
                                                            < >{ placement.cateogry.map((item, index) => {
                                                                return (<><Label>{ item }</Label></>)
                                                            }) }</ >
                                                        </Card.Content>
                                                    </Card>

                                                </>)
                                            }
                                        }) } </Card.Group>



                                </Grid.Column>


                            </Grid.Row></Grid>

                        }</div>
                    <ScoreModal open={ this.state.scoreShow } toDo={ () => this.score() } setOpen={ () => { this.scoreShow("") } }
                        message={ this.state.scoreTitle }
                        content={ (<>
                            <div >{ this.state.tag != null ? this.state.tag.map((item, index) => { return (<Label>{ item }</Label>) }) : <></> }</ div>
                            <div>您可依自己的判斷，針對每項政見承諾的落實程度，進行評分。</div>
                            <Grid> <Grid.Row>

                                <Grid.Column width={ 2 }>
                                    <Button.Group vertical type="radio" id={ "ps_id" }>
                                        { this.state.scoreRule.map((item, index) => {
                                            return (<>
                                                { index !== 0 ? <>  <Button.Or text={ "" } /></> : <></> }
                                                <Button active={ index === this.state.scoreActitivy }
                                                    onClick={ () => this.scoreRule(index) }
                                                    style={ { width: "100px", height: "45px" } } content={ item.name } />

                                            </>)
                                        }) }

                                    </Button.Group>
                                </Grid.Column>
                                <Grid.Column width={ 13 } floated={ "right" }>
                                    <Button.Group vertical basic fluid>
                                        { this.state.scoreRule.map((item, index) => {
                                            return (<>
                                                { index !== 0 ? <>  <Button.Or text={ "" } /></> : <></> }
                                                <Button value={ index + 1 } disabled style={ { height: "45px", "margin-left": "5px" } } content={ item.remark } />


                                            </>)
                                        }) }

                                    </Button.Group>
                                    <Form.TextArea rows={ 1 } className={ style.input } placeholder={ "備註" } id={ "scoreRemark" } />
                                </Grid.Column>
                                { this.state.scoreRule.map((item, index) => {
                                    return (<>
                                        <div className={ style.space }></div>
                                    </>)
                                }) }
                            </Grid.Row></Grid>



                        </>) }

                    />
                    <InfoModal open={ this.state.open } content={ this.state.noteModalC } close={ this.closeNoteModal } />
                </>)

            } />)
    }
}





export default FigureDetail = {
    routeProps: {
        path: "/figure/:id",
        component: FigureDetail
    },
    name: "人物專區"
}
