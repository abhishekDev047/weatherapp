import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Weather from './components/Weather';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const  App=()=> {
  return (
      <>
      <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path='/Weather' element={<Weather/>}></Route>
        </Routes>
        </Router>
      </>
  );
};

export default App;
