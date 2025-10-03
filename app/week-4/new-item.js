"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity <= 19) setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity >= 2) setQuantity(quantity - 1); 
    };

    return (
        <div className = "flex bg-slate-100 items-center justify-center text-center w-1/5 ml-auto mr-auto mt-2 rounded">
            <div className = "flex-1 bg-white p-3 m-3 border-black border-2 rounded">{quantity}</div>
            <button 
                disabled = {quantity == 20}
                className = "flex-3 bg-green-500 p-3 m-3 rounded hover:bg-green-600 font-bold text-white disabled:opacity-50 disabled:bg-slate-300 disabled:cursor-not-allowed" 
                onClick = {increment}
            >
            Increment</button>
            <button
                disabled = {quantity == 1}
                className = "flex-3 bg-blue-700 p-3 m-3 rounded hover:bg-blue-800 font-bold text-white disabled:opacity-50 disabled:bg-slate-300 disabled:cursor-not-allowed" 
                onClick = {decrement}
            >
            Decrement</button>
        </div>
    );
}