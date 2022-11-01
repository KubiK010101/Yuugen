/** @format */

import { FC } from "react";

const DashboardSvg: FC<SvgProps> = ({ color }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
			<path stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 9h18M9 21V9M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z'></path>
		</svg>
	);
};

export default DashboardSvg;
