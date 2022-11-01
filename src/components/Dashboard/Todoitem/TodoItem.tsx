/** @format */
import { Badge } from "@chakra-ui/react";
import moment from "moment";
import React, { FC } from "react";
import styles from "./Todoitem.module.css";

interface Props {
	todo: ITodo;
}

type stylesType = {
	backgroundColor: string;
	color: string;
	padding: string;
	borderRadius: number;
};
const TodoItem: FC<Props> = ({ todo }) => {
	const { title, status, createdAt } = todo;
	const styleHandler = (status: string): stylesType => {
		let color, backgroundColor: string | undefined;
		switch (status.toLocaleLowerCase()) {
			case "in progress":
				color = "#B54708";
				backgroundColor = "#FFFAEB";
				break;
			case "pending":
				color = "#344054";
				backgroundColor = "#F2F4F7";
				break;
			case "overdue":
				color = "#B42318";
				backgroundColor = "#FEF3F2";
				break;
			case "draft":
				color = "#344054";
				backgroundColor = "#F2F4F7";
				break;
			case "finished":
				color = "#027A48";
				backgroundColor = "#ECFDF3";
				break;

			default:
				color = "white";
				backgroundColor = "lightblue";
		}
		return {
			backgroundColor,
			color,
			padding: "2px 8px",
			borderRadius: 16,
		};
	};
	return (
		<tr className={styles.todoRow}>
			<td className={styles.invoice}>{title}</td>
			<td className={styles.status}>
				<span style={styleHandler(status)}>{status}</span>
			</td>
			<td className={styles.dueDate}>{moment(createdAt).format("D MMM YY")}</td>
		</tr>
	);
};

export default TodoItem;
