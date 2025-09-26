export default function Item({item}) {
    return (
        <section className="bg-slate-400 p-4 w-full m-4">
            <ul>
                <li className="font-bold text-2xl">{item.name}</li>
                <li>Buy {item.quantity} in {item.category}</li>
            </ul>
        </section>
    );
}