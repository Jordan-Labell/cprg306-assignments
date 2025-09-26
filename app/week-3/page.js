import ItemList from './item-list';

export default function Page() {    
    return (
        <main>
            <div className='parent-container flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extrabold '>Shopping List</h1>
                <ItemList />
            </div>
        </main>
    );
}