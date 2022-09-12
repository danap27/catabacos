import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Sale from "./pages/sale";
import Contact from "./pages/contact";
import About from "./pages/about";
import SignUp from "./pages/signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/ofertas" component={Sale} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/sign-up" component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
