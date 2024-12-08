import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";

const RecipeRecommendation = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // 從後端獲取推薦數據
    axios
      .get("/recipes/recommend")
      .then((response) => {
        setRecommendations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe recommendations:", error);
      });
  }, []);

  return (
    <div>
      <h1>Recipe Recommendations</h1>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((recipe, index) => (
            <li key={index}>
              {recipe.recipe} - Match: {Math.round(recipe.match_percentage * 100)}%
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available at the moment.</p>
      )}
    </div>
  );
};

export default RecipeRecommendation;
