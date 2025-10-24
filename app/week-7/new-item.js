"use client";
import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = () => {
        if (quantity <= 19) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity >= 2) setQuantity(quantity - 1); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = {name, quantity, category};
        console.log(item);
        alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };
    
    const handleNameChange = (e) => {
        const newName = e.target.value;
            setName(newName);
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
            setCategory(newCategory);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col bg-slate-100 mx-auto my-4 p-2 gap-4 justify-content">
            <input type="text" required placeholder="New Item Name" className="border rounded p-2" value={name} onChange={(event) => handleNameChange(event)}/>
            <div className="flex space-x-32">
                <div className = "flex bg-slate-100 text-center space-x-2 rounded">
                    <div className = "flex-1 bg-white p-3 m-3 border-black border-2 rounded w-16 text-center">{quantity}</div>
                    <button type="button"
                        disabled = {quantity == 20}
                        className = "flex-1 bg-green-500 p-3 m-3 rounded hover:bg-green-600 font-bold text-white disabled:opacity-50 disabled:bg-slate-300 disabled:cursor-not-allowed" 
                        onClick = {increment}
                    >
                    +</button>
                    <button type="button"
                        disabled = {quantity == 1}
                        className = "flex-1 bg-blue-700 p-3 m-3 rounded hover:bg-blue-800 font-bold text-white disabled:opacity-50 disabled:bg-slate-300 disabled:cursor-not-allowed" 
                        onClick = {decrement}
                    >
                    -</button>
                    <select value={category} className="border rounded p-2" onChange={(event) => handleCategoryChange(event)}>
                        <option value="Produce" defaultValue>Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen_Foods">Frozen Foods</option>
                        <option value="Canned_Goods">Canned Goods</option>
                        <option value="Dry_Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="border m-2 p-2 bg-blue-500 text-white bold rounded">Add Item</button>
        </form>
    );
}