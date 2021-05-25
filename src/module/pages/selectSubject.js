import React from 'react';
import logo_dark from '../../imgs/LOGO1.png'

import "../../css/selectSubject.css"
import { Grid,Button } from 'semantic-ui-react'
class SelectSubject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                "金融經濟", "教育","科技發展","政治","藝術音樂","外交關係","性別平等",
                "動物保育","勞資關係","交通","高齡化社會","在地文化","體育","能源轉型"
            ]
        }
    }

    render() {
        return (<>
            (<>
                <center>
                    <div className="ss_lineheight">
                        <img id="logo" src={logo_dark} alt=""/>
                        <p>Hi! XXX歡迎您使用<img src={logo_dark}alt=""/><br></br>請選擇您所感興趣的議題</p>              
                       <Grid> <Grid.Row className="selectbtn" >
                            {
                                (this.state.data || false ? (<>   {/* 看data在不在，不再會執行39行(傳回空的)。在就會接著執行 */}
                                    {this.state.data.map(item => {      {/*data跑回圈，裡面的值取變數名稱叫item。map類似foreach*/}
                                        return (<>
                                            <Grid.Column width={4}><button className="need_to_center ss_subjectbtn">{item}</button> {/*data內的item一個一個跑回圈*/}
                                            </Grid.Column>
                                        </>)
                                    })}
                                </>) : (<></>))
                            }
                       </Grid.Row></Grid>  
                        <p><a href="./#/"><Button className="ss_checkbtn" onClick={this.send}>確認</Button></a></p>
                    </div>
                </center>
            </>)
        </>)
    }
}


export default SelectSubject = {
    routeProps: {
        path: "/selectSubject",
        component: SelectSubject
    },
    name: "選擇議題"
}
