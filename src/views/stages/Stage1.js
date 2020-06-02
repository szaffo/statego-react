import React, {useState} from 'react';

import {createRoom, joinRoom} from '../../actions/stageActions';
import { useDispatch } from 'react-redux';


export function Stage1() {
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        dispatch(joinRoom(value));
        event.preventDefault();
    }


    return <div className="stage" id="stage-1">
            <div className="login-wrapper ui segment">
                <div className="login-container ui two column very relaxed grid divided">
                    <div className="two column row">
                        <div className="side left-side column centered">
                            <h2 className="ui huge header">Új játék kezdése</h2>
                            <div className="ui animated button primary large" tabIndex="0"
                            onClick={() => dispatch(createRoom())}>
                                <div className="visible content">Játék</div>
                                <div className="hidden content"><i className="right arrow icon"/></div>
                            </div>
                        </div>
                        <div className="side right-side column centered">
                            <h2 className="ui huge header">csatlakozás meglévőhöz</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="ui two row very relaxed grid">
                                    <div className="ui input">
                                        <input type="text" placeholder="Játékkód" value={value} onChange={handleChange} />
                                    </div>
                                    <div className="ui animated button primary" tabIndex="0" onClick={handleSubmit}>
                                        <div className="visible content">Csatlakozás</div>
                                        <div className="hidden content"><i className="right arrow icon"/></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="ui vertical divider">Vagy</div>
            </div>
        </div>;
}