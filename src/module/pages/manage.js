import React from 'react';
import { Pages } from "../pages.js"
 import Politician from "./manage/politician"
import Check from "./manage/check"
import Article from "./manage/acrticle"
import Proposal from "./manage/proposal"
import User from "./manage/user"
import utilStyle from "../../css/util.module.css"
import {  Tab } from 'semantic-ui-react'

class Manage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "login": !!localStorage.getItem("login"),
            userName: localStorage.getItem("login"),
            items: [
                { key: "check", name: "審核檢舉", in: <Check /> },
                { key: "article", name: "廣告及公告管理", in: <Article /> },
                { key: "proposal", name: "提案管理", in: <Proposal /> },
                { key: "politician", name: "政治人物管理", in: <Politician /> },
                { key: "welcome", name: "使用者管理", in: <User /> }
            ]

        }
    }

    render() {
        return (<Pages pageInfo={ [{ content: '管理者', active: true, href: "./manage" }] }
            page={
                (<>
                    <Tab className={utilStyle.tab} menu={ { secondary: true, pointing: true, vertical: true, } } panes={ this.state.items.map((item, index) => {
                        return ({
                            menuItem: { content: item.name },
                            render: () => <Tab.Pane attached={ false }>  { item.in }</Tab.Pane>,
                        })
                    }) } />

                </>)
            } />)
    }
}







export default Manage = {
    routeProps: {
        path: "/manage",
        component: Manage
    },
    name: "管理者"
}