import { useEffect, useState } from 'react';

import axios from 'axios';
import Cook from './Cook';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken').then(res => {
      console.log(res.data.meals);
      setMeals(res.data.meals);
    });
  }, []);

  return (
    <>
      <div className="app-container">
        <h1>React Cook</h1>
        <input type="text" placeholder="Tapez le nom d'un aliment" />
        <div className="meals-container">
          {meals.map((meal, index) => (
            <Cook key={index} meal={meal} />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
