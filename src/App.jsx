// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import DataCollection from './pages/DataCollection.jsx';
import DataCleaning from './pages/DataCleaning.jsx';
import BusinessAnalysis from './pages/BusinessAnalysis.jsx';
import Results from './pages/Results.jsx';
import Splash from './pages/Splash.jsx';
//port './styles/App.css';

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/data" element={<DataCollection />} />
          <Route path="/cleaning" element={<DataCleaning />} />
          <Route path="/analysis" element={<BusinessAnalysis />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
