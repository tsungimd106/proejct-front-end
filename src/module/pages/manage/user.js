import React from 'react';
import { Grid } from 'semantic-ui-react'
import style from "../../../css/manage.module.css"
import { ManageR } from "../../request/manageR"

import { Tab as TabUI, Button as BtnUI } from 'semantic-ui-react'
export default class Check extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        ManageR.user().then(response => {
            let item = {}
            for (let i of response.data.data) {
                item[i.name] = i.data
            }
            console.log(item)
            this.setState(item)
        })
    }
    render() {
        const panes = [
            {
                menuItem: '一般使用者', render: () => <TabUI.Pane>
                    <Grid>
                        <Grid.Row className={ style.reportBox + "  " }>
                            <Grid.Column width={ 4 }><h3>帳號</h3></Grid.Column>
                            <Grid.Column width={ 4 }><h3>姓名</h3></Grid.Column>
                            <Grid.Column width={ 8 }><h3>操作</h3></Grid.Column>
                        </Grid.Row>
                      
                            { this.state.user && this.state.user.map((item, index) => {
                                return (<>
                                  <Grid.Row> 
                                    <Grid.Column width={ 4 } >{ item.id }</Grid.Column>
                                    <Grid.Column width={ 4 }>{ item.name }</Grid.Column>
                                    <Grid.Column width={ 8 }>
                                        <BtnUI>轉管理者</BtnUI>
                                        <BtnUI>轉政治人物</BtnUI>
                                    </Grid.Column> </Grid.Row>

                                </>)
                            }) }
                       </Grid>
                </TabUI.Pane>
            },
            {
                menuItem: '政治人物使用者', render: () => <TabUI.Pane>
                    <Grid>
                        <Grid.Row className={ style.reportBox + "  " }>
                            <Grid.Column width={ 4 }><h3>帳號</h3></Grid.Column>
                            <Grid.Column width={ 4 }><h3>姓名</h3></Grid.Column>
                            <Grid.Column width={ 8 }><h3>操作</h3></Grid.Column>
                            </Grid.Row >
                            { this.state.politician && this.state.politician.map((item, index) => {
                                return (<> <Grid.Row> 
                                    <Grid.Column width={ 4 } >{ item.id }</Grid.Column>
                                    <Grid.Column width={ 4 }>{ item.name }</Grid.Column>
                                    <Grid.Column width={ 8 }>

                                        <BtnUI>轉一般使用者</BtnUI>
                                    </Grid.Column>   </Grid.Row >
                                </>)
                            }) }
                     </Grid>
                </TabUI.Pane >
            },
            {
                menuItem: '管理者', render: () => <TabUI.Pane>
                    <Grid>
                        <Grid.Row className={ style.reportBox + "  " }>
                            <Grid.Column width={ 4 }><h3>帳號</h3></Grid.Column>
                            <Grid.Column width={ 4 }><h3>姓名</h3></Grid.Column>
                            <Grid.Column width={ 8 }><h3>操作</h3></Grid.Column>
                            </Grid.Row >
                            { this.state.manager && this.state.manager.map((item, index) => {
                                return (<>
                                  <Grid.Row>
                                    <Grid.Column width={ 4 } >{ item.id }</Grid.Column>
                                    <Grid.Column width={ 4 }>{ item.name }</Grid.Column>
                                    <Grid.Column width={ 8 }>

                                        <BtnUI>轉一般使用者</BtnUI>
                                    </Grid.Column>   </Grid.Row >
                                </>)
                            }) }
                        </Grid>
                </TabUI.Pane >
            },

        ]
        return (<>
            <TabUI menu={ { secondary: true } } panes={ panes } />
        </>);
    }
}