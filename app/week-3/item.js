export default function Item({item}) {
    return (
        <section className="bg-slate-400 p-4 w-1/3 m-4">
            <h2>Name: {item.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Category: {item.category}</p>
        </section>
    );
}