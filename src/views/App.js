import React from 'react';

import { Header } from "./header/Header";
import { Stage1 } from './stages/Stage1';
import { Stage2 } from './stages/Stage2';
import { Stage3 } from './stages/Stage3';
import { Stage4 } from './stages/Stage4';

function App(props) {
	return (
		<div className="App stage-container">
			<Header></Header>
			<Stage1></Stage1>
			<Stage2></Stage2>
			<Stage3></Stage3>
			<Stage4></Stage4>
		</div>
	);
}

export default App;
