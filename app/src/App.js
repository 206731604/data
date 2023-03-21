import React, { Component, useEffect, useState } from "react";
import "./App.css";
import { Modal, Table, Upload } from "antd";
import ImgUpload from "./components/ImgUpload";
import { useSelector } from "react-redux";
const App = () => {
	const imgList = useSelector(state => state.imgList);
	return (
		<div className="App">
			<ImgUpload imgList={imgList} />
		</div>
	);
};

export default App;
