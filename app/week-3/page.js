import Item from './item';

export default function Page() {    
    const item1 = { 
      name: "Soup",
      quantity: 3,
      category: "Golden Retriever",
    };
    return (
        <main>
            <h1>Shopping List</h1>
            <Dog item={item1} />
        </main>
    );
}