import React, { useEffect, useState } from "react";
import axios from "axios";
import Meal from "./Meal";

function App() {
  const [meal, setMeal] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
      .then((res) => setMeal(res.data.meals));
  }, [text]);

  return (
    <>
      <div className="app-container">
        <h1 className="heading-primary"> Recette de cuisine</h1>
        <input
          type="text"
          className="inputMeal"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tapez en anglais le nom d'un aliment"
        />
        <ul className="meals-container">
          {meal.slice(0, 24).map((meal, index) => (
            <Meal key={index} meal={meal} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
