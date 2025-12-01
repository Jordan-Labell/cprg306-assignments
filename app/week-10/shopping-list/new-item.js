"use client";
import { useState } from "react";

export default function NewItem( { onAddItem } ) {
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
        let id = Math.floor(Math.random() * 10000).toString();
        let item = {id, name, quantity, category};
        console.log(item);
        onAddItem(item);
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
            <input id="itemName" type="text" required placeholder="New Item Name" className="border rounded p-2" value={name} onChange={(event) => handleNameChange(event)}/>
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
                    <select id="itemCategory" value={category} className="border rounded p-2" onChange={(event) => handleCategoryChange(event)}>
                        <option value="produce" defaultValue>produce</option>
                        <option value="dairy">dairy</option>
                        <option value="bakery">bakery</option>
                        <option value="meat">meat</option>
                        <option value="frozen Foods">frozen foods</option>
                        <option value="canned Goods">canned goods</option>
                        <option value="dry Goods">dry goods</option>
                        <option value="beverages">beverages</option>
                        <option value="snacks">snacks</option>
                        <option value="household">household</option>
                        <option value="other">other</option>
                    </select>
                </div>
            </div>
            <button type="submit" className="border m-2 p-2 bg-blue-500 text-white bold rounded">Add Item</button>
        </form>
    );
}