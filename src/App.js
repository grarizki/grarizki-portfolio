import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import home from './pages/home/home';
import projects from './pages/projects/projects';
import blog from './pages/blog/blog';
import about from './pages/about';
import contact from './pages/contacts/contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <home />
        </Route>
        <Route path="/projects">
          <projects />
        </Route>
        <Route path="/blog">
          <blog />
        </Route>
        <Route path="/about">
          <about />
        </Route>
        <Route path="/contact-me">
          <contacts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
