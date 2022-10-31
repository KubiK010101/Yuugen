/** @format */

import style from "./CreateTaskForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Select from "./Select/Select";
import { formSchema } from "../../../schemas";
import { useState } from "react";
import { createTodo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CreateTaskForm = () => {
	const [serverError, setServerError] = useState("");
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{ title: "", status: "Select status", text: "" }}
			validationSchema={formSchema}
			onSubmit={(values: ICreate, actions) => {
				createTodo(values)
					.then((res) => {
						if (res.status === 201) {
							navigate("/dashboard");
							actions.resetForm();
						}
					})
					.catch((err) => {
						setServerError(err.response.statusText);
					});
			}}>
			{({ isSubmitting, values, handleChange }: any) => (
				<Form>
					<div className={style.form}>
						<div className={style.title}>
							<span className={style.titleSpan}>Title</span>
							<div>
								<Field className={style.input} type='text' name='title' />
								<div className={`${style.error} ${style.titleSpan}`}>
									<ErrorMessage name='title' component='div' />
								</div>
							</div>
						</div>
						<div>
							<Select handleChange={handleChange("status")} selectedValue={values.status} />
							<div className={`${style.error} ${style.titleSpan}`}>
								<ErrorMessage name='status' component='div' />
							</div>
						</div>
						<div>
							<span className={style.titleSpan}>{t("descriptionTitle")}</span>
							<div>
								<Field className={`${style.input} ${style.inputDescription}`} component='textarea' type='text' name='text' placeholder={t("enterDescription")} />
								<div className={`${style.error} ${style.titleSpan}`}>
									<ErrorMessage name='text' component='div' />
								</div>
							</div>
						</div>
						<div className={`${style.error} ${style.titleSpan}`}>{serverError}</div>
						<button className={style.button} type='submit' disabled={isSubmitting && !serverError}>
							<div className={style.buttonBody}>
								<span>{t("create")}</span>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
										stroke='white'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</div>
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};
export default CreateTaskForm;
