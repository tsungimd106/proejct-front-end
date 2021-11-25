import React from 'react';
import logo_dark from '../../imgs/LOGO1.png'
import { Person, SignOut, Info, Envelope, Star, TextAlignJustified } from 'akar-icons';

import style from "../../css/nav.module.css"
import { Grid } from 'semantic-ui-react'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login"),
            "check": localStorage.getItem("isManage"),
            menu: false

        }
    }
    logout = () => {
        localStorage.clear()
        this.setState({ "login": false, menu: false })
        window.location.href = "./"


    }
    show = () => {
        console.log("ee")
        this.setState(prevState => ({ menu: !prevState.menu }))
    }

    render() {
        return (<>

            <Grid >
                <Grid.Row
                    verticalAlign={"middle"}
                    id={style.navtop}
                    className={style.navtop + " " + style.i_dont_know_how_to_name_it + "   "}>
                        
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 h-20 w-full">
                        <a href="./#/" class="inline-flex p-5">
                            <img class="flex object-contain object-left h-10 lg:h-full w-full" src={logo_dark} alt="" />
                        </a>                        
                        <div class="sm:flex col-start-2 col-end-5 hidden invisible lg:visible">
                            <span class="p-5 mt-5 flex content-center" ><a href="./#/" className={this.props.id === 0 ? style.pageOn : style.page} >首頁</a></span>
                            <span class="p-5 mt-5 flex content-center" ><a href="./#/election" className={this.props.id === 1 ? style.pageOn : style.page}>選舉報你知</a></span>
                            <span class="p-5 mt-5 flex content-center"><a href="./#/policy/1" className={this.props.id === 2 ? style.pageOn : style.page}>提案專區</a></span>
                            <span class="p-5 mt-5 flex content-center"><a href="./#/figure/" className={this.props.id === 3 ? style.pageOn : style.page}>政治人物</a></span>
                        </div>          
                        <div class="flex col-start-5 justify-end pt-5 mt-4 text-right text-lg lg:text-3xl"><TextAlignJustified onClick={this.show} /></div>
                    </div>


                </Grid.Row>
                <Grid.Row className={this.state.menu ? style.open : style.close} columns={2} id={style.open}>
                    <Grid.Column />


                    <Grid.Column >
                        <p><a href="./#/" className={this.props.id === 0 ? style.pageOn : ""}>首頁</a></p>
                        <p> <a href="./#/election" className={this.props.id === 1 ? style.pageOn : ""}>選舉報你知</a></p>


                        <p><a href="./#/policy/1" className={this.props.id === 2 ? style.pageOn : ""}>提案專區</a></p>
                        <p>   <a href="./#/figure/" className={this.props.id === 3 ? style.pageOn : ""}>政治人物</a></p>
                        <p>  <Envelope /> <a href="./#/" className={this.props.id === 5 ? style.pageOn : ""}>提出問題與反饋</a></p>
                        <p><Info />   <a href="./#/information/" className={this.props.id === 6 ? style.pageOn : ""}>法規與條款資訊</a></p>
                        {(this.state.login || false ? (<>

                            <p>  <Person /> <a href="./#/user/" className={this.props.id === 4 ? style.pageOn : ""}>會員檔案</a></p>

                            {this.state.check === "true" ? <p><Star />    <a href="./#/manage/" className={this.props.id === 6 ? style.pageOn : ""}>管理者</a></p> : <></>}

                            <p onClick={this.logout}>  <SignOut />   <span >登出</span></p>
                        </>) : (<>
                            <p><a href="./#/login">登入</a></p>
                            <p ><a href="./#/sign">註冊</a></p>
                        </>))}
                    </Grid.Column>


                </Grid.Row>
            </Grid>


        </>)
    }
}
