import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Nav from "./components/navbar";
import About from "./pages/about";
import Contact from "./pages/contact";
import User from "./pages/user";
import Error from "./pages/error";
import { Route, Routes } from "react-router-dom";

import React from "react";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
