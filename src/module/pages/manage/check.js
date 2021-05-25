import React from 'react';
import { Grid } from 'semantic-ui-react'
import { ManageR } from "../../request/manageR"
import { Tab as TabUI, Button as BtnUI } from 'semantic-ui-react'
import 'react-awesome-slider/dist/styles.css';

import style from "../../../css/manage.module.css"
export default class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        ManageR.report().then(response => {
            console.log(response)
            this.setState({ already: response.data.data[0].data, notYet: response.data.data[1].data })
        })
    }

    render() {
        const panes = [
            {
                menuItem: '未審核', render: () => <TabUI.Pane>
                    <Grid>
                    <Grid.Row className={ style.reportBox + "  " }>
                        <Grid.Column width={ 10 }><h3>檢舉留言</h3></Grid.Column>
                        <Grid.Column width={ 3 }><h3>備註</h3></Grid.Column>
                        <Grid.Column width={ 3 }><h3>操作</h3></Grid.Column>
                        { this.state.notYet && this.state.notYet.map((item, index) => {
                            return (<>
                                <Grid.Column width={ 10 } >{ item.content }</Grid.Column>
                                <Grid.Column width={ 3 }>{ item.remark }</Grid.Column>
                                <Grid.Column width={ 3 }>
                                    <BtnUI>停權</BtnUI>
                                    <BtnUI>不停權</BtnUI>
                                </Grid.Column>
                            </>)
                        }) }
                   </Grid.Row></Grid> 
                </TabUI.Pane>
            },
            {
                menuItem: '已審核', render: () => <TabUI.Pane>
                   
                   <Grid> <Grid.Row >
                        <Grid.Column width={ 10 }><h3>檢舉留言</h3></Grid.Column>
                        <Grid.Column width={ 3 }><h3>操作</h3></Grid.Column>
                        <Grid.Column width={3}><h3>審核者</h3></Grid.Column>
                        {
                            this.state.already && this.state.already.map((item, index) => {
                                return (<>
                                    <Grid.Column width={ 10 } >{ item.content }</Grid.Column>
                                    <Grid.Column width={ 6}>

                                    </Grid.Column>
                                </>)
                            })
                        }
                    </Grid.Row ></Grid>
                </TabUI.Pane >
            },

        ]
        return (<>
            <TabUI menu={ { secondary: true } } panes={ panes } />
        </>);
    }
}