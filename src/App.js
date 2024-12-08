import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddIngredient from "./pages/AddIngredient";
import RecipeRecommendation from "./pages/RecipeRecommendation";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Recipe Recommendation System</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Dashboard</a>
              </li>
              <li>
                <a href="/add-ingredient">Add Ingredient</a>
              </li>
              <li>
                <a href="/recipes">Recipe Recommendation</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-ingredient" element={<AddIngredient />} />
            <Route path="/recipes" element={<RecipeRecommendation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



