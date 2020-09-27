import React from "react";
import "./App.css";
import SignInSide from "../src/loginPage";
import RegisterSide from "../src/Register";
import EnhancedTable from "../src/viewStudentInfo";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StudentTableV from './studentData.js';
import GroupTable from './groupData.js';
import StudentPreferences from './StudentPreferences';
import Info from './Info';
import {userContext} from './userContext';
import {createBrowserHistory} from "history";
import {CookiesProvider} from 'react-cookie';
import { withCookies, Cookies } from 'react-cookie';
import studentDashboard from './studentDashboard.js';
import StudentDashboard from "./studentDashboard.js";

const history = createBrowserHistory();

class App extends React.Component {
	constructor(props) {
		super(props);
		const user = this.props.cookies.get('currentUser');
		this.state = {
			user: user? user: {},
		};
	}

	setUser = (user) => {
		if(user) {
			this.setState({user});
			this.props.cookies.set('currentUser', JSON.stringify(user), { path: '/' });
		}
	}

	render() {
		const value = {
			user: this.state.user,
			setUser: this.setUser,
		}

		return (
			<CookiesProvider>
				<userContext.Provider value={value}>
					<div className="App">
						<BrowserRouter history={history}>
							<Switch>
								<Route path="/loginPage" component={SignInSide}/>
								<Route path="/register" component={RegisterSide}/>
								<Route path="/viewStudentInfo" component={EnhancedTable}/>
								<Route path="/studentData" component={StudentTableV}/>
								<Route path="/groupData" component={GroupTable}/>
								<Route path="/StuInfo" component={Info}/>
								<Route path="/StudentPreferences" component={StudentPreferences}/>
								<Route path="/StudentDashboard" component={StudentDashboard} />
								<Route exact path="/" component={Home}/>
							</Switch>
						</BrowserRouter>
						<ToastContainer/>
					</div>
				</userContext.Provider>
			</CookiesProvider>
		);
	}
}

export default withCookies(App);
