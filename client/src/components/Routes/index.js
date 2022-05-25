/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Profil from '../pages/Profil';
import Home from '../pages/Home';


const index = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profil"  element={<Profil/>}/>
            </Routes>
        </Router>
      );
};

export default index;