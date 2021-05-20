import React from 'react';
import {  Row, Col} from "react-bootstrap"
import { ManageR } from "../../request/manageR"
import { Tab as TabUI, Button as BtnUI } from 'semantic-ui-react'
import 'react-awesome-slider/dist/styles.css';

import style from "../../../css/manage.module.css"
export default class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        ManageR.report().then(response => {
            console.log(response)
            this.setState({ already: response.data.data[0].data, notYet: response.data.data[1].data })
        })
    }

    render() {
        const panes = [
            {
                menuItem: '未審核', render: () => <TabUI.Pane>
                    <Row className={ style.reportBox + " justify-content-center align-items-center" }>
                        <Col sm={ 7 }><h3>檢舉留言</h3></Col>
                        <Col sm={ 3 }><h3>備註</h3></Col>
                        <Col sm={ 2 }><h3>操作</h3></Col>
                        { this.state.notYet && this.state.notYet.map((item, index) => {
                            return (<>
                                <Col sm={ 7 } >{ item.content }</Col>
                                <Col sm={ 3 }>{ item.remark }</Col>
                                <Col sm={ 2 }>
                                    <BtnUI>停權</BtnUI>
                                    <BtnUI>不停權</BtnUI>
                                </Col>
                            </>)
                        }) }
                    </Row>
                </TabUI.Pane>
            },
            {
                menuItem: '已審核', render: () => <TabUI.Pane>
                    <Row >
                        <Col sm={ 7 }><h3>檢舉留言</h3></Col>
                        <Col sm={ 3 }><h3>操作</h3></Col>
                        <Col sm={2}><h3>審核者</h3></Col>
                        {
                            this.state.already && this.state.already.map((item, index) => {
                                return (<>
                                    <Col sm={ 8 } className="">{ item.content }</Col>
                                    <Col sm={ 4 }>

                                    </Col>
                                </>)
                            })
                        }
                    </Row >
                </TabUI.Pane >
            },

        ]
        return (<>
            <TabUI menu={ { secondary: true } } panes={ panes } />
        </>);
    }
}