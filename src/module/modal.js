import React from "react";
import { Button, Col, Modal, Row } from "react-bootstrap"



export class ModalBase extends React.Component {
    render() {
        return (<>
            <Modal show={this.props.show} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static" className="smallModal">
                <Modal.Body className="show-grid body">
                    <Row className="justify-content-end">
                        <Col className="modalClose">
                            <div className="close" aria-label="Close" onClick={this.props.close}><span
                                aria-hidden="true">&times;</span></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <center className="modalLabel">{this.props.message}</center>
                            <div className="modalContainer">{this.props.content}</div>
                            <p id={`${this.props.error}ErrorInfo`} className="errorInfo" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <center><p><Button variant="success" onClick={this.props.ok}>確認</Button></p></center>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </>)
    }
}