import React from 'react';
import { InputGroup, FormControl, Button } from "react-bootstrap"
import Selector from '../mutiSelect/mutiSelect';
import 'react-awesome-selector/dist/style.css';
import { Pages } from "../pages.js";
import Chart from 'react-apexcharts'
import 'react-awesome-slider/dist/styles.css';
import style from "../../css/policy.module.css"
import { ProposalR } from "../request/proposalR"
import Search from "../bar/search"
import { trackPromise } from 'react-promise-tracker';
import { Grid } from 'semantic-ui-react'

class Policy extends React.Component {

    data = [

    ]


    constructor(props) {
        super(props)

        trackPromise(
            ProposalR.list().then(response => {
                console.log(response)
                this.setState({ Sdata: response.data.data })

            })
        )


        this.state = {
            kpi: {
                series: [10, 50, 40],
                options: {
                    colors: ['#95c95d', '#e3e53a', '#e52125'],
                    labels: ["同意", "中立", "反對"],
                    title: {
                        text: 'Run民立場投票',
                        align: 'left',

                    },

                },
            },
            data: [
                { title: "公民投票法部分條文修正草案", tag: ["國民", "立法"], date: "2020/11/22" },

            ],
            like: { "abc":["a", "b"] }



        }
    }
    toContent = (id) => {
        localStorage.setItem("proposal", id)
        document.location.href = `.#/policyContent/${id.id}`
    }

    getList = () => {
        let d = {}
        let term = []

        let status = []

        console.log(this.state.like)
        for (let key in this.state.like) {
            for (let v in this.state.like[key]) {
                if (this.state.like[key][v]) {
                    switch (key) {
                        case "屆別":
                            term.push(v)
                            break;
                        case "狀態":
                            status.push(v)
                    }
                }

            }

        }
        if (term.length > 0) {
            d["term"] = term
        }
        if (status.length > 0) {
            d["status"] = status
        }
        if (Array.isArray(this.state.resource)) {
            let newd = this.state.resource.filter(i => {

                let res = false

                let termb = false
                let statusb = false

                if (term.length > 0) {
                    term.forEach(item => { if (i["term"] == item) { termb = true; return; } })
                }
                if (status.length > 0) {
                    status.forEach(item => { if (i["status"] == item) { statusb = true; return; } })
                }

                termb = term.length > 0 ? termb : true
                statusb = status.length > 0 ? statusb : true

                return termb & statusb
            })
            console.log(newd)

            this.setState({ "Sdata": newd })

        }
    }
    componentDidMount() {

        ProposalR.list().then(response => {
            console.log(response)
            this.setState({ "Sdata": response.data.data, resource: response.data.data })
        })
        ProposalR.cond().then(response => {
            let test = {}
            for (let i of response.data.data) {
                let inside = {}
                for (let j of i.data) {
                    inside[j.name] = false
                }
                test[i.name] = inside

            }
            console.log(test)
            this.setState({ "like": test })
        })




        this.setState({ condData: [{ n: "進度", d: ["完全落實", "部分落實", "進行中"] }] })
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


    render() {
        return (<Pages id={ 2 } page={
            (<>

                <div>
                    <Search like={ this.state.like } getList={ this.getList } />
                </div>


                {/* <button onClick={ this.test }>click me</button> */ }

                {this.state.Sdata && this.state.Sdata.map((placement, index) => {
                    return (<div className={ style.topicBox + " justify-content-center" } onClick={ () => { this.toContent(placement) } }>
                        <Grid> <Grid.Row className={ style.topicBoxBold } columns={"equal"}>
                            <Grid.Column >
                                <h3 className={ style.ellipsis }>{ placement.title }</h3>

                                <Grid> <Grid.Row >
                                    <Grid.Column width={1}>{ placement.date }</Grid.Column>
                                    <Grid.Column width={1}>#{ "金融" }</Grid.Column>
                                    {/* <Grid.Column width={"auto"}>2021/3/5</Grid.Column> */ }
                                    <Grid.Column width={2}>王婉諭</Grid.Column>
                                    <Grid.Column width={2}>{ placement.status }</Grid.Column>

                                    {/* { placement.tag.map(item => (<Grid.Column >#{item }</Grid.Column>)) } */ }
                                </Grid.Row></Grid>


                            </Grid.Column>
                            <Grid.Column width={ 4 } >
                                <Chart options={ this.state.kpi.options }
                                    series={ this.state.kpi.series } type="donut"
                                    height="125px" />
                            </Grid.Column>
                        </Grid.Row></Grid>

                    </div>)
                }) }
            </>)
        } />)
    }
}





export default Policy = {
    routeProps: {
        path: "/Policy",
        component: Policy
    },
    name: "提案專區"
}
