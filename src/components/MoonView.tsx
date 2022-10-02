import { useState, useEffect, useRef, Suspense } from "react";

import moment from "moment";

import Globe from "react-globe.gl";

import { nakamura_1979, nakamura_1983, nakamura_2005 } from "../datasets";

import lunarSurface from "../assets/lunar_surface.jpg";
import lunarBump from "../assets/lunar_bumpmap.jpg";

function MoonView({ selectedDataset }: { selectedDataset: string }) {
	const [dataset, setDataset] = useState<any[]>([]);

	useEffect(() => {
		switch (selectedDataset) {
			case "1979":
				setDataset(
					nakamura_1979.map((item) => ({
						...item,
						labelSize: 1.2,
						labelText: `${moment(new Date(item.Year, item.Day / 12, item.Day % 12, item.H, item.M, item.S)).format(
							"DD/MM/YY HH:mm:ss"
						)}`,
						labelLabel: `<div>Magnitude: ${item.Magnitude}</div> ${
							item?.Comments ? <div>Comment: item?.Comments</div> : ""
						}`
					}))
				);
				break;
			case "1983":
				setDataset(
					nakamura_1983.map((item: any) => {
						const magnitude = 2.5;

						return {
							...item,
							labelSize: 0.6,
							labelText: `${item.AI} ${moment(
								new Date(item.Y, item.JD / 12, item.JD % 12, item.Hour, item.Min, item.Sec)
							).format("DD/MM/YY HH:mm:ss")}`,
							Magnitude: magnitude,
							labelLabel: ``
						};
					})
				);
				break;
			case "2005":
				setDataset(
					nakamura_2005.map((item: any) => {
						const magnitude = item.Depth / 500;

						return {
							...item,
							labelSize: 0.4,
							labelText: `Side: ${item.Side} ${moment(new Date(2005, item.A / 12, item.A % 12 ?? 1)).format(
								"DD/MM/YY"
							)}`,
							labelLabel: `<div>Possible error: [${item.lat_err},${item.lng_err}]</div><div>Depth: ${item.Depth}</div><div>Assumed: ${item.Assumed}</div>`,
							Magnitude: magnitude
						};
					})
				);
				break;

			default:
				break;
		}
	}, [selectedDataset]);

	const colorInterpolator = (t: any) => `rgba(255,100,50,${Math.sqrt(1 - t)})`;

	return (
		<Globe
			globeImageUrl={lunarSurface}
			bumpImageUrl={lunarBump}
			backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
			showGraticules={false}
			ringsData={dataset}
			ringColor={() => colorInterpolator}
			ringMaxRadius="Magnitude"
			labelsData={dataset}
			labelLat={(d: any) => d.lat}
			labelLng={(d: any) => d.lng}
			labelText={(d: any) => d.labelText}
			labelSize={(d: any) => d.labelSize}
			labelDotRadius={0.4}
			labelColor={() => "#d1a324"}
			labelAltitude={0.0045}
			labelResolution={3}
			labelLabel={(d: any) => `${d.labelLabel}`}
		/>
	);
}

export default MoonView;
