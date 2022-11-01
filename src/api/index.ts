/** @format */
import axios from "axios";
const BASE_URL = "http://188.166.76.128:8888/api/task";

// export const getTodos = async () => {
// 	return axios.post(`${BASE_URL}/getAll`);
// };
export const createTodo = async ({ title, status, text }: ICreate) => {
	return axios.post(`${BASE_URL}/save`, {
		title,
		status: status.toLowerCase(),
		text,
	});
};
export const getTodos = async () => {
	return axios.post(`${BASE_URL}/getAll`, {
		status: "finished",
	});
};
