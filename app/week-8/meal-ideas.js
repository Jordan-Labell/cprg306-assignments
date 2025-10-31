"use client";

import { useState, useEffect } from "react";
  



export default function MealIdeas(ingredient) {
    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas(ingredient) {
        console.log(ingredient.ingredient);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.ingredient}`)
        const data = await response.json();
        return data.meals;
    }

  const loadMealIdeas = async () => {
    const newMealIdeas = await fetchMealIdeas(ingredient);
    setMeals(newMealIdeas);
  };
    useEffect(() => {
    loadMealIdeas();
    }, [ingredient]);

    return (
    <div className="mb-auto max-w-90">
      <h1 className="text-4xl font-extrabold mb-4">Meal Ideas with {ingredient.ingredient}</h1>
        <ul className="flex flex-col gap-4">
        {meals && meals.map((meal) => (
            <li key={meal.idMeal} className="bg-slate-400 p-2 w-full my-2 rounded border">
                <h3 className="text-lg font-semibold">{meal.strMeal}</h3>
            </li>
        ))}
        </ul>
    </div>
    );  
}

