import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';
// import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <Router>
			<div className="center">
        <div className="wrap">
          <Sidebar />
          {/*<Header page="Authors"/>
          <Switch>
            <Route exact path="/" component={MainInfo} />
            <Route path="/authors" component={MainInfo} />
            <Route path="/books" component={Books} />
            <Route path="/modal" component={Modal} />
          </Switch> */}
        </div>
			</div>
		</Router>
  );
}

export default App;
