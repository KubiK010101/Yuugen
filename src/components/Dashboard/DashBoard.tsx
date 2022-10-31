/** @format */
import React, { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { getTodos } from "../../api";
import TodoItem from "./Todoitem/TodoItem";
import PublishReport from "./PublishReport/PublishReport";
import styles from "./DashBoard.module.css";

const DashBoard: FC = () => {
	const [loader, setLoader] = useState(true);
	const [err, setErr] = useState("");
	const [todos, setTodos] = useState<ITodo[]>([]);
	const [overdue, setOverdue] = useState<number>(0);
	const [finished, setFinished] = useState<number>(0);
	const [latestDate, setLatestDate] = useState<string>("");
	const { t, i18n } = useTranslation();

	useEffect(() => {
		const lastTodo = todos[todos.length - 1];
		if (lastTodo) {
			setLatestDate(lastTodo.createdAt);
		}
	}, [todos]);
	useEffect(() => {
		getTodos()
			.then((res) => {
				let overdueCount: number = 0;
				let finishedCount: number = 0;
				res.data.forEach((el: ITodo) => {
					if (el.status === "overdue") {
						overdueCount++;
					}
					if (el.status === "finished") {
						finishedCount++;
					}
				});
				setOverdue(overdueCount);
				setFinished(finishedCount);
				setTodos(res.data.sort((a: ITodo, b: ITodo) => (b.createdAt > a.createdAt ? -1 : b.createdAt < a.createdAt ? 1 : 0)));
			})
			.catch((err) => {
				setErr(err.response.message);
			})
			.finally(() => {
				setLoader(false);
			});
	}, []);
	return (
		<div className={styles.container}>
			{loader ? (
				<p>Loading...</p>
			) : err ? (
				<div>{err}</div>
			) : (
				<>
					<div className={styles.todosContainer}>
						<h1 className={styles.title}>
							{t("mytodos")} <span className={styles.titleSpan}>{todos.length}</span>
						</h1>

						<div className={styles.table}>
							<div className={styles.todosHeader}>
								<span className={`${styles.invoice} ${styles.todoElement}`}>{t("invoice")}</span>
								<span className={`${styles.status} ${styles.todoElement}`}>{t("status")}</span>
								<span className={`${styles.dueDate} ${styles.todoElement}`}>{t("dueDate")}</span>
							</div>
							{todos.map((todo: ITodo) => {
								return <TodoItem key={todo.id} todo={todo} />;
							})}
						</div>
					</div>
					<div className={styles.selectedTodosConatiner}>
						<PublishReport overdue={overdue} finished={finished} all={todos.length} latestDate={latestDate} />
					</div>
				</>
			)}
		</div>
	);
};

export default DashBoard;
