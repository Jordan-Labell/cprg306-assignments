import ItemList from './item-list';
import NewItem from './new-item';

export default function Page() {    
    return (
        <main className='bg-gray-300'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extrabold '>Shopping List</h1>
                <NewItem />
                <ItemList />
            </div>
        </main>
    );
}