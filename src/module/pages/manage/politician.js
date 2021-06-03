import React from 'react';
import { Grid } from 'semantic-ui-react'
import style from "../../../css/user.module.css"
export default  class Politician extends React.Component {
    render() {
        return (<>
        <Grid>
        <Grid.Row>
            <Grid.Column className={style.profile}>
               
                <div className={style.data}>
                   政治人物管理
                </div>
               
            </Grid.Column>
           </Grid.Row></Grid>  
        </>);
    }
}