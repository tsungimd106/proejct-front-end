import React from 'react';
import { Container, Button, Dropdown, } from "react-bootstrap"
import logo_dark from '../../imgs/LOGO1.png'
import { Search, Person, CircleChevronDown, SignOut, Info, Envelope, Star } from 'akar-icons';

import style from "../../css/nav.module.css"
import { Grid } from 'semantic-ui-react'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login"),
            "check": localStorage.getItem("isManage")

        }
    }
    logout = () => {
        localStorage.clear()
        this.setState({ "login": false })
        window.location.href = "./"

    }

    render() {
        return (<>
        
               <Grid> <Grid.Row columns={"equal"}
                className={ style.navtop + " " + style.i_dont_know_how_to_name_it + " justify-content-right  align-items-center" }>
                    <Grid.Column >
                        <a href="./#/"><img className={ style.navPicture } src={ logo_dark } /></a>
                    </Grid.Column>
                    <Grid.Column />
                    <Grid.Column  >
                        <a href="./#/" className={ this.props.id == 0 ? style.pageOn : "" }>首頁</a>
                    </Grid.Column>
                    <Grid.Column >
                        <a href="./#/election" className={ this.props.id == 1 ? style.pageOn : "" }>選舉報你知</a>
                    </Grid.Column>
                    <Grid.Column  >
                        <a href="./#/policy/" className={ this.props.id == 2 ? style.pageOn : "" }>提案專區</a>
                    </Grid.Column>
                    <Grid.Column >
                        <a href="./#/figure/" className={ this.props.id == 3 ? style.pageOn : "" }>政治人物</a>
                    </Grid.Column>
                    {/* <Grid.Column > */ }
                    {/* <input className="searchbar" type="text" name="搜尋"></input> */ }
                    {/* <Search /></Grid.Column> */ }

                    { (this.state.login || false ? (<>
                        <Grid.Column >
                            <Dropdown variant="secondary" className={ style.down }
                                drop={ "left" }
                                size="lg">
                                <Dropdown.Toggle className={ style.down_btn } variant="secondary">
                                    <CircleChevronDown />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/user" className={ style.dropdown_item }>
                                       <Grid> <Grid.Row className={ " align-items-center justify-content-center" } noGutters={ false }
                                       columns={"equal"}>
                                            <Grid.Column width={ 2 }> <Person /></Grid.Column>
                                            <Grid.Column>個人檔案</Grid.Column>
                                       </Grid.Row></Grid>  
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-1" className={ style.dropdown_item }>
                                       <Grid> <Grid.Row columns={"equal"} className={ " align-items-center justify-content-center" } noGutters={ false }>
                                            <Grid.Column width={ 2 }> <Envelope /></Grid.Column>

                                            <Grid.Column>提出問題與反饋</Grid.Column>
                                       </Grid.Row></Grid>  
                                    </Dropdown.Item>
                                    <Dropdown.Item href="./#/" className={ style.dropdown_item }>
                                       <Grid> <Grid.Row columns={"equal"} className={ " align-items-center justify-content-center" } noGutters={ false }>
                                            <Grid.Column width={ 2 }> <Info /> </Grid.Column>
                                            <Grid.Column>法規與條款資訊</Grid.Column>
                                       </Grid.Row></Grid>  
                                    </Dropdown.Item>
                                    <Dropdown.Item href="./#/" className={ style.dropdown_item }>
                                       <Grid> <Grid.Row columns={"equal"} className={ " align-items-center justify-content-center" } noGutters={ false }>
                                            <Grid.Column width={ 2 }>
                                                <SignOut onClick={ this.logout } /> </Grid.Column>

                                            <Grid.Column onClick={ this.logout }> 登出</Grid.Column>
                                       </Grid.Row></Grid>  
                                    </Dropdown.Item>
                                    { this.state.check == "true" ? <Dropdown.Item href="./#/manage" className={ style.dropdown_item }>
                                       <Grid> <Grid.Row columns={"equal"} className={ " align-items-center justify-content-center" } noGutters={ false }>
                                            <Grid.Column width={ 2 }>
                                                {/* <img src={manage}/> */ }
                                                <Star /> </Grid.Column>
                                            <Grid.Column > 管理者</Grid.Column>
                                       </Grid.Row></Grid>  
                                    </Dropdown.Item> : <></> }


                                </Dropdown.Menu>
                            </Dropdown>
                        </Grid.Column>
                    </>) : (<>
                        <Grid.Column ><a href="./#/login">登入</a></Grid.Column>
                        <Grid.Column ><a href="./#/sign">註冊</a></Grid.Column>
                    </>)) }


               </Grid.Row></Grid>  
            
        </>)
    }
}
