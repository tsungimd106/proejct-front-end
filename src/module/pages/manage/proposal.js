import React from 'react';

import { ManageR } from "../../request/manageR"
import { ProposalR } from "../../request/proposalR"
import { ProposalEditModal } from "../../modal"
import style from "../../../css/policy.module.css"
import { Grid } from 'semantic-ui-react'
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
            {/* <Grid.Row>
                <Grid.Column className={ style.profile }> */}

            <div className={style.data}>   </div>
            {this.state.data && this.state.data.map((item, index) => {
                return (<>
                <Grid>
                    <Grid.Row onClick={() => { this.showEdit(index) }} className={style.topicBox} columns={"equal"}>
                        <Grid.Column width={3}>{item.id}</Grid.Column>
                        <Grid.Column width={3}>{item.status}</Grid.Column>
                        <Grid.Column >{item.title}</Grid.Column>
                        
                   </Grid.Row></Grid> 


                </>)
            })}

            {/* </Grid.Column>
           </Grid.Row></Grid>   */}
            <ProposalEditModal show={this.state.showEdit}
                ok={this.edit}
                close={() => { this.showEdit(0) }}
                content={
                    (<>
                        {
                            this.state.detail !== undefined ? this.state.cond.map(item => {

                                return (<>
                                <Grid>
                                    <Grid.Row className=" ">
                                        <Grid.Column width={3}>
                                            {item.name}
                                        </Grid.Column>
                                        <Grid.Column>
                                            <textarea type="text" value={this.state.data[this.state.detail][item.key]} style={{ width: "100%" }} />
                                        </Grid.Column>
                                   </Grid.Row></Grid>


                                </>)
                            }) : <></>
                        }</>)

                }
            />
        </>);
    }
}