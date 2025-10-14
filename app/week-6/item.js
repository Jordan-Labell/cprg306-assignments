export default function Item({item}) {
    return (
        <section className="bg-slate-400 p-2 w-full my-2 rounded border">
            <ul>
                <li className="font-bold text-2xl">{item.name}</li>
                <li>Buy {item.quantity} in {item.category}</li>
            </ul>
        </section>
    );
}