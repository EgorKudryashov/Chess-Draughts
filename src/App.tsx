import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chess from "./pages/Chess";
import Draughts from "./pages/Draughts";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/draughts" element={<Draughts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
