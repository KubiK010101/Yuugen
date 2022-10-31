/** @format */

import * as yup from "yup";
import i18n from "../i18n";

const titleRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// const titleRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const formSchema = yup.object().shape({
	title: yup
		.string()
		.matches(titleRules, { message: i18n.t("errors.notValid") })
		.required("Required"),
	status: yup.string().oneOf(["Draft", "Overdue", "Finished", "In progress"], "Invalid  Status").required("Required"),
	text: yup.string().min(10, "Text must be at least 10 characters long"),
});
