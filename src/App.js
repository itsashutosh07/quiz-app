import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Recap from "./components/Recap";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:subject" element={<Quiz />} />
      <Route path="/recap" element={<Recap />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
