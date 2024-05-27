import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Lamasia from './components/Lamasia';
import Home from './components/Home';
import History from './components/History';
import Team from './components/Team';
import Stadium from './components/Stadium';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Home' Component={Home} />
          <Route path='/Lamasia' Component={Lamasia} />
          <Route path='/History' Component={History} />
          <Route path='/Team' Component={Team} />
          <Route path='/Stadium' Component={Stadium} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
