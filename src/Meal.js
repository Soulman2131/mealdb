import React from "react";

function Meal({ meal }) {
  return (
    <li className="meal-item">
      <h2 className="heading-secondary"> {meal.strMeal} </h2>
      <p> Origin: {meal.strArea} </p>
      <img className="meal-img" src={meal.strMealThumb} alt={meal.strMeal} />
      <p className="meal-paragraph">{meal.strInstructions} </p>
    </li>
  );
}

export default Meal;
