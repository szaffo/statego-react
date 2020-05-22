import React from 'react';

import { setStageAction } from '../../actions/stageActions';
import { useDispatch } from 'react-redux';


export function Stage1(props) {
    const dispatch = useDispatch();


    return <div className="stage" id="stage-1">
            <div className="login-wrapper ui segment">
                <div className="login-container ui two column very relaxed grid divided">
                    <div className="two column row">
                        <div className="side left-side column centered">
                            <h2 className="ui huge header">Új játék kezdése</h2>
                            <div className="ui animated button primary large" tabIndex="0"
                            onClick={() => dispatch(setStageAction(2))}>
                                <div className="visible content">Játék</div>
                                <div className="hidden content"><i className="right arrow icon"></i></div>
                            </div>
                        </div>
                        <div className="side right-side column centered">
                            <h2 className="ui huge header">csatlakozás meglévőhöz</h2>
                            <div className="ui two row very relaxed grid">
                                <div className="ui input">
                                    <input type="text" placeholder="Játékkód"/>
                                </div>
                                <div className="ui animated button primary" tabIndex="0"
                                     onClick={() => dispatch({type:'FILL'})}>
                                    <div className="visible content">FILL</div>
                                    <div className="hidden content"><i className="right arrow icon"></i></div>
                                </div>

                                <div className="ui animated button primary" tabIndex="0"
                                     onClick={() => dispatch(setStageAction(3))}>
                                    <div className="visible content">Csatlakozás</div>
                                    <div className="hidden content"><i className="right arrow icon"></i></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="ui vertical divider">Vagy</div>
            </div>
        </div>;
}