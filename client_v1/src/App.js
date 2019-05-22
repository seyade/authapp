import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/NavBar';
import Landing from './components/layout/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Route exact path="/" component={Landing} />
        </header>
      </div>
    </Router>
  );
}

export default App;
