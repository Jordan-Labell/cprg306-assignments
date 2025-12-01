"use client";

import ItemList from './item-list';
import NewItem from './new-item';
import { useState, useEffect } from 'react';
import MealIdeas from './meal-ideas';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {    
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();

  const handleItemSelect = (item) => {
    let cleaned = item.name
      .split(",")[0]
      .replace(/[^\p{L}\p{N} ]/gu, "")
      .trim();

    setSelectedItemName(cleaned);
  };

  const loadItems = async () => {
    if (!user) return;
    const data = await getItems(user.uid);
    setItems(data);
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user) return;

    const id = await addItem(user.uid, newItem);
    const itemWithId = { ...newItem, id };

    setItems((prev) => [...prev, itemWithId]);
  };

  if (!user) {
    return (
      <div>
        <h1>Secured Page</h1>
        <p>Please sign in to access the shopping list features.</p>
      </div>
    );
  }

    return (
        <main className='bg-gray-300'>
          <p>Welcome back {user.displayName}</p>
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