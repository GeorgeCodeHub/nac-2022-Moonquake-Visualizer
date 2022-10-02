import React from "react";

import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function DataSelector({
	selectedDataset,
	setSelectedDataset
}: {
	selectedDataset: string;
	setSelectedDataset: React.Dispatch<React.SetStateAction<string>>;
}) {
	const handleChange = (event: SelectChangeEvent) => {
		setSelectedDataset(event.target.value);
	};
	return (
		<Typography className="selector-title" variant="h2">
			Moonquake Dataset
			<Select
				value={selectedDataset}
				onChange={handleChange}
				autoWidth
				label="Date"
				renderValue={(selected) => (
					<Typography className="selector-title-select" variant="h2">
						{selected}
					</Typography>
				)}
				style={{ pointerEvents: "auto", userSelect: "auto" }}
			>
				<MenuItem
					value="1979"
					style={{
						background: "#072227",
						zIndex: 99999999
					}}
				>
					<Typography className="selector-title-select" variant="h2">
						1979
					</Typography>
				</MenuItem>
				<MenuItem
					value="1983"
					style={{
						background: "#072227",
						zIndex: 99999999
					}}
				>
					<Typography className="selector-title-select" variant="h2">
						1983
					</Typography>
				</MenuItem>
				<MenuItem
					value="2005"
					style={{
						background: "#072227",
						zIndex: 99999999
					}}
				>
					<Typography className="selector-title-select" variant="h2">
						2005
					</Typography>
				</MenuItem>
			</Select>
		</Typography>
	);
}

export default DataSelector;
