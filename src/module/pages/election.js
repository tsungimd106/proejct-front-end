import React from 'react';
import { Navbar, Nav, Jumbotron, } from "react-bootstrap"
import { Pages } from "../pages.js"
import { Grid, Button, Ref } from 'semantic-ui-react'
import 'react-awesome-slider/dist/styles.css';
import style from "../../css/election.module.css"



class Election extends React.Component {
    constructor(props) {
        super(props)
        this.voteRef = React.createRef();
        this.QARef = React.createRef();
        this.thingRef = React.createRef();
        this.searchRef = React.createRef();
        this.state = {

            imageData: [
                "https://i2.kknews.cc/SIG=v2a4sv/31pr00022o71o8p5p001.jpg",
                "https://onepage.nownews.com/sites/default/files/styles/crop_thematic_pc_banner_img/public/2020-06/FotoJet%20%2878%29.jpg?h=66dd2fea&itok=dJ1r-peX",
                "https://i2.kknews.cc/SIG=fduuh/31pq00046psp1o455n95.jpg",
                "https://i1.kknews.cc/SIG=rf6m48/31p9000467p4po554154.jpg"

            ]

        }
    }
    toVote = () => {

        this.voteRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    toQa = () => {
        this.QARef.current.scrollIntoView({ behavior: 'smooth' })
    }
    toSearch = () => {
        this.searchRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    toThing = () => {
        this.thingRef.current.scrollIntoView({ behavior: 'smooth' })
    }


    render() {
        const rate = 3
        return (<Pages id={ 1 } page={
            (<>

                <Navbar bg="light" variant="light">
                    <Nav className={ style.nav }>
                        <Nav.Link onClick={ this.toVote } >投票要點</Nav.Link>
                        <Nav.Link onClick={ this.toQa }>QA大集合</Nav.Link>
                        <Nav.Link onClick={ this.toSearch }>查詢投票地點</Nav.Link>
                        <Nav.Link onClick={ this.toThing }>選舉大記事</Nav.Link>
                    </Nav>
                </Navbar>
                <Grid>
                    <Grid.Row columns={ 2 }>
                        <Grid.Column width={ 4 }><img /></Grid.Column>
                        <Grid.Column width={ 12 }>
                            <Jumbotron>
                                <h1>選舉公告</h1>
                                <p>這裡是和選舉相關資訊的公告區</p>
                                <p>
                                    <Button color={ "teal" } variant="primary">看更多</Button>
                                </p>
                            </Jumbotron>
                        </Grid.Column>
                        <Grid.Column width={ rate }>
                            <Ref innerRef={ this.voteRef }>
                                <Button color={ "teal" } variant="secondary" size="lg" disabled >投票要點</Button>
                            </Ref>
                        </Grid.Column>
                        <Grid.Column width={16-rate}>
                            <Jumbotron>
                                <h1 >投票要點</h1>
                                <p>
                                    這裡是和投票要點,包含投票流程,投票必備品,相關影片和指南手冊
                                </p>
                            </Jumbotron>
                        </Grid.Column>
                        <Grid.Column width={ rate }>
                            <Ref innerRef={ this.QARef }>
                                <Button color={ "teal" } variant="secondary" size="lg" disabled >QA大集合</Button>
                            </Ref>
                        </Grid.Column>

                        <Grid.Column width={16-rate}>
                            <Jumbotron>
                                <h1 >QA大集合</h1>
                                <p>
                                    這裡是QA大集合,常見問題都在這~
                                </p>
                            </Jumbotron>
                        </Grid.Column>
                        <Grid.Column width={rate}>
                            <Ref innerRef={ this.searchRef }>
                                <Button color={ "teal" } variant="secondary" size="lg" disabled >查詢投票地點</Button></Ref>
                        </Grid.Column>
                        <Grid.Column width={16-rate}>
                            <Jumbotron>
                                <h1 >查詢投票地點</h1>
                                <p>
                                    在這裡查詢自己的投票地點~
                                </p>
                            </Jumbotron>
                        </Grid.Column>
                        <Grid.Column width={rate}>
                            <Ref innerRef={ this.thingRef }><Button color={ "teal" } variant="secondary" size="lg" disabled >選舉大記事</Button></Ref>
                        </Grid.Column>
                        <Grid.Column width={16-rate}>
                            <Jumbotron>
                                <h1 >選舉大記事</h1>
                                <p>這裡是選舉大記事,記錄著台灣選舉開始以來發生的大事件。 </p>
                            </Jumbotron>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>

            </>)
        } />)
    }
}





export default Election = {
    routeProps: {
        path: "/election",
        component: Election
    },
    name: "選舉專區"
}