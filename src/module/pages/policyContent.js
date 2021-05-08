import React from 'react';
import { Row, Col, Carousel, InputGroup, Form, textarea, Button, ListGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap"


import 'react-awesome-selector/dist/style.css';
import { Pages } from "../pages.js";
import 'react-awesome-slider/dist/styles.css';
import Chart from 'react-apexcharts'
import style from "../../css/policyContent.module.css"
import "../../css/policyContent.module.css"

import person from "../../imgs/person.png"
import { Width, FaceHappy, FaceNeutral, FaceSad } from 'akar-icons';
import { ProposalR } from "../request/proposalR"
import { ModalBase, ReportModal } from "../modal"




import { Worker, Viewer } from '@react-pdf-viewer/core';

import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

class PolicyContent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login"),
            userName: localStorage.getItem("login"),
            reportModal: false,
            kpi: {
                series: [10, 50, 40],
                options: {
                    colors: ['#95c95d', '#e3e53a', '#e52125'],
                    labels: ["同意", "中立", "反對"],
                },
            },
            data: [
                {
                    title: "公民投票法部分條文修正草案",
                    tag: ["金融", "國防"], date: "2020/11/22",
                    message: []
                },
                
            ],
            
            imageData: [
                "https://i2.kknews.cc/SIG=v2a4sv/31pr00022o71o8p5p001.jpg",
                "https://onepage.nownews.com/sites/default/files/styles/crop_thematic_pc_banner_img/public/2020-06/FotoJet%20%2878%29.jpg?h=66dd2fea&itok=dJ1r-peX",
                "https://i2.kknews.cc/SIG=fduuh/31pq00046psp1o455n95.jpg",
                "https://i1.kknews.cc/SIG=rf6m48/31p9000467p4po554154.jpg"

            ],
            vote: { title: "我是標題", content: "我是內文", tag: ["金融", "國防"], vote: [43, 53, 4] },
            voteValue: [null],
            proposalId: props.match.params.id,
            noteModal: false
        }
    }
    componentDidMount() {
        this.getMsg()
        window.scrollTo(0, 0)
    }
    showNoteModal = (m) => {
        this.setState({ noteModal: !this.state.noteModal, noteModalC: m })
    }
    closeNoteModal = () => {
        this.setState({ noteModal: false })

    }
    vote = () => {
        ProposalR.vote({ user_id: this.state.userName, sp_id: this.state.voteValue, proposal_id: this.state.proposalId }).then(response => {
            console.log(response)
            if (response.data.success) {
                this.showNoteModal("投票成功")
            }
        })
    }
    voteChange = (val) => this.setState({ voteValue: val });

    getMsg = () => {
        ProposalR.msgList(this.state.proposalId).then(response => {
            console.log(response.data)
            this.setState({ msgL: response.data.data })
        })
    }

    msg = () => {
        let msg = document.getElementById("msg")
        console.log(msg.value)
        ProposalR.msg({ user_id: this.state.userName, content: msg.value, article_id: this.state.proposalId, parent_id: 0 }).then(response => {
            if (response.data.success) {
                msg.value = ""
                this.getMsg()
                this.showNoteModal("留言成功")

            }
        })
    }
    showReport = () => {
        let rule = {}
        if (!this.state.ReportModal) {
            ProposalR.rule().then(response => {
                rule = response.data.data
                console.log(rule)
                this.setState({
                    reportModal: !this.state.reportModal,
                    rule: rule
                })

            })
        }

    }
    report = () => { }


    render() {
        return (<Pages id={ 2 } page={
            (<>{ }
                {this.state.data || false ? (<>
                    {this.state.data.map(placement => {
                        return (<div className="topic justify-content-center">
                            <h2 className="topicBold">{ placement.title }</h2>
                            <p >
                                <Row >
                                    <Col sm={ "auto" } className="lable" >{ placement.date }</Col>
                                    { placement.tag.map(item => (<Col sm={ "auto" } className="lable">#{item }</Col>)) }
                                    <Col sm={ 12 }> <Row>
                                        <Col sm={ "auto" }>提案人</Col>
                                        <Col sm={ "auto" }><a href="./#/figure/401">王婉諭</a></Col>
                                    </Row></Col>
                                    {/* <Col sm={ 12 } >
                                        <div>
                                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">


                                            </Worker>
                                            <div
                                                style={ {
                                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                                    height: '750px',
                                                } }
                                            >
                                                <Viewer fileUrl="0506.pdf"
                                                //   plugins={[
                                                //     pageNavigationPluginInstance,
                                                // ]}
                                                />
                                            </div>
                                        </div>
                                    </Col> */}
                                    { this.state.login && (<Col sm={ 12 }>
                                        <div className="lable">
                                            您的看法：<div>(請點選投票)</div>
                                        </div>
                                        <Row className="justify-content-center">
                                            <ToggleButtonGroup type="radio" name="options" id="vote" value={ this.state.voteValue }
                                                onChange={ this.voteChange }>
                                                <ToggleButton variant="light" value={ 0 }><FaceHappy className={ style.green + " " + style.size } /></ToggleButton>
                                                <ToggleButton variant="light" value={ 1 }><FaceNeutral className={ style.yellow + " " + style.size } /></ToggleButton>
                                                <ToggleButton variant="light" value={ 2 }><FaceSad className={ style.red + " " + style.size } /> </ToggleButton>


                                            </ToggleButtonGroup>
                                            <Col sm={ "auto" } className={ style.voteSent }><Button variant="outline-dark" onClick={ this.vote }>確定投票</Button></Col>
                                        </Row>

                                    </Col>) }
                                    <Col sm={ 3 }><div className="lable">RUN民看法：</div></Col>
                                    <Col sm={ 12 }></Col> <Col sm={ 3 }></Col>
                                    <Col sm={ 6 }>
                                        <Chart options={ this.state.kpi.options } series={ this.state.kpi.series } type="donut" />
                                    </Col>
                                    <Col sm={ 12 }>
                                        <div className="mes">
                                            <div className="mesTitle">RUN民討論專區</div>
                                            <ListGroup variant="flush">

                                                { this.state.msgL || false ? (this.state.msgL.map((placement, index) => {
                                                    return (<ListGroup.Item>
                                                        <Row className="align-items-center" noGutters={ true }>
                                                            <Col sm={ "auto" }><img src={ person } className="pimg" /></Col>
                                                            <Col>
                                                                <Row className="align-items-center">
                                                                    <Col sm={ "auto" }><span className="mesTitle">{ placement.user_id }</span></Col>
                                                                    <Col sm={ "auto" }> <span className="lable">{ placement.time }</span></Col>
                                                                    <Col>
                                                                        <Button className={ style.btn_report } variant="outline-secondary" onClick={ this.showReport }>檢舉</Button>
                                                                    </Col>
                                                                    <Col sm={ 12 }>{ placement.content }</Col>
                                                                </Row>

                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>)
                                                })) : <></> }
                                            </ListGroup>
                                            <hr />

                                            { this.state.login && (<Form>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>我的留言：</Form.Label>
                                                    <InputGroup >
                                                        <Form.Control as="textarea" rows={ 2 } id="msg" />
                                                        <InputGroup.Append>
                                                            <Button variant="outline-secondary" onClick={ this.msg }>送出</Button>
                                                        </InputGroup.Append>
                                                    </InputGroup>

                                                </Form.Group>
                                            </Form>) }
                                        </div>
                                    </Col>
                                </Row>
                            </p>

                        </div>)
                    }) }
                </>) : (<></>) }
                <ModalBase show={ this.state.noteModal } ok={ this.closeNoteModal } close={ this.closeNoteModal } content={ this.state.noteModalC } />
                <ReportModal show={ this.state.reportModal } ok={ this.report } close={ this.showReport } rule={ this.state.rule } />
            </>)
        } />)
    }
}





export default PolicyContent = {
    routeProps: {
        path: "/PolicyContent/:id",
        component: PolicyContent
    },
    name: "提案內容"
}
