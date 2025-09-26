import ItemList from './item-list';

export default function Page() {    
    return (
        <main>
            <div>
                <h1 className='flex justify-center text-4xl font-extrabold '>Shopping List</h1>
            </div>
            <ItemList />
        </main>
    );
}