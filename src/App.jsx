import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Children from './Components/Children';
import Home from './Components/Home';
import Teacher from './Components/Teacher';
import Activities from './Components/Activities';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} className='home'></Route>
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/children" element={<Children />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;




