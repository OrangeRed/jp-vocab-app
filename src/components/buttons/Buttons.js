import React, { useState } from "react";
import "./Buttons.css";
import Button from "@material-ui/core/Button";

function Buttons({ dimensions, newCard }) {
  const [tempCard, setTempCard] = useState({ word: "男" });

  const styles = (color) => {
    return {
      background: color,
      textTransform: "none",
      fontSize: "16px",
    };
  };

  const getRandWord = async () => {
    const word = await fetch(
      "https://random-word.ryanrk.com/api/jp/word/random"
    )
      .then((res) => res.json())
      .then((resData) => {
        return resData;
      });
    return word;
  };

  const getWordRemain = async () => {
    // const rem = await fetch(
    //   `https://jisho.org/api/v1/search/words?keyword=${tempCard.word}`,
    //   {
    //     method: "cors",
    //     headers: {
    //       "Access-Control-Allow-Headers": "*",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((resData) => console.log(resData))
    //   .catch((err) => console.log(err));
    // console.log(rem);
  };

  return (
    <div className="btn-container">
      <div className="btn">
        <Button
          variant="contained"
          style={styles("#ffd1dc")}
          onClick={() => {
            getRandWord().then((res) => {
              setTempCard({ word: res[0] });
            });
          }}
        >
          Again
        </Button>
      </div>
      <div className="btn">
        <Button
          variant="contained"
          style={styles("#c1e1c1")}
          onClick={() => {
            getWordRemain();
          }}
        >
          Good
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
