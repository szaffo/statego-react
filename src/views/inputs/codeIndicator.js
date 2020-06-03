import React from 'react'
import { Input, Popup} from 'semantic-ui-react'

const timeoutLength = 2500

export class CodeIndicator extends React.Component {
    constructor(props) {
        super();
        this.props = props;

        this.input = <Input
            action={{
                color: 'blue',
                labelPosition: 'right',
                icon: 'copy',
                content: 'Másolás',
                onClick: this.handleOnClick.bind(this)
            }}
            defaultValue={this.props.code}
            id={'code-input'}
            readOnly={true}
            className='copyInput'
            onClick={this.handleOnClick.bind(this)}
        />;
    }
    
    state = { isOpen: false }

    handleOpen = () => {
        this.setState({ isOpen: true })

        this.timeout = setTimeout(() => {
            this.setState({ isOpen: false })
        }, timeoutLength)
    }

    handleOnClick = () => {
        this.setState({isOpen: true});
        let input = document.getElementById('code-input')
        input.focus();
        input.select();
        document.execCommand('copy');
    }

    handleClose = () => {
        this.setState({ isOpen: false })
        clearTimeout(this.timeout)
    }

    render() {
        return (
            <Popup
                    trigger={this.input}
                    content={`Vágólapra másolva!`}
                    on='click'
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                    onOpen={this.handleOpen}
                    position='top right'
                />
        )
    }
}
