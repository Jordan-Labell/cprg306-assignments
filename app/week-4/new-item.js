"use client";
import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [incrementDisabled, setIncrementDisabled] = useState(false);
    const [decrementDisabled, setDecrementDisabled] = useState(true);
    const increment = () => {
        setDecrementDisabled(false);
        if (quantity < 19) setQuantity(quantity + 1);
        if (quantity  == 19) {
            setIncrementDisabled(true);
            setQuantity(quantity + 1);
        }
    };
    const decrement = () => {
        setIncrementDisabled(false);
        if (quantity > 2) setQuantity(quantity - 1); 
        if (quantity == 2) {
            setDecrementDisabled(true);
            setQuantity(quantity - 1);
        }
    };
    return (
        <div>
            <p>Quantity: {quantity}</p>
            <button 
                disabled = {incrementDisabled}
                className = "bg-slate-300 p-3 rounded hover:bg-slate-600 font-bold text-white active:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                onClick = {increment}
            >
            Increment</button>
            <button
                disabled = {decrementDisabled}
                className = "bg-slate-300 p-3 rounded hover:bg-slate-600 font-bold text-white active:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed" 
                onClick = {decrement}
            >
            Decrement</button>
        </div>
    );
}