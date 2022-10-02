import React, { useState } from "react";

import { nakamura_1979 } from "./datasets";

import MoonView from "./components/MoonView";

import "./App.css";
import DataSelector from "./components/DataSelector";

function App() {
	const [selectedDataset, setSelectedDataset] = React.useState("2005");

	return (
		<div className="App">
			<div className="selector-container">
				<DataSelector selectedDataset={selectedDataset} setSelectedDataset={setSelectedDataset} />
			</div>

			{selectedDataset === "1979" && <MoonView selectedDataset={selectedDataset} />}
			{selectedDataset === "1983" && <MoonView selectedDataset={selectedDataset} />}
			{selectedDataset === "2005" && <MoonView selectedDataset={selectedDataset} />}
		</div>
	);
}

export default App;
