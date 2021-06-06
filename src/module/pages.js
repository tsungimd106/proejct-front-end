import React from 'react';
import { Grid, Breadcrumb } from 'semantic-ui-react'
import Nav from "./pages/nav"
import style from "../css/pages.module.css"
// import 'bootstrap/dist/css/bootstrap.min.css';

export class Pages extends React.Component {
    constructor(props) {
        super(props)
        this.state = []
    }
    componentDidMount() {
        let section = []
        if (this.props.id != 0) {
            section = [{ content: '首頁', link: true, href: "./" }]
            section.join(this.props.pageInfo)
        }
        this.setState({ section: section })
        console.log(section, this.props.pageInfo)

    }
    componentDidUpdate = (prevState) => {

        if (this.props != prevState) {
            let section = []
            if (this.props.id != 0) {
                section = [{ content: '首頁', link: true, href: "./" }]
                Array.prototype.push.apply(section, this.props.pageInfo)
                this.setState({ section: section })
            }

            console.log(section, this.props.pageInfo)
        }

    }
    render() {


        return (<>
            <div>
                <div>
                    <Nav id={ this.props.id } />

                </div>

                <div className={ style.pagesC + " " + style.content }>
                    { this.state.section == undefined ? <></> : <Breadcrumb icon='right angle' sections={ this.state.section } /> }
                    {  this.props.page  || (<></>) }
                </div>


            </div>
            <div className={ style.footer }>

                <div>Copyright© 2020-2021 政要RUN 版權所有</div>
                <div>若有商業合作需求，歡迎聯絡我們：tsungimd106@gmail.com</div>
            </div>

        </>)
    }
}

