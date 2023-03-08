import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Login from "./Login";
import Goods from "./page/Goods";
const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/goods" component={Goods} />
				<Route path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
