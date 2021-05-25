import React from "react";
import { Modal } from "react-bootstrap"
import { Modal as ModalUI, Button, Grid } from 'semantic-ui-react'



export class ModalBase extends React.Component {
    render() {
        return (<>
            <Modal show={ this.props.show } size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static" className="smallModal">
                <Modal.Body className="show-grid body">
                    <Grid> <Grid.Row >
                        <Grid.Column className="modalClose">
                            <Button variant="light" className="close" aria-label="Close" onClick={ this.props.close }><span
                                aria-hidden="true">&times;</span></Button>
                        </Grid.Column>
                    </Grid.Row></Grid>
                    <Grid> <Grid.Row>
                        <Grid.Column>
                            <center className="modalLabel">{ this.props.message }</center>
                            <div className="modalContainer">{ this.props.content }</div>
                            <p id={ `${this.props.error}ErrorInfo` } className="errorInfo" />
                        </Grid.Column>
                    </Grid.Row></Grid>
                    <Grid> <Grid.Row>
                        <Grid.Column>
                            <center><p><Button variant="success" onClick={ this.props.ok }>確認</Button></p></center>
                        </Grid.Column>
                    </Grid.Row></Grid>
                </Modal.Body>
            </Modal>
        </>)
    }
}
function ModalBaseUI() {
    const [open, setOpen] = React.useState(false)

    return (
        <ModalUI

            onClose={ () => setOpen(false) }
            onOpen={ () => setOpen(true) }
            open={ open }
            size='small'
            trigger={ <Button>Basic Modal</Button> }
        >


            <ModalUI.Header>Select a Photo</ModalUI.Header>
            <ModalUI.Content image>
                {/* <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped /> */ }
                <ModalUI.Description>
                    {/* <Header>Default Profile Image</Header> */ }
                    <p>
                        We've found the following gravatar image associated with your e-mail
                        address.
          </p>
                    <p>Is it okay to use this photo?</p>
                </ModalUI.Description>
            </ModalUI.Content>
            <ModalUI.Actions>
                <Button color='black' onClick={ () => setOpen(false) }>
                    Nope
        </Button>
                <Button
                    content="Yep, that's me"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={ () => setOpen(false) }
                    positive
                />
            </ModalUI.Actions>
        </ModalUI>
    )
}
export { ModalBaseUI }


// export class ModalBaseUI extends React.Component {

//     render() {
//         const [open,setOpen]=React.useState(false)
//         return (<>
//             <ModalUI
//                 onClose={ this.props.close }
//                 onOpen={ this.props.close }
//                 open={ this.props.open }
//                 trigger={ <Button>Show Modal</Button> }
//             >
//                 <ModalUI.Header>Select a Photo</ModalUI.Header>
//                 <ModalUI.Content image>

//                     <ModalUI.Description>
//                         {/* <Header>Default Profile Image</Header> */}
//                         <p>
//                             We've found the following gravatar image associated with your e-mail
//                             address.
//                          </p>
//                         <p>Is it okay to use this photo?</p>
//                     </ModalUI.Description>
//                 </ModalUI.Content>
//                 <ModalUI.Actions>
//                     <Button content={ "取消" } color='black' onClick={ this.props.close } />

//                     <Button
//                         content="Yep, that's me"
//                         labelPosition='right'
//                         icon='checkmark'
//                         onClick={ this.props.ok }
//                         positive
//                     />
//                 </ModalUI.Actions>
//             </ModalUI>
//   )
//         </>)
//     }
// }

export class TaskModal extends React.Component {
    render() {
        return (<>
            <Modal show={ this.props.show } size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static" className="smallModal">
                <Modal.Body className="show-grid body">
                    <Grid> <Grid.Row >
                        <Grid.Column className="modalClose">
                            <div className="close" aria-label="Close" onClick={ this.props.close }><span
                                aria-hidden="true">&times;</span></div>
                        </Grid.Column>
                    </Grid.Row></Grid>
                    <Grid> <Grid.Row>
                        <Grid.Column>
                            <center className="modalLabel">{ this.props.message }</center>
                            <Grid> <Grid.Row>
                                { this.props.tag.map(placement => {
                                    return (<Grid.Column width={ "auto" }>
                                        #{placement }
                                    </Grid.Column>)

                                }) }
                            </Grid.Row></Grid>
                            <div className="modalContainer">{ this.props.content }</div>
                            <p id={ `${this.props.error}ErrorInfo` } className="errorInfo" />
                        </Grid.Column>
                    </Grid.Row></Grid>
                    <Grid> <Grid.Row>
                        <Grid.Column>
                            <center><p><Button variant="secondary" onClick={ this.props.ok }>關閉視窗</Button></p></center>
                        </Grid.Column>
                    </Grid.Row></Grid>
                </Modal.Body>
            </Modal>
        </>)
    }
}

export class ReportModal extends React.Component {
    render() {
        return (<>
            <ModalBase
                show={ this.props.show } message="檢舉"
                ok={ this.props.ok }
                close={ this.props.close }
                content={ (<>

                    {this.props.rule && this.props.rule.map((item, index) => {
                        return (<div><input type="checkbox" name="report" id={ `reportInput-${item.id}` } />
                            <label for={ `reportInput-${item.id}` }>{ item.context }</label></div>)
                    }) }
                    <p>備註：</p>
                    <input type="text" id={ "reportInputRemark" } />
                </>) } />
        </>)
    }
}


export class ProposalEditModal extends React.Component {
    render() {
        console.log("see me ")
        return (<>
            <ModalBase
                show={ this.props.show } message="提案編輯"
                ok={ this.props.ok }
                close={ this.props.close }
                content={ this.props.content } />
        </>)
    }
}

export class ScoreModal extends React.Component {
    render() {
        return (<>
            <ModalBase
                message={ this.props.policy }
                show={ this.props.show }
                ok={ this.props.ok }
                close={ this.props.close }
                content={ <>
                    {this.props.content }

                </> }
            />
        </>)
    }
}
