"use client";
import { useState } from 'react';
import Item from './item';
import itemsList from './items.json';

export default function ItemList() { 
    const [sortBy, setSortBy] = useState("category");
    let itemsListCopy = [...itemsList];

      itemsListCopy.sort((item1, item2) => {
      if (sortBy === "name") {
        if (item1.name < item2.name) return -1;
        if (item1.name > item2.name) return 1;
        return 0;
      } else if (sortBy === "category") {
        if (item1.category < item2.category) return -1;
        if (item1.category > item2.category) return 1;
        return 0;
      }
    });

return (
    <main>
        <ul className='mx-auto max-w-md'>
          <li>
            <div className='flex my-2 gap-1'>
              <button 
                onClick={() => setSortBy("name")} 
                className={`text-white font-bold py-2 px-4 rounded cursor-pointer ${sortBy == "name" ? 'bg-blue-700' : 'bg-slate-500'}`}>
                Sort by Name
              </button>
              <button 
                onClick={() => setSortBy("category")} 
                className={`text-white font-bold py-2 px-4 rounded cursor-pointer ${sortBy == "category" ? 'bg-blue-700' : 'bg-slate-500'}`}>
                Sort by Category
              </button>
              <button 
                className={`text-white font-bold py-2 px-4 rounded cursor-pointer ${sortBy == "groupCategory" ? 'bg-blue-700' : 'bg-slate-500'}`}>
                Group by Category
              </button>
            </div>
          </li>
          <li>
            {itemsListCopy.map((item) => (
                <Item key={item.id} item={item} />
            ))}
          </li>
        </ul>
    </main>
    );
}