import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Blog from './pages/Blog/Blog';
import About from './pages/About';
import Contact from './pages/Contacts/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact-me">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
