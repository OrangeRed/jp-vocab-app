import React, { useState } from "react";
import Card from "./components/card/Card";

const App = () => {
  const [card, setCard] = useState(TEST_CARD);

  return <Card card={card} />;
};

const TEST_CARD = {
  word: "男",
  reading: "おとこ",
  meanings: ["man", "male"],
};

export default App;
