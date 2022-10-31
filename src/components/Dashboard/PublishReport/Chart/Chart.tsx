/** @format */

import React, { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styles from "./Chart.module.css";
import "react-circular-progressbar/dist/styles.css";

interface Props {
	data: number;
	all: number;
	type: string;
	partColor: string;
	fullColor: string;
}

export const Chart: FC<Props> = ({ data, all, type, partColor, fullColor }) => {
	const percentage = (data / all) * 100;

	return (
		<div className={styles.container}>
			<div style={{ width: 70, height: 70, display: "flex", justifyContent: "center" }}>
				<CircularProgressbar
					value={percentage}
					strokeWidth={8}
					text={`${data}/${all}`}
					styles={buildStyles({
						strokeLinecap: "round",
						pathTransitionDuration: 0.5,
						// Colors
						pathColor: partColor,
						textColor: "black",
						textSize: "25px",
						trailColor: fullColor,
						backgroundColor: "#3e98c7",
					})}
				/>
			</div>
			<h1 className={styles.type}>{type}</h1>
		</div>
	);
};
