import React from 'react';
import { MemberR } from "../request/memberR.js"
import { ModalBase } from "../modal"
import logo from '../../imgs/LOGO.jpg'
import home_icon from '../../imgs/homeKey.png'
import logo_dark from '../../imgs/LOGO1.png'
import back from "../../imgs/login.jpg"
import style from "../../css/sign.module.css"
import { trackPromise } from 'react-promise-tracker';
import { Grid, Button, Checkbox, Input, Image, Select,Segment } from 'semantic-ui-react'
class Base extends React.Component {

    render() {
        let enough_height = window.innerHeight >= 576

        return (<>
            <div className={ style.back } ><img ></img></div>
            <div className={ style.form }>

                <Grid textAlign={ "center" } verticalAlign={ "middle" } > <Grid.Row  >
                    {/* <Grid.Column width={ 6 } xs={ 12 } className={ style.left }>
                    <h4>Welcome</h4>
                    <h6>__</h6>
                    { enough_height && <img src={  logo_light } alt="" /> }
                </Grid.Column> */}
                    <Grid.Column className={ style.homeKey } > <a href="./#/"><Image src={ logo } className={ style.homeKey }/></a></Grid.Column>
                    <Grid.Column width={ 16 } className={ style.backC } >

                        { this.props.content }
                    </Grid.Column>
                </Grid.Row></Grid>
            </div>


        </>)
    }
}

class Sign extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": "",
            city : [
                { key: 'af', value: 'af', text: '基隆市' },
                { key: 'ax', value: 'ax', text: '台北市' },
                { key: 'al', value: 'al', text: '新北市' },
                { key: 'dz', value: 'dz', text: '桃園市' },
                { key: 'as', value: 'as', text: '新竹縣' },
                { key: 'ad', value: 'ad', text: '新竹市'},
                { key: 'ao', value: 'ao', text: '苗栗縣' },
            ]
        }
    }

    send = () => {
        window.location.href = "./#/sign2"
    }

    sendLine = () =>{
        document.location.href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656404446&scope=profile%20openid&redirect_uri=https://test1022ntubimd.herokuapp.com/lineLogin&state=12345abcde"
    }

    showinfo = (msg) => {
        this.setState({ showinfo: !this.state.showinfo, message: msg })
    }

    render() {
        return (<Base content={ < >
             
            <Grid className={style.formSBg}>
                <Grid.Row columns={ 2 }>
                    <Grid.Column>
                        <p><Input placeholder='帳號' id="account" /></p>                        
                        <p><Input type="password" placeholder="密碼" id="password" /></p>
                        <p><Input type="password" placeholder="確認密碼" id="checkpsd" /></p>
                        <p><Input type="text" placeholder="暱稱" id="name" /></p>                        
                    </Grid.Column>
                    <Grid.Column>
                        <p >出生日期<Input type="date" placeholder="出生日期"/></p>
                        <p><Select id="city" placeholder="居住地" options={this.state.city}/></p>
                        <p><Button id="continue" variant="secondary" className={ style.continue } onClick={ this.send } >繼續</Button></p>
                        <p><Button color="green" onClick={ this.sendLine } className={ style.continue }>以LINE帳號註冊</Button></p>
                        <a href="./#/login">已有帳號  &nbsp; &nbsp; <h5>登入</h5></a>
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

    sendLine = () =>{
        document.location.href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656404446&scope=profile%20openid&redirect_uri=https://test1022ntubimd.herokuapp.com/lineLogin&state=12345abcde"
    }

    render() {
        return (<Base content={ <div className={ style.need_to_center }>
            <Grid className={style.formLBg}> <Grid.Row>
                <Grid.Column width={ 16 } className={ style.login_1 }>
                    <Input focus placeholder="帳號" id="account" />
                </Grid.Column>
                <Grid.Column width={ 16 } className={ style.login_5 }>
                    <Input type="password" focus placeholder="密碼" id="password" />
                </Grid.Column>
                {/* <Grid.Column xs={ 12 }>忘記密碼</Grid.Column> */ }
                <Grid.Column width={ 16 } className={ style.login_1 }>
                    <Button id="continue" className={ style.loginBtn} onClick={ this.send }>登入</Button>
                </Grid.Column>
                <Grid.Column width={ 16 } className={ style.login_1 }>
                    <Button color='green' className={ style.loginBtn } onClick={ this.sendLine }>以LINE帳號登入</Button>
                </Grid.Column>
                {/* <Grid.Column xs={12}>忘記密碼</Grid.Column> */ }
                <Grid.Column width={ 16 }><a href="./#/sign" >沒有帳號  &nbsp; &nbsp; <h5>註冊</h5></a>
                </Grid.Column>
            </Grid.Row></Grid>

            {/* <p><input type="text" placeholder="&nbsp;帳號" id="account" /></p>
            <p><input type="password" placeholder="&nbsp;密碼" id="password" /></p>
            <p><i>忘記密碼</i></p> */}
            {/* <p><Button id="continue" className={ style.continue } onClick={ this.send }>繼續</Button></p>
            <p><Button variant="success" >以LINE帳號登入</Button></p> */}
            {/* <a href="./#/sign">沒有帳號  &nbsp; &nbsp; <h5>註冊</h5></a> */ }

        </div> }></Base>)
    }
}

class SignNext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "showInfo": false,
            "message": ""
        }
    }
    send = () => {
        window.location.href = "./#/selectSubject"
    }

    render() {
        return (<Base content={ <div className={ style.need_to_center }>
            <center><p id="rule">我們絕不會將您的個資販售給廣告商，且除非您授予我們特定權限，否則我們也不會與廣告商分享可識別您個人身分的資訊（例如姓名、電子郵件地址或其他聯絡資訊）。 然而廣告商可以告知我們想要顯示廣告的目標受眾類型，我們再針對可能會感興趣的對象顯示他們的廣告。 我們為廣告商提供廣告成效報告，協助他們瞭解用戶與廣告內容的互動情形。 請參考後續第 2 節瞭解詳情。</p></center>
            <Checkbox className={ style.agree } label='我同意以上內容' />
            <p><Button id="continue" className={ style.continue } onClick={ this.send }>確認註冊</Button></p>
            <ModalBase
                show={ this.state.showinfo }
                close={ () => { this.showinfo() } }
                ok={ () => { this.showinfo() } }
                message={ this.state.message }
            />
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