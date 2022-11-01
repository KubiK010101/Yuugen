/** @format */

import React, { FC } from "react";

const CreateSvg: FC<SvgProps> = ({ color }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'>
			<path stroke={color} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8m-6-6l6 6m-6-6v6h6m-8 10v-6m-3 3h6'></path>
		</svg>
	);
};

export default CreateSvg;
