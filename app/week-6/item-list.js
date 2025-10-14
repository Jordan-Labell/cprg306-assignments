"use client";
import { useState } from 'react';
import Item from './item';
import itemsList from './items.json';

export default function ItemList() { 
    const [sortBy, setSortBy] = useState("name");
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
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sort by Name</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sort by Category</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sort by Category</button>
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