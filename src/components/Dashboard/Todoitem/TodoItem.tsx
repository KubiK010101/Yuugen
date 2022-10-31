/** @format */
import { Badge } from "@chakra-ui/react";
import moment from "moment";
import React, { FC } from "react";
import styles from "./Todoitem.module.css";

interface Props {
	todo: ITodo;
}

const TodoItem: FC<Props> = ({ todo: { title, status, createdAt } }) => {
	return (
		<div className={styles.todoRow}>
			<div className={styles.invoice}>{title}</div>
			<div className={styles.status}>
				<span
					style={{
						backgroundColor: status === "in progress" ? "#FFFAEB" : status === "pending" ? "#F2F4F7" : status === "overdue" ? "#FEF3F2" : "#ECFDF3",
						color: status === "in progress" ? "#B54708" : status === "pending" ? "#344054" : status === "overdue" ? "#B42318" : "#027A48",
						padding: "2px 8px",
						borderRadius: 16,
					}}>
					{status}
				</span>
			</div>
			<div className={styles.dueDate}>{moment(createdAt).format("D MMM YY")}</div>
		</div>
	);
};

export default TodoItem;

// <tr className={styles.todoRow}>
// 			<th className={styles.title}>{title}</th>
// 			<th className={styles.status}>{status}</th>
// 			<th className={styles.createdAt}>{createdAt}</th>
// 		</tr>
