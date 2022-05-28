/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profil from '../pages/Profil';
import Home from '../pages/Home';
import Navbar from '../Navbar';


const index = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profil"  element={<Profil/>}/>
            </Routes>
        </Router>
      );
};

export default index;