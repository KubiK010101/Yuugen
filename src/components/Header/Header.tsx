/** @format */

import React, { FC } from "react";
import styles from "./Header.module.css";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DashboardSvg from "../../assets/svg/dashboard";
import CreateSvg from "../../assets/svg/create";
import LogoSvg from "../../assets/svg/logo";
import BellIconSvg from "../../assets/svg/bellIcon";

const Header: FC = () => {
	const { t, i18n } = useTranslation();
	const changeLangHandler = (language: string): void => {
		i18n.changeLanguage(language);
	};

	return (
		<header className={styles.container}>
			<div className={styles.leftContainer}>
				<div className={styles.logoContainer}>
					<div className={styles.imageContainer}>
						<LogoSvg color='#BCC8BC' />
					</div>
				</div>
				<div className={styles.navigationContainer}>
					<NavLink
						children={({ isActive }) => {
							return (
								<div className={styles.navElementContainer}>
									<span className={styles.navIcon}>
										<DashboardSvg color={isActive ? "#293329" : "#90A390"} />
									</span>
									<span className={isActive ? styles.active : styles.inActive}>{t("dashboard")}</span>
								</div>
							);
						}}
						className={({ isActive }) => `${isActive ? styles.active : styles.inActive} ${styles.navElementContainer}`}
						to='/dashboard'></NavLink>
					<NavLink
						children={({ isActive }) => {
							return (
								<div className={styles.navElementContainer}>
									<span className={styles.navIcon}>
										<CreateSvg color={isActive ? "#293329" : "#90A390"} />
									</span>
									<span className={isActive ? styles.active : styles.inActive}>{t("create")}</span>
								</div>
							);
						}}
						className={({ isActive }) => `${isActive ? styles.active : styles.inActive} ${styles.navElementContainer}`}
						to='/create-task'></NavLink>
				</div>
			</div>

			<div className={styles.notification}>
				<BellIconSvg color='#546554' />
			</div>
		</header>
	);
};

export default Header;
