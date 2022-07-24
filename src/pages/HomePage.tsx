import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../HomeStyle.css";
import homeLogo from "../assets/home-logo.png";

const HomePage = () => {
  let navigate = useNavigate();
  return (
    <div className="home">
      <img className="logo" src={homeLogo} alt="Logo" />
      <button className="btn" onClick={() => navigate("/chess")}>
        Шахматы
      </button>
      <button className="btn" onClick={() => navigate("/draughts")}>
        Шашки
      </button>
    </div>
  );
};

export default HomePage;
