/** @format */

/// <reference types="react-scripts" />

interface ITodo {
	id: number;
	title: string;
	status: string;
	text: string;
	createdAt: string;
}
interface ICreate {
	title: string;
	status: string;
	text: string;
}

interface InputProps {
	label: string;
	name: string;
	type: string;
	placeholder: string;
}

interface SelectProps {
	label: string;
	name: string;
	placeholder?: string;
	children: IntrinsicAttributes;
}

interface SvgProps {
	color: string;
}
