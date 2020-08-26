import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getApi } from "./Api";
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
    getApi("/users").then((data) => this.setState({ users: data }));
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
