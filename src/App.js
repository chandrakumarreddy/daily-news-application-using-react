import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//////components
import Header from "./components/Header";
import Footer from "./components/Footer";
///containers
import Home from "./containers/Home";
import Gallery from "./containers/Gallery";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Switch>
						<Route path="/gallery/:id" component={Gallery} />
						<Route exact path="/" component={Home} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
