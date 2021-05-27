import React from "react";
import { Modal, Button, Grid } from 'semantic-ui-react'


export class ModalBase extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

    }
    setOpen = (val) => this.setState({ open: val })
    toDo = () => {
        console.log("enter modalbase todo")
        let check = this.props.toDo()
        console.log(check)
        if (check==true) {
            this.setOpen(false)
        } else {
            this.setState(check)
        }
    }
    render() {

        return (<>
            <Modal
                onClose={ () => this.setOpen(false) }
                onOpen={ () => this.setOpen(true) }
                open={ this.state.open }
                size='small'
                trigger={ this.props.btn != null ? this.props.btn : <Button>{ this.props.btnText }</Button> }
            >
                <Modal.Header>{ this.props.message }</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        { this.props.content }
                    </Modal.Description>
                </Modal.Content>
                { this.state.error ? <>
                    <Modal.Content>
                        <Modal.Description>
                            { this.state.errorText }
                        </Modal.Description>
                    </Modal.Content>
                </> : <></> }
                <Modal.Actions>
                    <Button color='black' onClick={ () => this.setOpen(false) } content={ "取消" } />
                    <Button
                        content="確定"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={ this.toDo }
                        positive
                    />
                </Modal.Actions>
            </Modal>
        </>)
    }

}





export class InfoModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }

    }
    setOpen = (val) => this.setState({ open: val })
    render() {
        return (<>
            <Modal
                onClose={ () => this.setOpen(false) }
                onOpen={ () => this.setOpen(true) }
                open={ this.state.open }
                size='small'
                trigger={ this.props.btn != null ? this.props.btn : <Button>{ this.props.btnText }</Button> }
            >
                <Modal.Header>{ this.props.message }
                   </Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        { this.props.content }
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        content="關閉視窗"
                        labelPosition='right'
                        color='black'
                        onClick={ () => this.setOpen(false) }
                        positive
                    />
                </Modal.Actions></Modal>

        </>)
    }
}

export class ReportModal extends React.Component {
    render() {
        return (<>
            <ModalBase
                message="檢舉"
                btn={this.props.btn}
                toDo={ this.props.toDo }                
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
       
        return (<>
            <ModalBase
               message="提案編輯"
                toDo={ this.props.ok }              
                content={ this.props.content } />
        </>)
    }
}

export class ScoreModal extends React.Component {
    render() {
        return (<>
            <ModalBase
                message={ this.props.policy }              
                toDo={ this.props.ok }            
                content={ <>
                    {this.props.content }
                </> }
            />
        </>)
    }
}
