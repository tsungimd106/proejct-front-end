import React from 'react';
import { ListGroup, Row, Col, Tab } from "react-bootstrap"
import { Person, Clipboard, Comment } from 'akar-icons';
import 'react-awesome-slider/dist/styles.css';
import style from "../../../css/manage.module.css"
import { ManageR } from "../../request/manageR"

import { Tab as TabUI, Button as BtnUI } from 'semantic-ui-react'
export default class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        ManageR.user().then(response => {
            let item = {}
            for (let i of response.data.data) {
                item[i.name] = i.data
            }
            console.log(item)
            this.setState(item)
        })
    }
    render() {
        const panes = [
            {
                menuItem: '一般使用者', render: () => <TabUI.Pane>
                    <Row className={ style.reportBox + " justify-content-center align-items-center" }>
                        <Col sm={ 3 }><h3>帳號</h3></Col>
                        <Col sm={ 3 }><h3>姓名</h3></Col>
                        <Col sm={ 6 }><h3>操作</h3></Col>
                        

                        { this.state.user && this.state.user.map((item, index) => {
                            return (<>
                                <Col sm={ 3 } >{ item.id }</Col>
                                <Col sm={ 3 }>{ item.name }</Col>
                                <Col sm={ 6 }>
                                    <BtnUI>轉管理者</BtnUI>
                                    <BtnUI>轉政治人物</BtnUI>
                                </Col>
                            
                            </>)
                        }) }
                    </Row>
                </TabUI.Pane>
            },
            {
                menuItem: '政治人物使用者', render: () => <TabUI.Pane>
                    <Row className={ style.reportBox + " justify-content-center align-items-center" }>
                    <Col sm={ 3 }><h3>帳號</h3></Col>
                        <Col sm={ 3 }><h3>姓名</h3></Col>
                        <Col sm={ 6 }><h3>操作</h3></Col>

                        { this.state.politician && this.state.politician.map((item, index) => {
                            return (<>
                                <Col sm={ 3 } >{ item.id }</Col>
                                <Col sm={ 3 }>{ item.name }</Col>
                                <Col sm={ 6 }>
                                   
                                    <BtnUI>轉一般使用者</BtnUI>
                                </Col>
                            </>)
                        }) }
                    </Row >
                </TabUI.Pane >
            },
            {
                menuItem: '管理者', render: () => <TabUI.Pane>
                     <Row className={ style.reportBox + " justify-content-center align-items-center" }>
                    <Col sm={ 3 }><h3>帳號</h3></Col>
                        <Col sm={ 3 }><h3>姓名</h3></Col>
                        <Col sm={ 6 }><h3>操作</h3></Col>

                        { this.state.manager && this.state.manager.map((item, index) => {
                            return (<>
                                <Col sm={ 3 } >{ item.id }</Col>
                                <Col sm={ 3 }>{ item.name }</Col>
                                <Col sm={ 6 }>
                                   
                                    <BtnUI>轉一般使用者</BtnUI>
                                </Col>
                            </>)
                        }) }
                    </Row >
                </TabUI.Pane >
            },

        ]
        return (<>
            <TabUI menu={ { secondary: true } } panes={ panes } />
        </>);
    }
}