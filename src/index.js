import React from 'react';
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap"
import Nav from "./module/pages/nav"
import { main } from "./module/router.js";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	render() {
		return (
			<div className="App" enabled={true}>
				<Container fluid="true">					
					<Row className="justify-content-center" noGutters="true">
						<Col >
							<div >
								{ main.map((router, index) => (
									<Route exact key={ index } { ...router.routeProps } />
								)) }
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

ReactDOM.render(
	<HashRouter >
		<App />
	</HashRouter>,
	document.getElementById("root")
);