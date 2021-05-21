import React from 'react';
import { Grid } from 'semantic-ui-react'
import Nav from "./pages/nav"
import style from "../css/pages.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export class Pages extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<>
            <div className={ style.pagesC + " " }>
                <div>
                    <Nav id={ this.props.id } />
                </div>
                { this.props.page || (<></>) }
            </div>
            <div className={ style.footer }>
                <div>Copyright© 2020-2021 政要RUN 版權所有</div>
                <div>若有商業合作需求，歡迎聯絡我們：tsungimd106@gmail.com</div>
            </div>

        </>)
    }
}

