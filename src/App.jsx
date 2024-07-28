import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Error from './pages/Error/Error';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:id" component={Details} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
