import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/Navbar";

import { Link, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "./components/home";
import Add from "./components/add";
import Edit from "./components/edit";

function App() {
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}>
          Edition
        </Route>
      </Routes>
    </div>
  );
}

export default App;
