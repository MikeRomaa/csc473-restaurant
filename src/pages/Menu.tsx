import { useContext } from "react";

import { CartContext } from "../components/CartContext";
import { Add } from "../components/Icons";

type MenuItem = {
    name: string;
    price: number;
};

const teaMenu: MenuItem[] = [
    { name: "Jasmine Green", price: 8.5 },
    { name: "White Peach Oolong", price: 19 },
    { name: "Lapsang Souchong", price: 18 },
    { name: "Pu'er Tea", price: 19.5 },
    { name: "Tie Guan Yin", price: 19.5 },
    { name: "Herbal Tea", price: 19 },
    { name: "Bi Luo Chun", price: 19.5 },
    { name: "White Tea", price: 19 },
    { name: "Mint Lemon Green", price: 18.5 },
    { name: "Herbal Black Tea", price: 19 },
    { name: "Red Bean Coix Seed Black Tea", price: 18.5 },
];

const snackMenu: MenuItem[] = [
    { name: "Duo desert tasting", price: 16 },
    { name: "Sweet potato basque cheesecake", price: 14 },
    { name: "Caramelized sweet potato w/ vanilla ice cream", price: 14 },
    { name: "DUO matcha", price: 15 },
    { name: "Osmanthus taro basque cheesecake", price: 15 },
    { name: "Pistachio basque", price: 13 },
    { name: "Black tea basque cheesecake", price: 14 },
    { name: "Black sesami mousse", price: 14 },
    { name: "Green tea cookie", price: 6.5 },
];

export const Menu: React.FC = () => {
    const { add } = useContext(CartContext);

    return (
        <main className="bg-background font-serif text-xl">
            <section className="container mx-auto py-20">
                <h1 className="text-6xl font-display mb-4">Menu</h1>

                <div className="flex gap-x-20 gap-y-10 mb-14 flex-wrap justify-center">
                    <figure className="flex flex-col">
                        <img src="/menu-1.jpg" alt="Sweet & Tea Set" className="h-96 rounded-lg object-cover" />
                        <caption className="font-medium">Sweet &amp; Tea Set</caption>
                    </figure>

                    <figure className="flex flex-col">
                        <img src="/menu-3.jpg" alt="Sweet & Tea Set" className="h-96 rounded-lg object-cover" />
                        <caption className="font-medium">Sweet & Tea Set</caption>
                    </figure>

                    <figure className="flex flex-col">
                        <img src="/menu-2.jpg" alt="Tea Testing Flight" className="h-96 rounded-lg object-cover" />
                        <caption className="font-medium">Tea Testing Flight</caption>
                    </figure>
                </div>

                <div className="grid xl:grid-cols-3 gap-10 justify-center">
                    <article>
                        <h2 className="text-4xl font-display font-bold mb-4">Tea Testing Flight</h2>
                        <p className="text-3xl font-display">$42</p>
                        <ul className="list-inside list-['–_']">
                            <li>Choice of 3 teas</li>
                            <li>Green tea cookie</li>
                        </ul>
                    </article>
                    <article className="xl:row-start-2">
                        <h2 className="text-4xl font-display font-bold mb-4">Sweet &amp; Tea Set</h2>
                        <p className="text-3xl font-display">$39</p>
                        <ul className="list-inside list-['–_']">
                            <li>One choice of tea</li>
                            <li>Snacks and seasonal fruit</li>
                            <li>
                                Sweet snacks <em>[ Upgrade to cake + $6 ]</em>
                            </li>
                            <li>Caramelized sweet potato</li>
                            <li>
                                <em>[ Add one scoop of ice cream + $4 ]</em>
                            </li>
                        </ul>
                    </article>

                    <article className="row-span-2">
                        <h2 className="text-4xl font-display font-bold mb-4">Pot of Tea</h2>
                        <table className="text-left border-separate border-spacing-x-2">
                            {teaMenu.map(({ name, price }) => (
                                <tr key={name}>
                                    <th className="flex mt-1.5">
                                        <button
                                            type="button"
                                            className="cursor-pointer"
                                            onClick={() => add(name, price, 1)}
                                        >
                                            <Add />
                                        </button>
                                    </th>
                                    <th>{name}</th>
                                    <td>${price}</td>
                                </tr>
                            ))}
                        </table>
                    </article>
                    <article className="row-span-2">
                        <h2 className="text-4xl font-display font-bold mb-4">Snacks</h2>
                        <table className="text-left border-separate border-spacing-x-2">
                            {snackMenu.map(({ name, price }) => (
                                <tr key={name}>
                                    <th className="flex mt-1.5">
                                        <button
                                            type="button"
                                            className="cursor-pointer"
                                            onClick={() => add(name, price, 1)}
                                        >
                                            <Add />
                                        </button>
                                    </th>
                                    <th>{name}</th>
                                    <td>${price}</td>
                                </tr>
                            ))}
                        </table>
                    </article>
                </div>
            </section>
        </main>
    );
};
