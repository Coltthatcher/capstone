import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import SignUp from './components/pages/HomePage/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/sign-up' exact element= {<SignUp/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
