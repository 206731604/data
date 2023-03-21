import React from "react"
import { useSelector } from "react-redux"
import "./App.css"
import ImgUpload from "./components/ImgUpload"
const App = () => {
	const imgList = useSelector(state => state.imgList);
	return (
		<div className="App">
			<ImgUpload imgList={imgList} />
		</div>
	);
};

export default App;
