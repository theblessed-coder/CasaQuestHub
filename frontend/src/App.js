import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" component={SignupPage} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
