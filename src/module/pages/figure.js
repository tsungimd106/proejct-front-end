import React from 'react';

import { Pages } from "../pages.js"
import { PoliticianR } from "../request/politicianR"

import style from "../../css/figure.module.css"
import { Grid, Button, Card, Image } from 'semantic-ui-react'
import { trackPromise } from 'react-promise-tracker'
import Search from "../bar/search"
import { AlignToTop } from "akar-icons"
class Figure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            like: {

            },
            listD: []
        }
    }
    componentDidMount() {

        trackPromise(
            PoliticianR.getList().then(response => {

                this.setState({ "data": response.data.data, resource: response.data.data })
            }))
        trackPromise(
            PoliticianR.cond().then(response => {
                let test = {}
                for (let i of response.data.data) {
                    let inside = {}
                    for (let j of i.data) {
                        inside[j.name] = false
                    }
                    test[i.name] = inside

                }
                this.setState({ "like": test })
            })
        )



    }

    getList = () => {
        let d = {}
        let term = []
        let area = []
        let name = []

        console.log(this.state.like)
        for (let key in this.state.like) {
            for (let v in this.state.like[key]) {
                if (this.state.like[key][v]) {
                    switch (key) {
                        case "屆別":
                            term.push(v)
                            break;
                        case "地區":
                            area.push(v)
                            break;
                        case "姓名":
                            name.push(v)
                    }
                }

            }

        }
        if (term.length > 0) {
            d["term"] = term
        }
        if (area.length > 0) {
            d["other"] = area
        }
        if (Array.isArray(this.state.resource)) {
            let newd = this.state.resource.filter(i => {

                let res = false
                let areab = false
                let termb = false
                let nameb = false

                if (area.length > 0) { area.forEach(item => { if (i["a_n"] == item) { areab = true; return; } }) }
                if (term.length > 0) {
                    term.forEach(item => { if (i["term"] == item) { termb = true; return; } })
                }
                if (name.length > 0) {
                    name.forEach(item => { if (i["name"] == item) { nameb = true; return; } })
                }
                areab = area.length > 0 ? areab : true
                termb = term.length > 0 ? termb : true
                nameb = name.length > 0 ? nameb : true

                return areab & termb & nameb
            })
            console.log(newd)

            this.setState({ "data": newd })

        }


    }

    toDetail = (toName) => {
        document.location.href = `.#/figure/${toName}`
    }
    onScroll = (e) => {
        let element = e.target
        console.log(element)
    }

    cut = (obj, n) => {
        var regPos = /^[0-9]+.?[0-9]*/; //判断是否是数字。

        if ("d" in obj) {
            return (

                < >
                    <p>{ obj["name"] }</p>
                    {(!regPos.test(obj["name"]) ? <>

                        { obj["d"].map(placement => {
                            return this.cut(placement, obj["name"])
                        }) }
                    </> : < >
                        { obj["d"].map(placement => {
                            return this.cut(placement, obj["name"])
                        }) }</ >
                    ) }



                </ >)
        } else {
            return (< >
                <Card onClick={ () => { this.toDetail(obj["id"]) } }>

                    <Card.Content>
                        <Card.Header>{ obj["name"] }</Card.Header>
                        <Card.Meta>
                            <span >{ obj["a_n"] }</span>
                        </Card.Meta>
                        <Card.Description>
                            <Image src={ obj["photo"] } wrapped />
                        </Card.Description>
                    </Card.Content>

                </Card>



            </ >)
        }
    }

    render() {
        return (<Pages id={ 3 }
            onScroll={ console.log("ii") }
            page={
                (<>
                    <div  >
                        <Search like={ this.state.like } getList={ this.getList } />
                    </div>
                    <Card.Group itemsPerRow={ 4 }>{
                        this.state.data && this.state.data.map(placement => {
                            return this.cut(placement)
                        })
                    }
                    </Card.Group>
                </>)
            } />)
    }
}





export default Figure = {
    routeProps: {
        path: "/figure",
        component: Figure
    },
    name: "人物專區"
}
