/** @format */

import { FC } from "react";

const BellIconSvg: FC<SvgProps> = ({ color }) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'>
			<path
				stroke={color}
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='1.67'
				d='M11.442 17.5a1.667 1.667 0 01-2.884 0M15 6.667a5 5 0 00-10 0c0 5.833-2.5 7.5-2.5 7.5h15S15 12.5 15 6.667z'></path>
		</svg>
	);
};

export default BellIconSvg;
