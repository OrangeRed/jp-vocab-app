import React, { useState, useEffect, useRef } from "react";
import Buttons from "../buttons/Buttons";
import "./Card.css";

const Card = ({ card, setCard }) => {
  const [flip, setFlip] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: "initial",
    width: "initial",
  });

  const frontElem = useRef();
  const backElem = useRef();

  useEffect(() => {
    const frontHeight = frontElem.current.getBoundingClientRect().height;
    const backHeight = backElem.current.getBoundingClientRect().height;

    const frontWidth = frontElem.current.getBoundingClientRect().width;
    const backWidth = backElem.current.getBoundingClientRect().width;

    setDimensions({
      height: Math.max(frontHeight, backHeight, 200),
      width: Math.max(frontWidth, backWidth, 300),
    });
  }, [card.word, card.reading, card.meanings]);

  return (
    <div className="card-container">
      <div
        className={`card ${flip ? "flipped" : ""}`}
        style={{
          height: dimensions.height,
          width: dimensions.width,
        }}
        onClick={() => setFlip((flip) => !flip)}
      >
        <div className="card-front" ref={frontElem}>
          <div className="card-word">{card.word}</div>
        </div>
        <div className="card-back" ref={backElem}>
          <div className="word-container">
            <div className="card-word">{card.word}</div>
            <div className="card-reading">{card.reading}</div>
          </div>
          <div className="meaning-container">
            {card.meanings.map((meaning, index) => (
              <div className="card-meaning" key={index}>
                {meaning}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Buttons dimensions={dimensions} setCard={setCard} />
    </div>
  );
};

export default Card;
