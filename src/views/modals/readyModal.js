import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export class ReadyModal extends Component {
    state = { modalOpen: false }
    
    handleOkay = () => {
        this.setState({ modalOpen: false })
        this.props.onOkay();

    }
    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            <Modal
                trigger={
                    <div className="ready-button">
                        <Button
                            onClick={this.handleOpen}
                            color="green"
                            size="huge"
                            disabled={!this.props.disabled}
                        >Kész</Button>
                    </div>}
                
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic
                size='small'
            >
                <Header icon='check' content='Biztos hogy kész vagy?' />
               
                <Modal.Content>
                    <h3>Az elfogadás után bármikor elkezdődhet a játék, amint az ellefél is kész. Ezután már nem tudod módosítani a bábuid helyzetét.</h3>
                </Modal.Content>
                
                <Modal.Actions>
                    <Button color='red' onClick={this.handleClose} basic>
                        <Icon name='remove' /> Nem
                    </Button>
                    <Button color='green' onClick={this.handleOkay} basic>
                        <Icon name='checkmark' /> Igen
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}