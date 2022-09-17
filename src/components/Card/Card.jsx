import React from "react";
import "./Card.css";
import Character from "./Character";

export default function Card() {
  return (
    <div className=" card">
      <img src={Character.image} alt="" />
      <div className="card-info">
        <span>Name:</span>
        <p className="info-name">{Character.name}</p>
        <p className="info-generics">
          {Character.species} <span>from</span> {Character.location.name}{" "}
        </p>
      </div>
    </div>
  );
}
