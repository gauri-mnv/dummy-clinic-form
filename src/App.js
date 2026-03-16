import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DynamicForm from './DynamicForm'; 
import TestingLab from './components/TestingLab'; 
import PatientTestForm from './components/PatientTestForm'; 

import './App.css';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Clinic Management System</h1>
      <p>Welcome, Dr. GB</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <Link to="/view-form">
          <button className="nav-btn next" style={{ width: 'auto' }}>
            Open Patient Form
          </button>
        </Link>

        {/* 2. Add a shortcut to your Media Test Form */}
        <Link to="/test-media">
          <button className="nav-btn" style={{ width: 'auto', backgroundColor: '#6c757d', color: 'white' }}>
            Test Media PDF Render
          </button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-form" element={<DynamicForm />} />
        <Route path="/test-lab/:scenario" element={<TestingLab />} />
        <Route path="/test-media" element={<PatientTestForm />} />
      </Routes>
    </Router>
  );
}

export default App;