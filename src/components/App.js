import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../containers/Home';
import CreateUser from '../containers/CreateUser';
import UpdateUser from '../containers/UpdateUser';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users/create">Create user</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/create" component={CreateUser} />
        <Route exact path="/users/update/:id" component={UpdateUser} />
      </Switch>
    </div>
  </Router>
);

export default App;
