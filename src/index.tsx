import * as React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./components/Styles/Styles.css";
import DataListing from "./components/Listing/Index";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={DataListing} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
