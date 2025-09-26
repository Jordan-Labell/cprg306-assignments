import ItemList from './item-list';

export default function Page() {    
    return (
        <main>
            <div className='flex flex-col mx-auto'>
                <h1 className='text-4xl font-extrabold '>Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}