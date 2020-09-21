import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getApi, postApi } from "./Api";
import SignInSide from "../src/loginPage";
import RegisterSide from "../src/Register";
import EnhancedTable from "../src/viewStudentInfo";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../src/Header";
import Home from "./Home";
import Footer from "./Footer";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StudentTableV from './studentData.js';
import GroupTable from './groupData.js';
import StudentPreferences from './StudentPreferences';

class App extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    /*postApi("/users", {
      "studentId": "13423456",
      "email": "krystian.test@uts.com",
      "password": "12345678"
    }).then((data) => console.log(data));*/
    // getApi("/users").then((data) => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
         <Switch>
            <Route path="/loginpage" component={SignInSide} />
            <Route path="/register" component={RegisterSide} />
            <Route path="/viewStudentInfo" component={EnhancedTable} />
            <Route path="/studentData" component={StudentTableV} />
            <Route path="/groupData" component={GroupTable} />
            <Route path="/StudentPreferences" component={StudentPreferences} />
            <Route exact path="/" component={Home} />
         </Switch>
        </BrowserRouter>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
