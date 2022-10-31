/** @format */
import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./CreateTask.module.css";
import CreateTaskForm from "./Form/CreateTaskForm";

interface Props {}

const CreateTask: FC = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{t("createNew")}</h1>
			<div className={styles.form}>
				<CreateTaskForm />
			</div>
		</div>
	);
};

export default CreateTask;
