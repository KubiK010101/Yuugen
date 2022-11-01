/** @format */

import { useTranslation } from "react-i18next";
import React, { FC } from "react";
import moment from "moment";
import styles from "./PublishReport.module.css";
import { Chart } from "./Chart/Chart";

interface Props {
	overdue: number;
	finished: number;
	all: number;
	latestDate: string;
}

const PublishReport: FC<Props> = ({ overdue, finished, all, latestDate }) => {
	const { t, i18n } = useTranslation();
	return (
		<>
			<h1 className={styles.headline}>
				Publish report <span className={styles.headlineSpan}>4</span>
			</h1>
			<div className={styles.reportContainer}>
				<h2 className={styles.reportContainerSubtitle}>{t("iTDepartment")}</h2>
				<h1 className={styles.reportContainerTitle}>{t("internalGovernanceControl")}</h1>
				<div className={styles.diagrams}>
					<Chart data={overdue} all={all} type={t("overdue")} fullColor='#FEF0C7' partColor='#DC6803' />
					<Chart data={finished} all={all} type={t("finished")} fullColor='#E5F2EA' partColor='#56B87D' />
				</div>
				<div className={styles.latestDate}>
					<p>{t("latestDate")}</p>
					<p style={{ fontWeight: 300 }}>{moment(latestDate).format("D MMM YY")}</p>
				</div>
			</div>
		</>
	);
};

export default PublishReport;
