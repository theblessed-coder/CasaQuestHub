import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" component={Signup} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
