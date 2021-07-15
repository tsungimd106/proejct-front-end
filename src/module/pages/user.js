import React from 'react';
import { Pages } from "../pages.js"
import Chart from 'react-apexcharts'


import { Tab, Button, Divider, Transition, Grid, Select, Label, Segment, Icon, Table, List, Accordion, TableCell, Card } from 'semantic-ui-react'

import style from "../../css/user.module.css"
import utilStyle from "../../css/util.module.css"
import { ProposalR } from '../request/proposalR.js';
import { MemberR } from '../request/memberR';
import { trackPromise } from 'react-promise-tracker';
import pic from "./pic.png"
import { ModalBase } from '../modal.js';

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
            console.log(d)
            this.setState(d)
        })
    }

    render() {
        let items = [
            { name: "個人檔案", in: <MyProfile data={ this.state.user } area={ this.state.area } />, icon: "address card" },
            { name: "提案收藏", in: <MySave login={ this.state.userName } data={ this.state.save } />, icon: "heart" },
            { name: "留言紀錄", in: <MyMsgRecord userName={ this.state.userName } msg={ this.state.msg } />, icon: "comment" },
            { name: "政見評分&提案投票紀錄", in: <MyVoteRecord userName={ this.state.userName } proposal_vote={ this.state.proposal_vote } policy_vote={ this.state.policy_vote } />, icon: "tasks" }
        ]

        return (<Pages pageInfo={ [{ content: '會員檔案', active: true, href: "./user" }] }
            page={
                (<>
                    <Tab className={ utilStyle.tab } menu={ { secondary: true, pointing: true, vertical: true, } } panes={ items.map(item => {
                        return ({
                            menuItem: { icon: item.icon, content: item.name },
                            render: () => <Tab.Pane attached={ false }>   { item.in }</Tab.Pane>,
                        })
                    }) } />
                </>)
            } />)
    }
}
class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            areaShow: false, pswShow: false, classShow: false,
            kpi: {
                series: [10, 50, 40],
                options: {
                    colors: ['#95c95d', '#e3e53a', '#e52125'],
                    labels: ["同意", "中立", "反對"],
                    title: {
                        text: 'Run民立場投票',
                        align: 'left',
                    },
                },
            },
            data: [
                { title: "公民投票法部分條文修正草案", tag: ["國民", "立法"], date: "2020/11/22", proposer: "王婉瑜" },

            ],
            like: {}
        }

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
    editName = () => {
        return { error: "abc", errorText: "ddd" }
    }
    editArea = () => {
        this.areaShow()
        return true
    }
    editPsw = () => {
        return true
    }
    editClass = () => {

        return { error: "abc", errorText: "ddd" }
    }



    test = () => {
        fetch("http://localhost:5000/politician/list?name='abc','name'&name=[ab,dd]", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            },

        }).then(res => res.json()).then(r => { console.log(r) })
    }
    toContent = (id) => {
        localStorage.setItem("proposal", id)
        document.location.href = `.#/policyContent/${id.id}`
    }

    render() {
        return (<>
            {/* celled='internally' */ }<Grid >
                <Grid.Row columns={ "equal" }>
                    <Grid.Column width={ 16 } textAlign={ "center" }>
                        <div><h5>大頭貼照</h5></div>
                        <img className={ style.pic } src={ pic } alt="" />
                    </Grid.Column>
                    <Grid.Column className={ style.left }>
                        <Segment className={ style.data }>
                            <h5 className={ style.topicBold }>暱稱
                                <ModalBase color={ "teal" } message={ "修改暱稱" } btn={ <Icon name={ "edit" } color={ "teal" } className={ utilStyle.point + " " + style.icon } /> } toDo={ this.editName } />
                            </h5>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={ 4 }>{ this.state.user && this.state.user.name } </Grid.Column>
                                    {/* <Grid.Column width={ 7 }><ModalBase color={ "teal" } message={ "修改暱稱" } btn={ "修改暱稱" } toDo={ this.editName } /></Grid.Column> */ }
                                </Grid.Row></Grid>
                        </Segment>
                        <Segment className={ style.fixheight }>
                            <h5 className={ style.topicBold }>生日</h5>
                            <div>{ this.state.user && this.state.user.birthday }</div>
                        </Segment>
                        <Segment className={ style.fixheight }>
                            <h5 className={ style.topicBold }>性別</h5>
                            <div>{ this.state.user && this.state.user.gender }</div>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment className={ style.data }><Grid><Grid.Row>
                            <Grid.Column width={ 16 }><h5 className={ style.topicBold }>地區
                                <Icon name={ "edit" } color={ "teal" } className={ style.icon } onClick={ this.areaShow } />

                                <Transition visible={ this.state.areaShow } animation='scale' duration={ 500 }>
                                    <div>
                                        <Select options={ this.state.area } placeholder={ "請選擇你的地區" } />

                                        <ModalBase content={ "已修改地區完成" } btnText={ "確定" } toDo={ this.editArea } color='green' />
                                    </div>
                                </Transition></h5></Grid.Column>
                            <Grid.Column width={ 4 }><span>台北市</span></Grid.Column>
                            <Grid.Column width={ 7 }>

                            </Grid.Column>
                        </Grid.Row></Grid></Segment>

                        <Segment className={ style.fixheight }><Grid><Grid.Row>
                            <Grid.Column width={ 16 }><h5 className={ style.topicBold }>興趣
                                <ModalBase color={ "teal" } message={ "修改興趣" } btn={ <Icon name={ "edit" } color={ "teal" } className={ style.icon } /> } toDo={ this.editClass } /></h5></Grid.Column>
                            <Grid.Column width={ 16 } className={ style.label }>
                                <Label.Group>
                                    <Label>#交通</Label>
                                    <Label>#教育</Label>
                                    <Label>#醫療</Label>
                                    <Label>#勞工</Label>
                                    <Label>#弱勢</Label>
                                    <Label>...</Label>
                                </Label.Group>
                            </Grid.Column>

                        </Grid.Row></Grid></Segment>
                        <Segment className={ style.fixheight }>
                            <ModalBase btn={ <Button basic icon={ "edit" } color={ "teal" } size={ "mini" } content={ "修改密碼" } /> } labelPosition={ 'left' } color={ "teal" } message={ "修改密碼" } btnText={ "修改密碼" } toDo={ this.editPsw } />
                        </Segment>

                    </Grid.Column>
                </Grid.Row></Grid>

        </>);
    }
}

class MySave extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        console.log(this.props.data)
        this.setState({ save: this.props.data })
    }

    componentWillReceiveProps(newState) {
        console.log(newState)
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

                    return (<Grid><>

                        <List.Item onClick={ () => { } }>

                            <Grid.Row className={ style.topicBoxBold } columns={ 3 }>
                                <Grid.Column width={ 1 } />
                                <Grid.Column width={ 11 }>
                                    {/* <div>提案人：{ item.proposer.map(item => { return (<><Label >{ item }</Label></>) }) }</div> */ }
                                    <h3 className={ style.ellipsis }>{ item.title }</h3>
                                    <div>
                                        <List horizontal>

                                            <List.Item>提案進度：{ item.status }</List.Item>
                                            {/* { item.category.map(item => { return (item != null ? <List.Item><Label>{ item }</Label></List.Item> : <></>) }) } */ }
                                        </List>
                                    </div>

                                </Grid.Column>
                                <Grid.Column width={ 4 } >
                                    {/* <Chart options={ this.state.kpi.options }
                                            series={ this.state.kpi.series } type="donut"
                                            height="125px" /> */}
                                </Grid.Column>
                            </Grid.Row>

                        </List.Item>


                    </></Grid>)
                }) : <></>
            }


        </>);
    }

}


class MyMsgRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.setState({ msg: this.props.msg })
        console.log(this.props.msg)
    }
    changePage = (url) => {
        const path = `${window.location.href.split("/user")[0]}/${url}`
        window.location.href = path
    }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state
        return (<>

            <Accordion>
                { this.state.msg !== undefined ? this.state.msg.map((item, index) => {
                    return (<>

                        <Accordion.Title
                            active={ activeIndex === index }
                            index={ index }
                            onClick={ this.handleClick }
                        ><Icon name='dropdown' />{ item.title }

                        </Accordion.Title>
                        <Accordion.Content active={ activeIndex === index }>
                            <List onClick={ () => { this.changePage(`PolicyContent/${item.proposal_id}`) } } className={ utilStyle.point }>
                                { item.content.map(m => { return (<List.Item content={ m } />) }) } </List>
                        </Accordion.Content>

                    </>)
                }) : <></> }</Accordion>

        </>);
    }
}

class MyVoteRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.setState({})
    }
    changePage = (url) => {
        const path = `${window.location.href.split("/user")[0]}/${url}`
        window.location.href = path
    }
    render() {
        const panes = [
            {
                menuItem: '提案投票', render: () => <Tab.Pane>
                    <Table celled><Table.Header><Table.Row>
                        <Table.HeaderCell>提案標題</Table.HeaderCell>
                        <Table.HeaderCell>投票立場</Table.HeaderCell>
                    </Table.Row></Table.Header>
                        { this.props.proposal_vote !== undefined ? this.props.proposal_vote.map((item, index) => {
                            return (<>
                                <Table.Body>
                                    <Table.Row

                                    // onClick={ () => { this.changePage(`PolicyContent/${item.proposal_id}`) } }
                                    >
                                        <Table.Cell>{ item.title } </Table.Cell>
                                        <Table.Cell>{ item.type }</Table.Cell>
                                    </Table.Row></Table.Body>
                            </>)
                        }) : <></> }
                    </Table></Tab.Pane>
            },

            {
                menuItem: '政見評分', render: () => <Tab.Pane>
                    <Card.Group itemsPerRow={ 2 } >
                        { this.props.policy_vote !== undefined ? this.props.policy_vote.map((item, index) => {
                            return (<>
                                <Card>
                                    <Card.Content><Card.Header>{ item.content }</Card.Header></Card.Content>
                                    <Card.Content>{item.c_name.map(c=>{return(<Label>{c}</Label>)})}</Card.Content>
                                    
                                    <Card.Content>{item.type}</Card.Content>
                                    
                                </Card>
                            </>)
                        }) : <></> }
                    </Card.Group>
                </Tab.Pane>
            },

        ]
        return (<>
            <Tab menu={ { secondary: true } } panes={ panes } />
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