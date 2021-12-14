import React from 'react';
import { render } from 'react-dom'
import { Pages } from "../pages.js"
import Chart from 'react-apexcharts'
import Thermometer from 'react-thermometer-component'


import { Tab, Button, Divider, Transition, Grid, Select, Label, Segment, Icon, Table, List, Accordion, TableCell, Card } from 'semantic-ui-react'
import { TailwindModal } from "../tailwind"

import style from "../../css/user.module.css"
import utilStyle from "../../css/util.module.css"
import { ProposalR } from '../request/proposalR.js';
import { MemberR } from '../request/memberR';
import { PoliticianR } from "../request/politicianR"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
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
        this.figureID = this.props.match.params.id
        trackPromise(
            PoliticianR.detail(this.figureID).then(res => {

                let resData = res.data.D
                let cond = [{ no: "degree", name: "學歷" }, { no: "tel", name: "電話" }]
                let selfD = []
                cond.forEach(placement => {
                    if (placement["no"] in resData.detail[0]) {
                        selfD.push({
                            "content": resData.detail[0][placement.no].replace(/;/g, " <br />"),
                            "title": placement.name
                        })
                        document.getElementById(placement.no).innerHTML = resData.detail[0][placement.no]
                            .replace(/;/g, " <br />").replace(/,/g, " <br />")

                    }
                })
                //政見分數
                for(let i in resData.trend_policy_group){
                    let item =resData.trend_policy_group[i]
                }
                this.setState({
                    policy: resData.policy,
                    name: resData.detail[0].name,
                    area: resData.detail[0].e_n,
                    experience: resData.detail[0].experience.split("\n"),
                    areaReamrk: resData.detail[0].remark.replace("null", ""),
                    photo: resData.detail[0].photo,
                    table: resData.table_policy,
                    tableDetail: resData.table_policyDetail,
                    score: resData.count_score[0]["score"],
                    proposal_quota: resData.proposal_quota[0]["quota"],
                    proposal: resData.proposal,
                })
                console.log(resData)

            }), error => { console.log(error) }
        )
    
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

    // 政治人物個人檔案


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
                <Segment><div class="grid grid-rows-1 grid-cols-2 gap-4 p-4 bg-white my-3">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex justify-center">
                            <img className={style.pic} src={pic} />
                        </div>
                        <div class="items-center self-center mt-2 text-3xl font-semibold">政治人物Name</div>
                    </div>
                    <div class="grid grid-cols-4 grid-row-5 gap-4 text-center">
                        <div title="聯絡政要RUN：tsungimd106@gmail.com" class="col-start-4 col-end-4 row-start-1 row-end-1 cursor-pointer" slot="avatar">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info w-5 h-5 mx-2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                        </div>

                        <div class="col-start-1 col-end-3 row-start-2 row-end-4">
                            <div class="inline-flex items-center float-right justify-items-end bg-white leading-none text-black rounded-full p-2 shadow text-sm">
                                <span class="inline-flex bg-black text-white rounded-full h-6  px-3 justify-center items-center text-">選區</span>
                                <span class="inline-flex px-2">台北市</span>
                            </div>
                        </div>

                        <div class="col-start-3 col-end-5 row-start-2 row-end-4">
                            <div class="inline-flex items-center float-left bg-white leading-none text-black rounded-full p-2 shadow text-sm">
                                <span class="inline-flex bg-black text-white rounded-full h-6 px-3 justify-center items-center text-">委員會</span>
                                <span class="inline-flex px-2">內政</span>
                            </div>
                        </div>

                    </div>
                </div></Segment>

                {/* 第二行：分數圖表 */}
                <Segment><div class="grid grid-rows-1 grid-cols-3 gap-4 p-4 bg-white my-3">
                    <div><p class="text-center">政見評分分數</p>
                        <div class="h-full flex" onClick={() => this.renderRow("policy")}>
                            <div title="您在乎的政治人物有履行政見承諾嗎？
                                        政要RUN整合投票數據，並將運算過程公布此區，讓您更清楚了解分數來由。"
                            class="self-center pb-10">
                                <CircularProgressbar value={this.state.score * 100} text={`${parseInt(this.state.score * 100)}`} styles={buildStyles({
                                    strokeLinecap: "butt",
                                    pathColor: "#FEC240",
                                    textColor: "#000"
                                })} />
                            </div>
                        </div>
                    </div>
                    <div><p class="text-center">正負向比例</p>
                        <Thermometer className={style.thermometer}
                            theme="light"
                            value="88"
                            max="100"
                            steps="4"
                            format="%"
                            size="large"
                            height="300"
                            width="200"
                        />
                    </div>
                    <div><p class="text-center">圓餅圖</p></div>

                </div></Segment>

                {/* 第三行：政見 */}
                <div class="grid grid-rows-1 grid-cols-2 gap-4 p-4 bg-white my-3">政見

                </div>

                {/* 第四行：提案列表及留言 */}
                <div class="grid grid-rows-1 grid-cols-1 gap-4 p-4 bg-white my-3">提案列表及留言

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