/** @format */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./localization/en.json";

i18n.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		resources: { en: { translation: en } },
		fallbackLng: "en",
		debug: true,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18n;
