import React from 'react';
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap"
import Nav from "./module/pages/nav"
import { main } from "./module/router.js";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	render() {
		return (
			<div className="App" enabled={true}>
				<Container fluid="true">					
					<Row className="justify-content-center" noGutters="true">
						<Col >
						
							<div >
								{ main.map((router, index) => (<>
									<Route exact key={ index } { ...router.routeProps } /></>
								)) }
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        promiseInProgress &&
        <div className="show_loading">
            <Loader type="ThreeDots" color="#000" height="100" width="100" />
        </div >
    );
}

ReactDOM.render(
	<HashRouter >	
		<App />
		<LoadingIndicator />
	</HashRouter>,
	document.getElementById("root")
);