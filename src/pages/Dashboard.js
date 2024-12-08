import React, { useState, useEffect } from "react";
import axios from "../axiosInstance";

const Dashboard = () => {
  const [ingredients, setIngredients] = useState([]); // 存儲食材數據

  // 從後端獲取所有食材數據
  useEffect(() => {
    axios
      .get("/ingredients")
      .then((response) => {
        setIngredients(response.data); // 設置獲取的數據到狀態
      })
      .catch((error) => {
        console.error("Error fetching ingredients:", error);
      });
  }, []);

  // 刪除食材功能
  const deleteIngredient = (id) => {
    axios
      .delete(`/ingredients/${id}`) // 發送 DELETE 請求到後端
      .then(() => {
        alert("Ingredient deleted successfully!"); // 成功提示
        // 更新界面，過濾掉被刪除的食材
        setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting ingredient:", error);
      });
  };

  return (
    <div>
      <h1>Ingredient Dashboard</h1>
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
    </div>
  );
};

export default Dashboard;

