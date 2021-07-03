import React, { useState } from "react";
import Card from "./components/card/Card";
import "./styles/GlobalStyles.css";

const App = () => {
  const [card, setCard] = useState(TEST_CARD);

  return <Card card={card} />;
};

const TEST_CARD = {
  key: "0",
  word: "男",
  reading: "おとこ",
  meanings: ["man", "male", "boy"],
};

export default App;
