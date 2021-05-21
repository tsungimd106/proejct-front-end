import React from 'react';
import { Button, InputGroup, FormControl } from "react-bootstrap"

import { Cross } from 'akar-icons';
import { Grid } from 'semantic-ui-react'
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
        let d = document.getElementsByClassName(style.box)
        let hasMore = []
        for (let i of d) {
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

    newOn = (e) => {
        const key = e.target
        let ccc = this.props.like
        let count = this.state.count
        let temp = ccc[key.name][key.value]
        ccc[key.name][key.value] = !temp
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
        return (<div className={ style.searchBar }>


            <Grid className={ style.border }>
                <Grid.Row className="align-items-center">
                    <Grid.Column width={ 2 } textAlign={ "center" }>關鍵字搜尋：</Grid.Column>
                    <Grid.Column width={ 10 }>
                        <InputGroup >
                            <FormControl
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>

                    </Grid.Column>
                    <Grid.Column width={ 2 }>
                        <Button variant="outline-secondary">確認</Button>
                    </Grid.Column>


                    { this.state.count > 0 ? <><Grid.Column width={ 2 }>篩選條件</Grid.Column>
                        { this.props.like && Object.keys(this.props.like).map((placement, index) => {
                            return (<>{ Object.keys(this.props.like[placement]).map(item => {
                                if (this.props.like[placement][item]) {
                                    return (<Grid.Column width={ "auto" }>
                                        <Button variant="outline-primary"
                                            onClick={ () => { this.remove(placement, item) } } className={ style.button }>{ item }
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="Cross"><path d="M20 20L4 4m16 0L4 20" /></svg>
                                        </Button>
                                    </Grid.Column>)
                                }

                            }) }</>)
                        }) }
                        <Grid.Column>
                            <Button variant="outline-secondary" onClick={ this.removeAll } className={ style.button }>清除全部</Button>
                        </Grid.Column></> : <></> }
                </Grid.Row></Grid>


            <Grid> <Grid.Row >
                <Grid.Column>
                    { this.props.like && Object.keys(this.props.like).map((placement, index) => {
                        return (<><Grid>
                            <Grid.Row className={ style.border }>
                                <Grid.Column width={ "auto" }>{ placement }</Grid.Column>
                                <Grid.Column>
                                    <Grid>
                                        <Grid.Row className={ style.box } id={ placement }>

                                            { Object.keys(this.props.like[placement]).map((item) => {
                                                return (<><Grid.Column width={ "auto" }>
                                                    <input type="checkbox" name={ placement } value={ item }
                                                        className={ style.checkbox }
                                                        onChange={ this.newOn } checked={ this.props.like[placement][item] }
                                                        id={ `${placement}-${item}` } />
                                                    <label for={ `${placement}-${item}` } className={ style.label }>{ item }</label>
                                                </Grid.Column></>)
                                            }) }</Grid.Row>
                                    </Grid>
                                </Grid.Column>
                                <Grid.Column width={ "auto" }>{ this.state.hasMore[index] ? (<Button variant="outline-secondary" onClick={ () => { this.more(placement) } }>更多</Button>) : "" }</Grid.Column>
                            </Grid.Row></Grid>  </>)
                    }) }

                </Grid.Column>
            </Grid.Row></Grid>
        </div>)
    }
}