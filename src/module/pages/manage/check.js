import React from 'react';
import { Grid } from 'semantic-ui-react'
import { ManageR } from "../../request/manageR"
import { Tab , Button  } from 'semantic-ui-react'

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
                menuItem: '未審核', render: () => <Tab.Pane>
                    <Grid>
                    <Grid.Row >
                        <Grid.Column width={ 8 }><h3>檢舉留言</h3></Grid.Column>
                        <Grid.Column width={ 3 }><h3>備註</h3></Grid.Column>
                        <Grid.Column width={ 5 }><h3>操作</h3></Grid.Column>
                        </Grid.Row>
                        { this.state.notYet && this.state.notYet.map((item, index) => {
                            return (<>
                                 <Grid.Row >
                                <Grid.Column width={ 8 } >{ item.content }</Grid.Column>
                                <Grid.Column width={ 3 }>{ item.remark }</Grid.Column>
                                <Grid.Column width={ 5 }>
                                    <Button>停權</Button>
                                    <Button>不停權</Button>
                                </Grid.Column></Grid.Row>
                            </>)
                        }) }
                   </Grid> 
                </Tab.Pane>
            },
            {
                menuItem: '已審核', render: () => <Tab.Pane>
                   
                   <Grid> <Grid.Row >
                        <Grid.Column width={ 8 }><h3>檢舉留言</h3></Grid.Column>
                        <Grid.Column width={ 3 }><h3>操作</h3></Grid.Column>
                        <Grid.Column width={5}><h3>審核者</h3></Grid.Column>  </Grid.Row >
                        {
                            this.state.already && this.state.already.map((item, index) => {
                                return (<>
                                   <Grid.Row > <Grid.Column width={ 10 } >{ item.content }</Grid.Column>
                                    <Grid.Column width={ 6}>

                                    </Grid.Column></Grid.Row> 
                                </>)
                            })
                        }
                  </Grid>
                </Tab.Pane >
            },

        ]
        return (<>
            <Tab menu={ { secondary: true } } panes={ panes } />
        </>);
    }
}