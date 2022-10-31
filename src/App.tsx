/** @format */

import React, { FC } from "react";
import "./App.css";
import { Routes, Route, RedirectFunction, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import CreateTask from "./components/CreateTask/CreateTask";
import DashBoard from "./components/Dashboard/DashBoard";

const App: FC = () => {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Navigate to='/dashboard' />} />
				<Route path='/dashboard' element={<DashBoard />} />
				<Route path='/create-task' element={<CreateTask />} />
			</Routes>
		</div>
	);
};

export default App;
