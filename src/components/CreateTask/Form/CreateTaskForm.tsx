/** @format */

import { Form, Formik } from "formik";
import { formSchema } from "../../../schemas";
import { useState } from "react";
import { createTodo } from "../../../api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomTextArea from "./CustomTextarea";
import "./CreateTaskForm.css";
import PlusCircleSvg from "../../../assets/svg/plusCircle";

const CreateTaskForm = () => {
	const [serverError, setServerError] = useState("");
	const { t, i18n } = useTranslation();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{ title: "", status: "Draft", text: "" }}
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
			{({ isSubmitting }) => (
				<Form>
					<CustomInput label='Title' name='title' type='text' placeholder='' />
					<CustomSelect label='Status' name='status'>
						<option value='Draft'>Draft</option>
						<option value='Overdue'>Overdue</option>
						<option value='Finished'>Finished</option>
						<option value='In progress'>In progress</option>
					</CustomSelect>
					<CustomTextArea label='Description' name='text' type='textarea' placeholder='Enter a description...' />
					<span className='error'>{serverError}</span>
					<button className='form-btn' disabled={isSubmitting && !serverError} type='submit'>
						<span>{t("create")}</span>
						<PlusCircleSvg color='#fff' />
					</button>
				</Form>
			)}
		</Formik>
	);
};
export default CreateTaskForm;
