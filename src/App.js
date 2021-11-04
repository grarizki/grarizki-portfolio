import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Home from './pages/home/Home';
// import Projects from './pages/projects/Projects';
// import Blog from './pages/blog/Blog';
// import About from './pages/about';
// import Contact from './pages/contacts/Contact';
// import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <h1 className="flex mx-auto text-2xl text-red-900 "> INI PAKE TAILWIND</h1>
      {/* <Switch>
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
      </Switch> */}
    </div>
  );
}

export default App;
