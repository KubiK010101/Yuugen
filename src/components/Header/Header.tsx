/** @format */

import React, { FC } from "react";
import styles from "./Header.module.css";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
						<img src={require("../../assets/images/Logo.svg").default} alt='logo' />
					</div>
				</div>
				<div className={styles.navigationContainer}>
					<NavLink
						children={({ isActive }) => {
							return (
								<div className={styles.navElementContainer}>
									<img
										className={styles.navIcon}
										src={isActive ? require("../../assets/images/dashboardActive.svg").default : require("../../assets/images/dashboardInActive.svg").default}
										alt='file-plus'
									/>
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
									<img
										className={styles.navIcon}
										src={isActive ? require("../../assets/images/createActive.svg").default : require("../../assets/images/createInActive.svg").default}
										alt='file-plus'
									/>
									<span className={isActive ? styles.active : styles.inActive}>{t("create")}</span>
								</div>
							);
						}}
						className={({ isActive }) => `${isActive ? styles.active : styles.inActive} ${styles.navElementContainer}`}
						to='/create-task'></NavLink>
				</div>
			</div>
			<div className={styles.settings}>
				<div className={styles.notification}>
					<img src={require("../../assets/images/BellIcon.svg").default} alt='BellIcon' />
				</div>
			</div>
		</header>
	);
};

export default Header;
