import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'; 
import Skills from './components/Skills'; 
import Contact from './components/Contact'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Components.css';

const App = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
        <div className="container">
          <Link className="navbar-brand" to="/">My Profile</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container" style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
