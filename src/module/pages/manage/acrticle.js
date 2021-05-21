import React from 'react';
import 'react-awesome-slider/dist/styles.css';
import style from "../../../css/user.module.css"
import { Grid } from 'semantic-ui-react'
export default  class Article extends React.Component {
    render() {
        return (<>
            <Grid>
        <Grid.Row>
            <Grid.Column className={style.profile}>
               
                <div className={style.data}>
                   廣告及公告管理
                </div>
               
            </Grid.Column>
           </Grid.Row></Grid> 
        </>);
    }
}