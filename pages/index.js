import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [userData, setUserData] = useState({
    username: null,
    password: null,
    userid: null,
    startdate: null,
    enddate: null
  });

  useEffect(() => {
    setIsClient(true);
    
    const requiredFields = ['username', 'password', 'userid'];
    const storedData = {};
    let allFieldsPresent = true;

    for (const field of requiredFields) {
      const value = localStorage.getItem(field);
      if (value) {
        storedData[field] = value;
      } else {
        allFieldsPresent = false;
        break;
      }
    }

    if (allFieldsPresent) {
      setUserData(storedData);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> :<Login />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Login />} />
      </Routes>
    </Router>
  );
};

export default Index;