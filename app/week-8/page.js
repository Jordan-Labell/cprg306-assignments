"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState, useEffect } from 'react';
import MealIdeas from './meal-ideas';

export default function Page() {    
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("bread");

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    setItems([...items, item]);
  };

    return (
        <main className='bg-gray-300'>
          <div className='flex justify-center items-center gap-4'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extrabold '>Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
            </div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </main>
    );
}