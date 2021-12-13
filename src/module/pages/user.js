import React from 'react';
import { Pages } from "../pages.js"
import Chart from 'react-apexcharts'


import { Tab, Button, Divider, Transition, Grid, Select, Label, Segment, Icon, Table, List, Accordion, TableCell, Card } from 'semantic-ui-react'
import { TailwindModal } from "../tailwind"

import style from "../../css/user.module.css"
import utilStyle from "../../css/util.module.css"
import { ProposalR } from '../request/proposalR.js';
import { MemberR } from '../request/memberR';
import { trackPromise } from 'react-promise-tracker';
import pic from "./pic.png"
import { ModalBase, MsgModal } from '../modal.js';

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login"),
            userName: localStorage.getItem("login"),
        }
    }

    componentDidMount() {
        if (!!!localStorage.getItem("login")) {
            document.location.href = "/#"
        }
        MemberR.user(this.state.userName).then(res => {
            this.setState(res.data.D)
        })
    }

    render() {
        let items = [
            { name: "個人檔案", in: <MyProfile data={this.state.user} area={this.state.area} userName={this.state.userName} />, icon: "address card" },
            { name: "提案收藏", in: <MySave login={this.state.userName} data={this.state.save} />, icon: "heart" },
            { name: "留言紀錄", in: <MyMsgRecord userName={this.state.userName} msg={this.state.msg} />, icon: "comment" },
            { name: "提案投票紀錄", in: <MyVoteRecord userName={this.state.userName} proposal_vote={this.state.proposal_vote} />, icon: "flag" },
            { name: "政見評分紀錄", in: <MyScoreRecord userName={this.state.userName} policy_vote={this.state.policy_vote} />, icon: "tasks" }
        ]

        let pitems = [
            { name: "個人檔案", in: <Pprofile data={this.state.user} area={this.state.area} userName={this.state.userName} />, icon: "address card" },
            { name: "我的提案", in: <Pproposal userName={this.state.userName} proposal_vote={this.state.proposal_vote} />, icon: "flag" },
            { name: "我的政見", in: <Ppolitics userName={this.state.userName} policy_vote={this.state.policy_vote} />, icon: "tasks" }
        ]

        return (<Pages pageInfo={[{ content: '會員檔案', active: true, href: "./user" }]}
            page={
                (<>
                    <Tab className={utilStyle.tab} menu={{ secondary: true, pointing: true, vertical: true, }} panes={items.map(item => {
                        return ({
                            menuItem: { icon: item.icon, content: item.name },
                            render: () => <Tab.Pane attached={false}>   {item.in}</Tab.Pane>,
                        })
                    })} />

                    {/* <Tab className={utilStyle.tab} menu={{ secondary: true, pointing: true, vertical: true, }} panes={pitems.map(item => {
                        return ({
                            menuItem: { icon: item.icon, content: item.name },
                            render: () => <Tab.Pane attached={false}>   {item.in}</Tab.Pane>,
                        })
                    })} /> */}
                </>)
            } />)
    }
}
class MyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            areaShow: false, pswShow: false, classShow: false,
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
        console.log(document.getElementById("sarea"))
        MemberR.userEdit({ "area_id": this.state.value, "account": this.props.userName }).then(response => {
            console.log(response)
        })
        this.areaShow()
        return true
    }
    getArea = (event, { value }) => {
        console.log(value);
        this.setState({ areaid: value })

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
            {/* celled='internally' */}<Grid >
                <Grid.Row columns={"equal"}>
                    <Grid.Column width={16} textAlign={"center"}>
                        <img className={style.pic} src={pic} alt="" />
                    </Grid.Column>
                    <Grid.Column width={8} textAlign={"right"} className={style.data}>
                        {/* <div>
                            <TailwindModal show={ true } title={ "修改姓名" } child={ (<>
                                <input type="text" /></>) }></TailwindModal>
                        </div> */}
                        {/* <ModalBase color={ "teal" } message={ "修改姓名" } btn={ <Button className={ style.btncolor } icon labelPosition='right' color={ "teal" } size={ "medium" } content={ this.state.user && this.state.user.name } icon={ "edit" } /> } toDo={ this.editName } /> */}
                    </Grid.Column>
                    <Grid.Column width={8} textAlign={"left"} className={style.data}>
                        <ModalBase btn={<Button className={style.btncolor} icon labelPosition='right' color={"teal"} size={"medium"} content={"修改密碼"} icon={"edit"} />} labelPosition={'left'} color={"teal"} message={"修改密碼"} btnText={"修改密碼"} toDo={this.editPsw} />
                    </Grid.Column>
                </Grid.Row></Grid>

            <Card.Group itemsPerRow={2} >
                <Card>
                    <Card.Content>
                        <Card.Header>生日</Card.Header>
                        <Card.Description>{this.state.user && this.state.user.birthday}</Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>地區 <Icon name={"edit"} className={style.icon} onClick={this.areaShow} /></Card.Header>
                        <Transition visible={this.state.areaShow} animation='scale' duration={500}>
                            <div>
                                <Select id="sarea" options={this.state.area}
                                    placeholder={"請選擇你的地區"} onChange={this.getArea} />

                                <ModalBase content={"已修改地區完成"}
                                    btn={<Button icon labelPosition='left' icon={"check"} content={"確定"} className={style.sbtn} />}
                                    toDo={this.editArea} />
                            </div>
                        </Transition>
                        <Card.Description>台北市</Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>性別</Card.Header>
                        <Card.Description>{this.state.user && this.state.user.gender}</Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>興趣 <ModalBase color={"teal"} message={"修改興趣"} btn={<Icon name={"edit"} className={style.icon} />} toDo={this.editClass} /></Card.Header>
                        <Card.Description>
                            <Label.Group>
                                <Label>#交通</Label>
                                <Label>#教育</Label>
                                <Label>#醫療</Label>
                                <Label>#勞工</Label>
                                <Label>#弱勢</Label>
                                <Label>...</Label>
                            </Label.Group>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>

            {/* 政治人物個人檔案 */}
            <div>政治人物個人檔案
                {/* 第一行：基本資料 */}
                <h3>基本資料</h3>
                <div class="grid grid-rows-1 grid-cols-2 gap-4 py-4 px-8 bg-white shadow-lg rounded-lg my-3">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex justify-center">
                            <img></img>
                        </div>
                        <div class="mt-2 text-3xl font-semibold">政治人物Name</div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">John Doe</a>
                    </div>
                </div>

                {/* 第二行：分數圖表 */}
                <div class="grid grid-rows-1 grid-cols-3 gap-4 py-4 px-8 bg-white shadow-lg rounded-lg my-3">分數圖表

                </div>

                {/* 第三行：政見 */}
                <div class="grid grid-rows-1 grid-cols-2 gap-4 py-4 px-8 bg-white shadow-lg rounded-lg my-3">政見

                </div>

                {/* 第四行：提案列表及留言 */}
                <div class="grid grid-rows-1 grid-cols-1 gap-4 py-4 px-8 bg-white shadow-lg rounded-lg my-3">提案列表及留言

                </div>
            </div>

        </>);
    }
}

class Pprofile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            areaShow: false, pswShow: false, classShow: false,
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
        console.log(document.getElementById("sarea"))
        MemberR.userEdit({ "area_id": this.state.value, "account": this.props.userName }).then(response => {
            console.log(response)
        })
        this.areaShow()
        return true
    }
    getArea = (event, { value }) => {
        console.log(value);
        this.setState({ areaid: value })

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
            {/* celled='internally' */}<Grid >
                <Grid.Row columns={"equal"}>
                    <Grid.Column width={16} textAlign={"center"}>
                        <img className={style.pic} src={pic} alt="" />
                    </Grid.Column>
                    <Grid.Column width={8} textAlign={"right"} className={style.data}>
                        <Button className={style.btncolor} size={"medium"} content={this.state.user && this.state.user.name} />
                    </Grid.Column>
                    <Grid.Column width={8} textAlign={"left"} className={style.data}>
                        <ModalBase btn={<Button className={style.btncolor} icon labelPosition='right' color={"teal"} size={"medium"} content={"修改密碼"} icon={"edit"} />} labelPosition={'left'} color={"teal"} message={"修改密碼"} btnText={"修改密碼"} toDo={this.editPsw} />
                    </Grid.Column>
                </Grid.Row></Grid>

            {/* <Card.Group itemsPerRow={2} >
                <Card>
                    <Card.Content>
                        <Card.Header>生日</Card.Header>
                        <Card.Description>{this.state.user && this.state.user.birthday}</Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>地區 <Icon name={"edit"} className={style.icon} onClick={this.areaShow} /></Card.Header>
                        <Transition visible={this.state.areaShow} animation='scale' duration={500}>
                            <div>
                                <Select id="sarea" options={this.state.area}
                                    placeholder={"請選擇你的地區"} onChange={this.getArea} />

                                <ModalBase content={"已修改地區完成"}
                                    btn={<Button icon labelPosition='left' icon={"check"} content={"確定"} className={style.sbtn} />}
                                    toDo={this.editArea} />
                            </div>
                        </Transition>
                        <Card.Description>台北市</Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>性別</Card.Header>
                        <Card.Description>{this.state.user && this.state.user.gender}</Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Card.Content>
                        <Card.Header>興趣 <ModalBase color={"teal"} message={"修改興趣"} btn={<Icon name={"edit"} className={style.icon} />} toDo={this.editClass} /></Card.Header>
                        <Card.Description>
                            <Label.Group>
                                <Label>#交通</Label>
                                <Label>#教育</Label>
                                <Label>#醫療</Label>
                                <Label>#勞工</Label>
                                <Label>#弱勢</Label>
                                <Label>...</Label>
                            </Label.Group>
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group> */}

        </>);
    }
}

class Pproposal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.setState({ matches: window.matchMedia("(min-width: 768px)").matches })
    }
    render() {
        return (<>
            <Table celled><Table.Header><Table.Row>
                <Table.HeaderCell>提案標題</Table.HeaderCell>
                <Table.HeaderCell>投票立場</Table.HeaderCell>
            </Table.Row></Table.Header>
                {this.props.proposal_vote !== undefined ? this.props.proposal_vote.map((item, index) => {
                    return (<>
                        <Table.Body>
                            <Table.Row

                            // onClick={ () => { this.changePage(`PolicyContent/${item.proposal_id}`) } }
                            >
                                <Table.Cell>{item.title} </Table.Cell>
                                <Table.Cell>{item.type}</Table.Cell>
                            </Table.Row></Table.Body>
                    </>)
                }) : <></>}
            </Table>
        </>);
    }
}

class Ppolitics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.setState({})
    }
    render() {

        return (<>
            <Card.Group itemsPerRow={2} >
                {this.props.policy_vote !== undefined ? this.props.policy_vote.map((item, index) => {
                    return (<>
                        <Card>
                            <Card.Content><Card.Header>{item.content}</Card.Header></Card.Content>
                            <Card.Content>{item.c_name.map(c => { return (<Label>{c}</Label>) })}</Card.Content>

                            <Card.Content>{item.type}</Card.Content>

                        </Card>
                    </>)
                }) : <></>}
            </Card.Group>
        </>);
    }
}

class MySave extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            kpi: {
                series: [10, 50, 40],
                options: {
                    colors: ['#fec240', '#98c4d1', '#de4b43'],
                    labels: ["同意", "中立", "反對"],
                    title: {
                        text: 'Run民立場投票',
                        align: 'left',

                    },
                },
            },
        }
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
            <List divided relaxed animated>

                {
                    this.state.save !== undefined ? this.state.save.map((item, index) => {

                        return (<List.Item><Grid><>



                            <Grid.Row className={style.topicBoxBold} >
                                {/* <Grid.Column width={ 1 } /> */}
                                <Grid.Column width={11}>
                                    <div>提案人：{item.f_name.map(item => { return (<><Label >{item}</Label></>) })}</div>
                                    <h3 className={style.ellipsis}>{item.title}</h3>
                                    <div>
                                        <List horizontal>

                                            <List.Item>提案進度：{item.status}</List.Item>
                                            {item.c_name.map(item => { return (item != null ? <List.Item><Label>{item}</Label></List.Item> : <></>) })}
                                        </List>
                                    </div>

                                </Grid.Column>
                                <Grid.Column width={5} >
                                    <Chart options={this.state.kpi.options}
                                        series={this.state.kpi.series} type="donut"
                                        height="125px" />
                                </Grid.Column>
                            </Grid.Row>




                        </></Grid></List.Item>)
                    }) : <></>
                }</List>


        </>);
    }

}


class MyMsgRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
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
    close = () => { this.setState({ open: false }) }
    openDatil = (d, t) => {
        this.setState({ data: d, title: t, open: true })
    }


    render() {
        const { activeIndex } = this.state
        return (<>

            <Card.Group itemsPerRow={2}>
                {this.state.msg !== undefined ? this.state.msg.map((item, index) => {
                    return (<>
                        <Card onClick={() => this.openDatil(item.content, item.title)}>{item.title}
                            <Card.Content>
                                {/* { item.content.map(m => { return (<Label content={ m.content } />) }) } */}
                                <div>提案人：{item.f_name.map(item => { return (<><Label >{item}</Label></>) })}</div>
                                <div>{item.c_name.map(item => { return (item != null ? <Label>{item}</Label> : <></>) })}</div>
                            </Card.Content>
                        </Card>

                        {/* <Accordion.Title
                            active={ activeIndex === index }
                            index={ index }
                            onClick={ this.handleClick }
                        ><Icon name='dropdown' />{ item.title }

                        </Accordion.Title>
                        <Accordion.Content active={ activeIndex === index }>
                            <List onClick={ () => { this.changePage(`PolicyContent/${item.proposal_id}`) } } className={ utilStyle.point }>
                                { item.content.map(m => { return (<List.Item content={ m } />) }) } </List>
                        </Accordion.Content> */}

                    </>)
                }) : <></>}</Card.Group>
            <MsgModal title={this.state.title}
                data={this.state.data}
                open={this.state.open}
                close={this.close}

            />

        </>);
    }
}

class MyVoteRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.setState({ matches: window.matchMedia("(min-width: 768px)").matches })
    }
    render() {
        return (<>
            <Table celled><Table.Header><Table.Row>
                <Table.HeaderCell>提案標題</Table.HeaderCell>
                <Table.HeaderCell>投票立場</Table.HeaderCell>
            </Table.Row></Table.Header>
                {this.props.proposal_vote !== undefined ? this.props.proposal_vote.map((item, index) => {
                    return (<>
                        <Table.Body>
                            <Table.Row

                            // onClick={ () => { this.changePage(`PolicyContent/${item.proposal_id}`) } }
                            >
                                <Table.Cell>{item.title} </Table.Cell>
                                <Table.Cell>{item.type}</Table.Cell>
                            </Table.Row></Table.Body>
                    </>)
                }) : <></>}
            </Table>
        </>);
    }
}

class MyScoreRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.setState({})
    }
    render() {

        return (<>
            <Card.Group itemsPerRow={2} >
                {this.props.policy_vote !== undefined ? this.props.policy_vote.map((item, index) => {
                    return (<>
                        <Card>
                            <Card.Content><Card.Header>{item.content}</Card.Header></Card.Content>
                            <Card.Content>{item.c_name.map(c => { return (<Label>{c}</Label>) })}</Card.Content>

                            <Card.Content>{item.type}</Card.Content>

                        </Card>
                    </>)
                }) : <></>}
            </Card.Group>
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