import React, { Component } from "react";
import { Provider } from "react-redux";
import Notifications from "./Components/Notifications";
import Version from "./Views/Version";
import RouterMain from "./Components/Router/RouterMain";
import Store from "./Store/Store";
import "./scss/App.scss";

class App extends Component {
  componentDidMount() {
    document.title = "Serge";
  }

  render() {
    return (
      <Provider store={Store}>
        <RouterMain />
        <Notifications />
        <Version />
      </Provider>
    );
  }
}

export default App;
