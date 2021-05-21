import React from 'react';
import { Carousel, InputGroup, Form, textarea, Button, ListGroup, ToggleButton, ToggleButtonGroup } from "react-bootstrap"

import { Grid } from 'semantic-ui-react'
import 'react-awesome-selector/dist/style.css';
import { Pages } from "../pages.js";
import 'react-awesome-slider/dist/styles.css';
import Chart from 'react-apexcharts'
import style from "../../css/policyContent.module.css"
import "../../css/policyContent.module.css"
import { trackPromise } from 'react-promise-tracker';

import person from "../../imgs/person.png"
import { Width, FaceHappy, FaceNeutral, FaceSad, Heart } from 'akar-icons';
import { ProposalR } from "../request/proposalR"
import { ModalBase, ReportModal } from "../modal"




import { Worker, Viewer } from '@react-pdf-viewer/core';

import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';



import react, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function PdfComponent(uu) {
    const [totalPage, setTotalPage] = useState(1)
    console.log(uu)

    function onDocumentLoadSuccess({ numPages }) {
        setTotalPage(numPages)
    }

    return <>

        <Document
            file={ `https://cors-anywhere.herokuapp.com/${uu.uu}` }  //檔案路徑
            onLoadSuccess={ onDocumentLoadSuccess } //成功載入文件後呼叫
            renderMode="canvas"
            onLoadError={ (e) => { console.log(e) } }
        >

            {
                new Array(totalPage).fill('').map((item, index) => {
                    return <Page key={ index } pageNumber={ index + 1 } />
                })
            }

        </Document>
    </>
}


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
            vote: { title: "我是標題", content: "我是內文", tag: ["金融", "國防"], vote: [43, 53, 4] },
            voteValue: [null],
            proposalId: props.match.params.id,
            noteModal: false,
            proposal: localStorage.getItem("proposal")
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
        trackPromise(
            ProposalR.vote({ user_id: this.state.userName, sp_id: this.state.voteValue, proposal_id: this.state.proposalId }).then(response => {
                console.log(response)
                if (response.data.success) {
                    this.showNoteModal("投票成功")
                }
            })
        )

    }
    voteChange = (val) => this.setState({ voteValue: val });

    getMsg = () => {
        trackPromise(
            ProposalR.msgList(this.state.proposalId, { "user_id": this.state.login }).then(response => {
                console.log(response.data)

                this.setState({ msgL: response.data.data[0].data, detail: response.data.data[1].data, heart: response.data.data[2].data == [] })
            })
        )


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
    showReport = (msgid) => {
        let rule = {}
        if (!this.state.ReportModal) {
            ProposalR.rule().then(response => {
                rule = response.data.data
                console.log(rule)
                this.setState({
                    reportModal: !this.state.reportModal,
                    rule: rule,
                    msgid: msgid
                })

            })
        }
        else {
            this.setState({
                reportModal: !this.state.reportModal,
                msgid: null
            })
        }

    }
    report = () => {
        let ruleInput = []
        for (let i of this.state.rule) {
            if (document.getElementById(`reportInput-${i.id}`).checked) ruleInput.push(i.id)
        }
        let remark = document.getElementById("reportInputRemark").value || " "
        console.log(this.state.msgid)
        ProposalR.report({ user_id: this.state.userName, message_id: this.state.msgid, remark: remark, rule: ruleInput }).then(response => {
            console.log(response)
        })
    }

    save = () => {
        if (this.state.heart) { }
        this.setState({ heart: !this.state.heart })
        ProposalR.save({ "user_id": this.state.userName, "proposal_id": this.state.proposalId })
    }


    render() {
        return (<Pages id={ 2 } page={
            (<>{ }
                {this.state.detail || false ? (<>
                    {this.state.detail.map(placement => {
                        return (
                            <div className="topic justify-content-center">
                                <h2 className={ style.topicBold }>{ placement.title }</h2>
                                <div>{ this.state.login && <Heart className={ this.state.heart ? style.redHeart : style.heart } onClick={ this.save } /> }</div>
                                <p >
                                    <Grid> <Grid.Row >
                                        <Grid.Column className={ style.lable } >33{ placement.date }</Grid.Column>
                                        {/* { placement.tag.map(item => (<Grid.Column  className={ style.lable }>#{item }</Grid.Column>)) } */ }
                                        <Grid.Column width={ 16 }>
                                            <Grid> <Grid.Row >
                                                <Grid.Column >提案人</Grid.Column>
                                                <Grid.Column ><a href="./#/figure/401">王婉諭</a></Grid.Column>
                                            </Grid.Row></Grid>
                                        </Grid.Column>
                                        <Grid.Column width={ 16 } >
                                            <div>
                                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">


                                                </Worker>
                                                <div
                                                    style={ {
                                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                                        height: '750px',
                                                    } }
                                                >
                                                    <Viewer fileUrl={ `https://cors-anywhere.herokuapp.com/${placement.pdfUrl}` }
                                                    //   plugins={[
                                                    //     pageNavigationPluginInstance,
                                                    // ]}
                                                    />
                                                </div>
                                            </div>

                                            {/* <PdfComponent uu={placement.pdfUrl}/> */ }
                                        </Grid.Column>
                                        { this.state.login && (<Grid.Column width={ 16 }>
                                            <div className={ style.lable }>
                                                您的看法：<div>(請點選投票)</div>
                                            </div>
                                            <Grid className="justify-content-center"> <Grid.Row columns={ "equal" }>
                                                <ToggleButtonGroup type="radio" name="options" id="vote" value={ this.state.voteValue }
                                                    onChange={ this.voteChange }>
                                                    <ToggleButton variant="light" value={ 0 }><FaceHappy className={ style.green + " " + style.size } /></ToggleButton>
                                                    <ToggleButton variant="light" value={ 1 }><FaceNeutral className={ style.yellow + " " + style.size } /></ToggleButton>
                                                    <ToggleButton variant="light" value={ 2 }><FaceSad className={ style.red + " " + style.size } /> </ToggleButton>


                                                </ToggleButtonGroup>
                                                <Grid.Column className={ style.voteSent }><Button variant="outline-dark" onClick={ this.vote }>確定投票</Button></Grid.Column>
                                            </Grid.Row></Grid>

                                        </Grid.Column>) }
                                        <Grid.Column width={ 16 }><div className={ style.lable }>RUN民看法：</div></Grid.Column>

                                        <Grid.Column width={ 8 }>
                                            <Chart options={ this.state.kpi.options } series={ this.state.kpi.series } type="donut" />
                                        </Grid.Column>
                                        <Grid.Column width={ 16 }>
                                            <div className={ style.mes }>
                                                <div className={ style.mesTitle }>RUN民討論專區</div>
                                                <ListGroup variant="flush">

                                                    { this.state.msgL || false ? (this.state.msgL.map((placement, index) => {
                                                        return (<ListGroup.Item>
                                                            <Grid> <Grid.Row className="align-items-center" className="justify-content-center" columns={"equal"}>
                                                                <Grid.Column width={1}>
                                                                    <img src={ person } className="pimg" />
                                                                </Grid.Column>
                                                                <Grid.Column>
                                                                    <Grid> <Grid.Row className="align-items-center" className="justify-content-center" columns={"equal"}>
                                                                        <Grid.Column width={2}>
                                                                            <span className={ style.mesTitle }>{ placement.user_id }</span>
                                                                        </Grid.Column>
                                                                        <Grid.Column >
                                                                            <span className={ style.lable }>{ placement.time }</span>
                                                                        </Grid.Column>
                                                                        <Grid.Column>
                                                                            <Button className={ style.btn_report } variant="outline-secondary" onClick={ () => { this.showReport(placement.id) } }>檢舉</Button>
                                                                        </Grid.Column>
                                                                        <Grid.Column width={ 16 }>{ placement.content }</Grid.Column>
                                                                    </Grid.Row>
                                                                    </Grid>

                                                                </Grid.Column>
                                                            </Grid.Row></Grid>
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
                                        </Grid.Column>
                                    </Grid.Row></Grid>
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
