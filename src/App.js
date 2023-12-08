import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

function App() {
  return (
    <div id="App">
      <Navbar/>
      <div id="Main">
        <Home />
      </div>
    </div>
  );
}

export default App;
