import React from 'react';
import { Pages } from "../pages.js"
import { ListGroup, Row, Col, Tab } from "react-bootstrap"
import { Tab as TabUI, Button as BtnUI, Divider as DividerUI, Transition as TransitionUI, Select as SelectUI } from 'semantic-ui-react'
import { Person, Clipboard, Comment } from 'akar-icons';
import 'react-awesome-slider/dist/styles.css';
import style from "../../css/user.module.css"
import { ProposalR } from '../request/proposalR.js';
import { MemberR } from '../request/memberR';
import 'semantic-ui-css/semantic.min.css'
import { trackPromise } from 'react-promise-tracker';
import pic from "./pic.png"
import { ModalBaseUI } from '../modal.js';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login"),
            userName: localStorage.getItem("login"),
        }
    }
    componentDidMount() {
        MemberR.user(this.state.userName).then(res => {
            let d = {}
            console.log(res)
            for (let i of res.data.data) {
                d[i.name] = i.data
            }
            this.setState(d)
        })
    }

    render() {


        return (<Pages page={
            (<>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="f">
                    <Row>
                        <Col sm={ 2 }>
                            <ListGroup>
                                <ListGroup.Item eventKey="f" className={ style.select }>
                                    <div><Person /></div>
                                    <div>我的個人檔案</div>
                                </ListGroup.Item>
                                <ListGroup.Item eventKey="s" className={ style.select }>
                                    <div><Clipboard /></div>
                                    <div>我的收藏</div>
                                </ListGroup.Item>
                                <ListGroup.Item eventKey="t" className={ style.select }>
                                    <div><Comment /></div>
                                    <div>我的留言&投票紀錄</div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={ 10 }>
                            <Tab.Content>
                                <Tab.Pane eventKey="f">
                                    <MyProfile data={ this.state.user } area={ this.state.area } />
                                </Tab.Pane>
                                <Tab.Pane eventKey="s">
                                    <MySave login={ this.state.userName } data={ this.state.save } />
                                </Tab.Pane>
                                <Tab.Pane eventKey="t">
                                    <MyRecord userName={ this.state.userName } msg={ this.state.msg } />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </>)
        } />)
    }
}
class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = { areaShow: false, pswShow: false, classShow: false }

    }
    componentWillReceiveProps(newState) {
        console.log(newState)
        let area = []
        for (let a of newState.area) {
            area.push({ key: a.id, value: a.id, text: a.name })
        }
        this.setState({ user: newState.data[0], area: area })
    }
    areaShow = () =>
        this.setState((prevState) => ({ areaShow: !prevState.areaShow }))

    pswShow = (show) => this.setState({ pswShow: show })
    editPsw = () => {

    }

    render() {
        return (<>
            <Row>
                <Col >
                    <div><h5>大頭貼照</h5></div>
                    <img className={ style.pic } src={ pic } alt="" />
                    <div className={ style.data }>
                        <h5 className={ style.topicBold }>暱稱</h5>
                        <div>{ this.state.user && this.state.user.name }</div>
                    </div>
                    <div className={ style.data }>
                        <h5 className={ style.topicBold }>生日</h5>
                        <div>{ this.state.user && this.state.user.birthday }</div>
                    </div>
                    <div className={ style.data }>
                        <h5 className={ style.topicBold }>性別</h5>
                        <div>{ this.state.user && this.state.user.gender }</div>
                    </div>
                </Col>
                <Col>

                    <BtnUI content={ "修改地區" } onClick={ this.areaShow } />
                    <DividerUI hidden />
                    <TransitionUI visible={ this.state.areaShow } animation='scale' duration={ 500 }>
                        <div>
                            <SelectUI options={ this.state.area } placeholder={ "請選擇你的地區" } />
                            <BtnUI content={ "確定" } color='green' />

                        </div>

                    </TransitionUI>

                    <p><BtnUI>修改興趣</BtnUI></p>
                    <p><BtnUI>修改密碼</BtnUI></p>
                </Col>
            </Row>
            <ModalBaseUI  />
        </>);
    }
}

class MySave extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillReceiveProps(newState) {
        this.setState({ save: newState.data })
    }
    changePage = (url) => {
        const path = `${window.location.href.split("/user")[0]}/${url}`
        window.location.href = path
    }
    render() {
        return (<>

            {
                this.state.save !== undefined ? this.state.save.map((item, index) => {
                    console.log(item)
                    return (<>
                        <div onClick={ () => { this.changePage(`PolicyContent/${item.proposal_id}`) } }>{ item.title }</div>
                    </>)
                }) : <></>
            }


        </>);
    }



}

class MyRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentWillReceiveProps(newState) {
        this.setState({ msg: newState.msg })
    }
    changePage = (url) => {
        const path = `${window.location.href.split("/user")[0]}/${url}`
        window.location.href = path
    }
    render() {
        const panes = [
            { menuItem: '投票', render: () => <TabUI.Pane></TabUI.Pane> },
            {
                menuItem: '留言', render: () => <TabUI.Pane>

                    { this.state.msg != undefined ? this.state.msg.map((item, index) => {
                        return (<>
                            <Row onClick={ () => { this.changePage(`PolicyContent/${item.proposal_id}`) } }>
                                <Col>{ item.title } </Col>
                                <Col>{ item.content }</Col>
                            </Row>

                        </>)
                    }) : <></> }
                </TabUI.Pane>
            },

        ]
        return (<>
            <TabUI menu={ { secondary: true } } panes={ panes } />


        </>);
    }
}





export default User = {
    routeProps: {
        path: "/user",
        component: User
    },
    name: "個人檔案"
}