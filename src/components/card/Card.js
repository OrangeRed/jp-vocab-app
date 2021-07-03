import React from "react";
import Buttons from "../buttons/Buttons";

const Card = ({ card, ...props }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-word">{card.word}</div>
        <div className="card-reading">{card.reading}</div>
        {card.meanings.map((meaning, index) => (
          <div className="card-meaning" key={index}>
            {meaning}
          </div>
        ))}
      </div>
      <Buttons />
    </div>
  );
};

export default Card;
