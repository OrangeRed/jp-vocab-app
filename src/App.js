import React, { useState } from "react";
import Card from "./components/card/Card";
import "./styles/GlobalStyles.css";

const App = () => {
  const [card, setCard] = useState(TEST_CARD);
  const [newCard, setNewCard] = useState(true);

  return <Card card={card} setCard={setCard} />;
};

const TEST_CARD = {
  key: "0",
  word: "男",
  reading: "おとこ",
  meanings: ["man", "male", "boy"],
};

export default App;
