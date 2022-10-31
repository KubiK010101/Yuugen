/** @format */

import React, { FC, useState } from "react";
import "./Select.css";
import { useTranslation } from "react-i18next";

interface SelectProps {
	selectedValue: string;
	handleChange: (item: string) => void;
}

const Select: FC<SelectProps> = ({ selectedValue, handleChange }) => {
	const [selectOpened, setSelectOpened] = useState(false);
	const { t, i18n } = useTranslation();
	const selectSpan = ["Draft", "Overdue", "Finished", "In progress"];
	const valueHandler = (item: string) => {
		handleChange(item);
		setSelectOpened(false);
	};
	return (
		<div className='select'>
			<span className='title-span'>{t("selectTitle")}</span>
			<div onClick={() => setSelectOpened(!selectOpened)} className='select-header'>
				<span className='select-value'>{selectedValue}</span>
				<div className='select-arrow'>
					<svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M1 1L5 5L9 1' stroke='#98A2B3' strokeWidth='1.33' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
				</div>
			</div>
			{selectOpened ? (
				<div className='select-body select-body-open'>
					{selectSpan.map((item, index) => {
						return (
							<p key={index} onClick={(e) => valueHandler(item)} className='title-span'>
								{item}
							</p>
						);
					})}
				</div>
			) : (
				<div className='select-body select-body-close'>
					{selectSpan.map((item, index) => {
						return (
							<p key={index} className='title-span'>
								{item}
							</p>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Select;
