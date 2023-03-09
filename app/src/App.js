import React, { lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Home = lazy(() => import("./page/Home"));
const Goods = lazy(() => import("./page/Goods"));
const Login = lazy(() => import("./Login"));
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
