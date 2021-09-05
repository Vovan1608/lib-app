import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';
import Sidebar from "./components/Sidebar/Sidebar";
import Authors from "./components/Authors/Authors";
import Books from "./components/Books/Books";
import Add from "./components/Add/Add";

const App = () => {
  return (
    <Router>
			<div className="center">
        <div className="wrap">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Authors} />
            <Route path="/authors" component={Authors} />
            <Route path="/books" component={Books} />
            <Route path="/add" component={Add} />
            {/* <Route path="/edit" component={Edit} /> */}
          </Switch>
        </div>
			</div>
		</Router>
  );
}

export default App;
