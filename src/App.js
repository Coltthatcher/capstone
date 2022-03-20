import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home';
import SignUp from './components/pages/HomePage/SignUp';
import WorkoutPlans from './components/pages/HomePage/WorkoutPlans';
import Personal from './components/Personal';
import Pricing from './components/Pricing';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/workout-plans' exact element= {<Personal/>} ></Route>
        <Route path='/pricing' exact element={<Pricing/>} />
        <Route path='/sign-up' exact element= {<SignUp/>} ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
