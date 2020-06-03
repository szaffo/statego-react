import React, {useState} from 'react';

import {createRoom, joinRoom} from '../../actions/stageActions';
import { useDispatch } from 'react-redux';
import {showError} from "../../actions/errorActions";


export function Stage1() {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (value === '') {
            dispatch(showError('Nincs játékazonosító megadva!'));
            return;
        }
        dispatch(joinRoom(value));
    }


    return <div className="stage" id="stage-1">
            <div className="login-wrapper ui placeholder segment">
                <div className="login-container ui two column very relaxed stackable grid">

                        <div className="side left-side column centered">
                            <h2 className="ui huge header">Új játék kezdése</h2>
                            <div className="ui animated button primary large" tabIndex="0"
                            onClick={() => dispatch(createRoom())}>
                                <div className="visible content">Új játék</div>
                                <div className="hidden content"><i className="right arrow icon"/></div>
                            </div>
                        </div>

                        <div className="side right-side column centered">
                            <h2 className="ui huge header">csatlakozás meglévőhöz</h2>
                            <form onSubmit={handleSubmit}>
                                    <div className="ui action input">
                                        <input type="text" placeholder="Játékkód" value={value} onChange={handleChange}/>
                                            <button onClick={handleSubmit} type='submit' className="ui button primary">Csatlakozás</button>
                                    </div>
                            </form>
                        </div>
                </div>
                <div className="ui vertical divider">Vagy</div>
            </div>
        </div>;
}