import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DynamicForm from './DynamicForm'; 
import MedicalHistory from './MedicalHistory';
import './App.css';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Clinic Management System</h1>
      <p>Welcome, Dr. GB</p>
      <Link to="/view-form">
        <button className="nav-btn next" style={{ width: 'auto' }}>Open Patient Form</button>

    
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view-form" element={<DynamicForm />} />
      </Routes>
    </Router>
  );
}

export default App;