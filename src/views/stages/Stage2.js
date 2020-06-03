import React from 'react';
import {useSelector} from 'react-redux';
import {CodeIndicator} from "../inputs/codeIndicator";

export function Stage2() {

    const round = useSelector(state => state.round);
    const code = round.roomId || '  ';

    return <div className="stage" id="stage-2">
            <div className="ui padded segment">
                <h2 className="ui header huge centered">Játékkód</h2>
                <CodeIndicator code={code}/>
                <p>Küld el ezt a kódot a másik játékosnak, hogy be tudjon lépni ebbbe a játékmenetbe!</p>
                <p>Ha a másik játékos is belépett, automatikusan átkerülsz a felkészítő oldalra.</p>
            </div>
        </div>;
}