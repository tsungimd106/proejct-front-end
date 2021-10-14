import React from 'react';
import { MemberR } from "../request/memberR.js"
import { ModalBase } from "../modal"
import logo from '../../imgs/LOGO.jpg'
import style from "../../css/sign.module.css"
import { trackPromise } from 'react-promise-tracker';
import { Grid, Button, Input, Image, Select, Segment, Form } from 'semantic-ui-react'
class Base extends React.Component {

    render() {
        return (<>

            <Grid textAlign={ "center" }   >
                <Grid.Row  >
                    <Grid.Column width={ 8 } only={ "computer tablet" }  >
                        <div className={ style.back } ></div>
                    </Grid.Column>
                    {/* <Grid.Column width={ 1 } only="computer tablet"></Grid.Column> */ }
                    <Grid.Column width={ 8 } mobile={ 14 } computer={ 8 } tablet={ 8 } className={ style.backC } textAlign={ "center" } verticalAlign={ "middle" }>
                        <div className={ style.homeKey } >
                            <a href="./#/"><Image src={ logo } className={ style.homeKey } /></a>
                        </div>
                        <div>
                            { this.props.content }
                        </div>

                    </Grid.Column>
                    {/* <Grid.Column width={ 1 } only="computer tablet"></Grid.Column> */ }
                </Grid.Row></Grid>


        </>)
    }
}

class Sign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": "",
            city: [
                { key: 'af', value: 'af', text: '基隆市' },
                { key: 'ax', value: 'ax', text: '台北市' },
                { key: 'al', value: 'al', text: '新北市' },
                { key: 'dz', value: 'dz', text: '桃園市' },
                { key: 'as', value: 'as', text: '新竹縣' },
                { key: 'ad', value: 'ad', text: '新竹市' },
                { key: 'ao', value: 'ao', text: '苗栗縣' },
            ]
        }
    }

    send = () => {
        window.location.href = "./#/sign2"
    }

    sendLine = () => {
        document.location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656404446&scope=profile%20openid&redirect_uri=https://test1022ntubimd.herokuapp.com/lineLogin&state=12345abcde"
    }

    showinfo = (msg) => {
        this.setState({ showinfo: !this.state.showinfo, message: msg })
    }

    render() {
        return (<Base content={ < >
            <Grid centered textAlign={ "center" } >
                <Grid.Row >
                    <Grid.Column width={ 12 } textAlign={ "center" }>
                        <Segment raised >
                            <p><Input placeholder='帳號' id="account" /></p>
                            <p><Input type="password" placeholder="密碼" id="password" /></p>
                            <p><Input type="password" placeholder="確認密碼" id="checkpsd" /></p>
                            <p><Input type="text" placeholder="暱稱" id="name" /></p>
                            <p className={ style.birth }>生日：<Input className={ style.birth } type="date" />
                                <Select id="city" placeholder="居住地" options={ this.state.city } /></p>
                            <p className={ style.csign }>
                                點擊「繼續註冊」即表示你同意我們的 <a href="./#/information/" target="_blank">《服務條款》</a>、
                                <a href="./#/information/" target="_blank">《資料政策》</a>和<a href="./#/information/" target="_blank">《Cookie 政策》</a>。
                            </p>
                            <p><Button id="continue" variant="secondary" className={ style.continue } onClick={ this.send } >繼續註冊</Button></p>
                            <p><Button color="green" onClick={ this.sendLine } className={ style.continue }>以LINE帳號註冊</Button></p>
                            <a href="./#/login">已有帳號  &nbsp; &nbsp; <h5>登入</h5></a>
                        </Segment>

                    </Grid.Column>
                    <Grid.Column width={ 6 }>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </ > }></Base>)
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": ""
        }
    }

    send = () => {
        var account = document.getElementById("account").value
        var password = document.getElementById("password").value
        trackPromise(
            MemberR.login({ "account": account, "password": password }).then(response => {
                console.log(response.data.data.data)
                localStorage.setItem("login", account)
                localStorage.setItem("isManage", response.data.data.data[0].identity === 2)
                window.location.href = "./#/"

            })
        )
    }

    sendLine = () => {
        document.location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656404446&scope=profile%20openid&redirect_uri=https://test1022ntubimd.herokuapp.com/lineLogin&state=12345abcde"
    }

    render() {
        return (<Base content={ <div className={ style.need_to_center }>
            <Grid textAlign={ "center" }> <Grid.Row>
                <Grid.Column computer={ 10 } tablet={ 13 } mobile={ 16 }>
                    <Segment raised padded>
                        <Form.Group>
                            <p><Input focus placeholder="帳號" id="account" /></p>
                            <p><Input type="password" focus placeholder="密碼" id="password" /></p>
                            <p>   <Button id="continue" className={ style.loginBtn } onClick={ this.send }>登入</Button></p>
                            <p><Button color='green' className={ style.loginBtn } onClick={ this.sendLine }>以LINE帳號登入</Button></p>
                        </Form.Group>
                        <a href="./#/sign" >沒有帳號  &nbsp; &nbsp; <h5>註冊</h5></a>
                    </Segment>
                </Grid.Column>
            </Grid.Row></Grid>
        </div> }></Base>)
    }
}

class SignNext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": "",
        }
    }

    componentDidMount() {
        let d = ["財政金融", "教育", "內政", "司法及法制", "科技", "觀光", "國防", "食品安全", "長期照顧",
            "衛生社福", "農業", "交通", "海洋", "性別平等", "動物保育", "原住民", "外交", "兩岸關係", "高齡化",
            "幼托育兒", "年改", "基礎建設", "拒毒品", "客家", "治安", "都市發展", "補助", "都市美化", "汽機車",
            "環保", "體育賽事", "勞工就業", "青年", "文創", "新住民",]
        let istoggle = []
        d.forEach(() => istoggle.push(false))
        this.setState({ sub: d, isToggleOn: istoggle })
    }

    send = () => {
        window.location.href = "./#/"
    }

    handleClick = (index) => {
        this.setState(prevState => {
            let copy = prevState
            if ("isToggleOn" in copy) {
                copy["isToggleOn"][index] = !copy["isToggleOn"][index]
            }
            return copy
        });
    }

    render() {
        return (<Base content={ <div className={ style.need_to_center }>
            <Segment className={ style.formSBg }>
                <p className={ style.rule }>請選擇有興趣的類別：</p>
                <div>
                    {

                        this.state.sub !== undefined ? this.state.sub.map((item, index) => {
                            return (<Button onClick={ () => { this.handleClick(index) } } className={ (this.state.isToggleOn[index] ? style.selected : style.subBtn) } size='mini'  >{ item }</Button>)
                        }) : <>no non no </>



                    }
                </div>
                <p><Button id="continue" className={ style.selected } onClick={ this.send }>確認註冊</Button></p>
            </Segment>
        </div> }></Base>)
    }
}

export const sign = {
    routeProps: {
        path: "/sign",
        component: Sign
    },
    name: "註冊"
}

export const signNext = {
    routeProps: {
        path: "/sign2",
        component: SignNext
    },
    name: "註冊2"
}

export const login = {
    routeProps: {
        path: "/login",
        component: Login
    },
    name: "登入"
}