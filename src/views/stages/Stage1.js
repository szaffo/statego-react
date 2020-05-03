import React from 'react';
export function Stage1(props) {
    return <div className="stage" id="stage-1">
            <div className="login-wrapper ui segment">
                <div className="login-container ui two column very relaxed grid divided">
                    <div className="two column row">
                        <div className="side left-side column centered">
                            <h2 className="ui huge header">Új játék kezdése</h2>
                            <div className="ui animated button primary large" tabIndex="0"
                            onClick={() => { document.stager.setActive(2)}}>
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
                                    onClick={() => { document.stager.setActive(3)}}>
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