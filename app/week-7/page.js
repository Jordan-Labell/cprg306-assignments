"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {    
    const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

    return (
        <main className='bg-gray-300'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extrabold '>Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items}/>
            </div>
        </main>
    );
}