import React, { Component, useState } from "react";
import "./App.css";
import { Modal, Table, Upload } from "antd";

const App = () => {
	const [fileList, setFileList] = useState([
		{
			uid: "-1",
			name: "image.png",
			status: "done",
			url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
		},
		{
			uid: "rc-upload-1678970780203-2",
			lastModified: 1663239550461,
			lastModifiedDate: "2022-09-15T10:59:10.461Z",
			name: "0d6e8e683c0980e33dd5f46d43bca027.jpeg",
			size: 86377,
			type: "image/jpeg",
			percent: 100,
			originFileObj: {
				uid: "rc-upload-1678970780203-2",
			},
			status: "done",
			response: {
				code: 0,
				msg: "succeed",
				result: "//img-dove.oss-cn-hongkong.aliyuncs.com/8w-study/5ea0902e6b1b403d7a9f9645edad34321678966351.tmp",
			},
			xhr: {},
			thumbUrl: "/logo192.png",
		},
	]);

	const uploadButton = (
		<div>
			<div
				style={{
					marginTop: 8,
				}}>
				Upload
			</div>
		</div>
	);
	const handleChange = ({ fileList: newFileList }) => {
		setFileList(newFileList);
	};
	return (
		<>
			<Upload
				action="/Home/Apis/Index/_c/upload"
				listType="picture-card"
				fileList={fileList}
				name="file"
				onChange={handleChange}
				data={{ type: "upload" }}>
				{fileList.length >= 8 ? null : uploadButton}
			</Upload>
		</>
	);
};

export default App;
