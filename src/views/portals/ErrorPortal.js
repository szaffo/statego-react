import React from 'react'
import { Button, Portal } from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {errorOff} from "../../actions/errorActions";

export function ErrorPortal() {
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(errorOff());
    }

    return <Portal onClose={() =>  handleClose()} open={error.on}>
        <div className='error-popup'>
            <div className='ui segment raised red padded'>
                <h1 className='ui header medium'>Hiba történt</h1>
                <p>{error.text}</p>
                <Button
                    content='Bezárás'
                    negative
                    onClick={() =>  handleClose()}
                />
            </div>
        </div>
    </Portal>

}
