import React from 'react';
import { useDispatch } from 'react-redux';
import { setStageAction } from '../../actions/stageActions';

export function Stage2(props) {
    const dispatch = useDispatch();

    return <div className="stage" id="stage-2">
            <div className="back-wrapper">
            <div onClick={() => dispatch(setStageAction(1))} ><i className="arrow left icon large"></i></div>
            </div>
            <div className="ui segment">
                <h2 className="ui header huge centered">Játékkód</h2>
                <div className="ui action input">
                    <input className="copyInput" type="text" value="6HP13M" readOnly/>
                    <button className="copyToken ui right icon button" type="button" name="copyToken" value="copy"><i
                            className="clipboard icon"></i></button>
                </div>
                <p>Küld el ezt a kódot a másik játékosnak, hogy be tudjon lépni ebbbe a játékmenetbe!</p>
                <p>A továbblépéshez be kell lépnie a másik játékosnak is.</p>
            </div>
        </div>;
}