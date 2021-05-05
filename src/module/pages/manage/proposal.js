import React from 'react';
import { ListGroup, Row, Col, Tab } from "react-bootstrap"
import { Person, Clipboard, Comment } from 'akar-icons';
import {ManageR} from "../../request/manageR"
import {ProposalR} from "../../request/proposalR"
import 'react-awesome-slider/dist/styles.css';
import {ProposalEditModal} from "../../modal"
import style from "../../../css/policy.module.css"
export default class Proposal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showEdit:false
        }
    }
    componentDidMount() {
        ProposalR.list().then(response => {
            this.setState({ data: response.data.data })
        })
    }
    edit=()=>{
        //跟後端接
    }
    showEdit=()=>{
        if(!this.state.show){
            //撈資料
        }
        this.setState({showEdit:!this.state.showEdit})
    }

    render() {
        return (<>
            <Row>
                <Col className={ style.profile }>

                    <div className={ style.data }>
                        提案管理
                        
                </div>{this.state.data&& this.state.data.map((item,index)=>{
                    return (<><p onClick={this.showEdit} className={style.topicBox}> {item.id}</p></>)
                })}

                </Col>
            </Row>
            <ProposalEditModal show={this.state.showEdit}
            ok={this.edit}
            close={this.showEdit}/>
        </>);
    }
}