import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SearchPage } from './pages/SearchPage';

function App() {

  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/about" component={AboutPage} />
      </Router>
    </>
  );
}

export default App;
