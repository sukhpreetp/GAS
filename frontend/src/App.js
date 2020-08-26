import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getApi } from "./Api";
import SignInSide from "../src/loginPage";
import RegisterSide from "../src/Register";
import EnhancedTable from "../src/viewStudentInfo";
import { Route, Switch, BrowserRouter } from "react-router-dom";

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Users get from backend api and the data is from
            <a href="https://console.firebase.google.com/project/uts-gas/database/uts-gas/data/~2Fusers">
              {" "}
              firebase
            </a>
          </p>
          {this.state.users.map((user) => (
            <p>
              {user.username} {user.email}
            </p>
          ))}
        </header>
        <BrowserRouter>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route path="/loginpage" component={SignInSide} />
            <Route path="/register" component={RegisterSide} />
            <Route path="/viewStudentInfo" component={EnhancedTable} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
