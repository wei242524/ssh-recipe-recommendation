// src/components/IngredientTable.js
import React from "react";

const IngredientTable = ({ ingredients, deleteIngredient }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Expiration Date</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {ingredients.map((ingredient) => (
          <tr key={ingredient.id}>
            <td>{ingredient.id}</td>
            <td>{ingredient.name}</td>
            <td>{ingredient.expiration_date}</td>
            <td>{ingredient.quantity}</td>
            <td>
              <button onClick={() => deleteIngredient(ingredient.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientTable;
