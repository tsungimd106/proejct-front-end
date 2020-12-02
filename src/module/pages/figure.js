import React from 'react';
import { Row, Col, Carousel } from "react-bootstrap"
import { Pages } from "../pages.js"
// import "../../css/policy.css"

class Figure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [
                { name: "賴品妤", id: "534" }
            ]

        }
    }
    toDetail = (toName) => {
        document.location.href = `.#/figure/${toName}`
    }

    render() {
        return (<Pages page={
            (<>

                {this.state.item.map((placement, index) => {
                    return (<>

                        <button onClick={() => { this.toDetail(placement.id) }} >
                            <div >
                                {placement.name}
                            </div>
                            <div>50</div>
                        </button>


                    </>)
                })}



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