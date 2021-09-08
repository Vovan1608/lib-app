import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';
import { Sidebar, Authors, Add, Books, Edit } from "./components";

const App = () => {
  const [authorInfo, setAuthorInfo] = useState(0);

  return (
    <Router>
			<div className="center">
        <div className="wrap">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Authors} />
            <Route
              path="/authors"
              render={props => <Authors setAuthorInfo={setAuthorInfo} {...props}/>}
            />
            <Route path="/books" component={Books} />
            <Route path="/add" component={Add} />
            <Route
              path="/edit"
              render={props => <Edit authorInfo={authorInfo} {...props} />}
            />
          </Switch>
        </div>
			</div>
		</Router>
  );
}

export default App;
