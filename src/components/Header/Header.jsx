import React from "react";
import "./Header.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}
