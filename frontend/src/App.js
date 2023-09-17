import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/signup" component={Signup} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
