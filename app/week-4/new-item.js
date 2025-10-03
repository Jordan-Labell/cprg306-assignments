"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if (quantity < 20) setQuantity(quantity + 1);
    };
    const decrement = () => {
        if (quantity > 1) setQuantity(quantity - 1); 
    };
    return (
        <div>
            <p>Quantity: {quantity}</p>
            <button 
                className = "bg-slate-300 p-3 rounded hover:bg-slate-600 font-bold text-white active:bg-red-500" 
                onClick = {increment}
            >
            Increment</button>
            <button 
                className = "bg-slate-300 p-3 rounded hover:bg-slate-600 font-bold text-white active:bg-red-500" 
                onClick = {decrement}
            >
            Decrement</button>
        </div>
    );
}