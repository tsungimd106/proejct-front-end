import React from 'react';
import { ListGroup, Row, Col, Tab } from "react-bootstrap"
import { Person, Clipboard, Comment} from 'akar-icons';
import 'react-awesome-slider/dist/styles.css';
import style from "../../../css/user.module.css"
export default  class Article extends React.Component {
    render() {
        return (<>
        <Row>
            <Col className={style.profile}>
               
                <div className={style.data}>
                   廣告及公告管理
                </div>
               
            </Col>
            </Row>
        </>);
    }
}