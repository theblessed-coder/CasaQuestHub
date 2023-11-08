import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import Land from "./pages/Land";
import CheckoutPage from "./pages/CheckoutPage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzyE18oPmD1XiLip0PPh1hbyWWGQ4sWX0",
  authDomain: "casa-quest-hub-cd216.firebaseapp.com",
  projectId: "casa-quest-hub-cd216",
  storageBucket: "casa-quest-hub-cd216.appspot.com",
  messagingSenderId: "1016112504107",
  appId: "1:1016112504107:web:537dc46abe8f5ab28a396e"
  };

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/land" element={<Land />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
