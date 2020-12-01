import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Home} from './pages/home';
import {About} from './pages/about';
import {City} from './pages/city';
import {NotFound} from './pages/not-found';
import Nav from './components/nav/nav';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 pos-rel">
            <Nav />
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/city/:name">
          <City />
        </Route>
        <Route path="/">
          <Redirect to="/404-page" />
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
