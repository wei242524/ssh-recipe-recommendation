// src/pages/AddIngredient.js
import React, { useState } from "react";
import axios from "../axiosInstance";

const AddIngredient = () => {
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/ingredients", { name, expiration_date: expirationDate, quantity })
      .then(() => alert("Ingredient added successfully!"))
      .catch((error) => console.error("Error adding ingredient:", error));
  };

  return (
    <div>
      <h1>Add Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Expiration Date:
          <input type="date" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} required />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </label>
        <button type="submit">Add Ingredient</button>
      </form>
    </div>
  );
};

export default AddIngredient;

