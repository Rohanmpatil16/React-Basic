import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>

      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Profile Page */}
        <Route path="/profile/:name" element={<Profile />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
};

export default App;