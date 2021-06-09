import React from 'react';

import { Cross } from 'akar-icons';
import { Grid, Button, Form, List, Icon, Checkbox } from 'semantic-ui-react'
import style from "./search.module.css"
export default class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0, hasMore: [], t: {}
        }
    }

    componentDidMount() {
        this.setState({ like: this.props.like })
    }

    componentDidUpdate() {
        console.log("Enter")
        let d = document.getElementsByClassName(style.box)
        let hasMore = []
        console.log(d)
        for (let i of d) {
            console.log(i.scrollHeight)
            hasMore.push(i.scrollHeight > 40)
        }
        if (hasMore.length != this.state.hasMore.length) {
            this.setState({ hasMore: hasMore })
        }
    }

    remove = (c, v) => {
        let d = this.props.like
        d[c][v] = false
        this.setState({ like: d, count: this.state.count - 1 })
    }

    newOn = (name, item) => {
        // const key = e.target
        let ccc = this.props.like
        let count = this.state.count
        let temp = ccc[name][item]
        ccc[name][item] = !temp
        console.log(temp)
        if (temp) { count -= 2 }
        this.setState({ like: ccc, count: count + 1 })
        this.props.getList()
    }
    removeAll = () => {
        let d = this.props.like
        for (const [key, value] of Object.entries(d)) {
            console.log(value)
            for (const [k, v] of Object.entries(value)) {
                if (d[key][k]) { d[key][k] = false }
            }
        }
        this.setState({ like: d, count: 0 })
    }
    more = (c) => {
        let a = document.getElementById(c)
        console.log(a.scrollHeight)
        console.log(a.offsetHeight)
        console.log(a.clientHeight)
        if (a.offsetHeight < 40) {
            a.classList.remove(style.box)
        }
        else {
            a.classList.add(style.box)
        }
    }


    render() {
        return (<div className={style.searchBar}>

            <List horizontal>
                <List.Item> <Form.Input label='關鍵字搜尋：' placeholder="請輸入關鍵字" /></List.Item>
                <List.Item>  <Form.Button>確認</Form.Button></List.Item>
            </List>
            <Grid className={style.border}>
                <Grid.Row >
                    {this.state.count > 0 ? <><Grid.Column width={2}>篩選條件</Grid.Column> <Grid.Column width={13} >
                        {this.props.like && Object.keys(this.props.like).map((placement, index) => {
                            return (<>

                                {Object.keys(this.props.like[placement]).map(item => {
                                    if (this.props.like[placement][item]) {
                                        return (
                                            <Button
                                                icon={"x"}
                                                content={item}
                                                onClick={() => { this.remove(placement, item) }} className={style.button} />

                                        )
                                    }

                                })} </>)
                        })}</Grid.Column>
                        <Grid.Column width={2}></Grid.Column>
                        <Grid.Column width={13}>
                            <Button secondary onClick={this.removeAll} className={style.clearbtn} >清除全部</Button>
                        </Grid.Column></> : <></>}
                </Grid.Row>


                {this.props.like && Object.keys(this.props.like).map((placement, index) => {
                    return (<> <Grid.Row >
                        <Grid.Column width={1}>{placement}</Grid.Column>
                        <Grid.Column width={11} textAlign={"justified"} verticalAlign={"middle"}>
                            <List horizontal className={style.box} id={placement}>
                                {Object.keys(this.props.like[placement]).map((item) => {
                                    return (<><List.Item className={style.state_listItem}>
                                        <Checkbox label={item} name={placement} value={item}
                                            onChange={() => { this.newOn(placement, item) }} checked={this.props.like[placement][item]} />

                                    </List.Item>
                                    </>)
                                })}  </List>
                        </Grid.Column>
                        <Grid.Column width={2}>{this.state.hasMore[index] ? (<Button variant="outline-secondary" onClick={() => { this.more(placement) }}>更多</Button>) : ""}</Grid.Column>  </Grid.Row>
                    </>)
                })}


            </Grid>
        </div>)
    }
}