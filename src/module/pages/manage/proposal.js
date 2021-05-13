import React from 'react';
import { ListGroup, Row, Col, Tab } from "react-bootstrap"
import { Person, Clipboard, Comment } from 'akar-icons';
import { ManageR } from "../../request/manageR"
import { ProposalR } from "../../request/proposalR"
import 'react-awesome-slider/dist/styles.css';
import { ProposalEditModal } from "../../modal"
import style from "../../../css/policy.module.css"
import { trackPromise } from 'react-promise-tracker';

export default class Proposal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEdit: false,
            cond: [
                { "key": "id", name: "編號" },
                { key: "term", name: "屆別" },
                { key: "session_Period", name: "會期" },
                { key: "session_Time", name: "會次" },
                { key: "title", name: "標題" },
                { key: "status_id", name: "狀態" },
                { key: "pdfUrl", name: "附件" },
            ]
        }
    }
    componentDidMount() {
        trackPromise(
            ProposalR.list().then(response => {
                this.setState({ data: response.data.data })
            })
        )

    }
    edit = () => {
        //跟後端接
    }
    showEdit = (i) => {
        if (!this.state.show) {
            this.setState({ detail: i })
        }
        console.log(this.state.data[i])
        this.setState({ showEdit: !this.state.showEdit })
    }

    render() {
        return (<>
            {/* <Row>
                <Col className={ style.profile }> */}

            <div className={style.data}>   </div>
            {this.state.data && this.state.data.map((item, index) => {
                return (<>
                    <Row onClick={() => { this.showEdit(index) }} className={style.topicBox}>
                        <Col sm={"auto"}>{item.id}</Col>
                        <Col sm={"auto"}>{item.status}</Col>
                        <Col >{item.title}</Col>
                        
                    </Row>


                </>)
            })}

            {/* </Col>
            </Row> */}
            <ProposalEditModal show={this.state.showEdit}
                ok={this.edit}
                close={() => { this.showEdit(0) }}
                content={
                    (<>
                        {
                            this.state.detail != undefined ? this.state.cond.map(item => {

                                return (<>
                                    <Row className="justify-content-center align-items-center">
                                        <Col sm={3}>
                                            {item.name}
                                        </Col>
                                        <Col>
                                            <textarea type="text" value={this.state.data[this.state.detail][item.key]} style={{ width: "100%" }} />
                                        </Col>
                                    </Row>


                                </>)
                            }) : <></>
                        }</>)

                }
            />
        </>);
    }
}