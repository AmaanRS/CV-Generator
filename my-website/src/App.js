// App.js
import React from "react";
import Header from "./components/Header";
import NavComponent from "./components/NavComponent";
import Section from "./components/Section";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Features from "./components/Features";
import Profession from "./components/Profession";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Layout/Home";
import Create from "./Layout/Create"
import Detail from "./Layout/Detail"
import Select from "./pages/Select";
import Dasboard from "./components/Dasboard";

function App() {
  return (
  <Router>
    <Routes>
      <Route element={<Home />} path="/" /> 
      <Route element={<Create />} path='/create' />
      <Route element={<Detail/>} path='/detail'/>
      <Route element={<Select/>} path="/select" />
      <Route element={<Dasboard/>} path="/dashboard"/>
    </Routes>
  </Router>
  );
}

export default App;
