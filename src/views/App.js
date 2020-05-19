import React from 'react';

import { Header } from "./header/Header";
import { Stage1 } from './stages/Stage1';
import { Stage2 } from './stages/Stage2';
import { Stage3 } from './stages/Stage3';
import { Stage4 } from './stages/Stage4';

import { useSelector } from 'react-redux';

function App(props) {
	const stage = useSelector(state => state.stage);
	let stageComp;
	
	if (stage === 1) stageComp = <Stage1></Stage1>
	if (stage === 2) stageComp = <Stage2></Stage2>
	if (stage === 3) stageComp = <Stage3></Stage3>
	if (stage === 4) stageComp = <Stage4></Stage4>
	
	return (
		<div className="App stage-container">
			<Header></Header>
			{stageComp}
		</div>
	);
}

export default App;
