"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState, useEffect } from 'react';
import MealIdeas from './meal-ideas';

export default function Page() {    
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    let cleaned = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N} ]/gu, "")
      .trim();

    setSelectedItemName(cleaned);
  };

    return (
        <main className='bg-gray-300'>
          <div className='flex justify-center items-center gap-4'>
            <div className='flex flex-col justify-center items-center mb-auto'>
                <h1 className='text-4xl font-extrabold '>Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </main>
    );
}