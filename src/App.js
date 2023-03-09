import { useEffect, useState } from 'react';

import axios from 'axios';
import Cook from './Cook';

function App() {
  const [meals, setMeals] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${content} `).then(res => {
      console.log(res.data.meals);
      setMeals(res.data.meals);
    });
  }, [content]);

  return (
    <>
      <div className="app-container">
        <h1>Recette de cuisine</h1>
        <input
          type="text"
          placeholder="Tapez le nom d'un aliment"
          onChange={e => setContent(e.target.value)}
        />
        <div className="meals-container">
          {meals ? (
            <>
              {meals.slice(0, 24).map((meal, index) => (
                <Cook key={index} meal={meal} />
              ))}
            </>
          ) : (
            <>
              <p>Cette recette n'existe pas </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default App;
