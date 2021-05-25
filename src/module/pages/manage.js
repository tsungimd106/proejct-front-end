import React from 'react';
import { Pages } from "../pages.js"
import { Person, Clipboard, Comment } from 'akar-icons';
import Politician from "./manage/politician"
import Check from "./manage/check"
import Article from "./manage/acrticle"
import Proposal from "./manage/proposal"
import User from "./manage/user"
import 'react-awesome-slider/dist/styles.css';
import style from "../../css/user.module.css"
import { Grid, Tab } from 'semantic-ui-react'

class Manage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
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
        return (<Pages page={
            (<>
                <Tab menu={ { secondary: true, pointing: true, vertical: true, } } panes={ this.state.items.map((item, index) => {
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