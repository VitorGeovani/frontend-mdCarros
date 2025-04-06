import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Carros from './pages/Carros';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carros" element={<Carros />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
