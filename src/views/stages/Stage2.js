import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setStageActive } from '../../actions/stageActions';

export function Stage2() {
    const dispatch = useDispatch();

    const round = useSelector(state => state.round);
    const code = round.roomId || '  ';

    return <div className="stage" id="stage-2">
            <div className="back-wrapper">
            <div onClick={() => dispatch(setStageActive(1))} ><i className="arrow left icon large"/></div>
            </div>
            <div className="ui segment">
                <h2 className="ui header huge centered">Játékkód</h2>
                <div className="ui action input">
                    <input className="copyInput" type="text" value={code} readOnly style={{width: '300px', textAlign: 'center'}}/>
                    <button className="copyToken ui right icon button" type="button" name="copyToken" value="copy">
                        <i className="clipboard icon"/>
                    </button>
                </div>
                <p>Küld el ezt a kódot a másik játékosnak, hogy be tudjon lépni ebbbe a játékmenetbe!</p>
                <p>A továbblépéshez be kell lépnie a másik játékosnak is.</p>
            </div>
        </div>;
}