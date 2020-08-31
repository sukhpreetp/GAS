import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getApi, postApi } from "./Api";
import SignInSide from "../src/loginPage";
import RegisterSide from "../src/Register";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../src/Header";
import Home from "./Home";
import Footer from "./Footer";

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
    getApi("/users").then((data) => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/loginpage" component={SignInSide} />
            <Route path="/register" component={RegisterSide} />
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
