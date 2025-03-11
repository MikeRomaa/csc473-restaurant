export const Menu: React.FC = () => (
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
                    <table className="text-left border-separate border-spacing-x-3">
                        <tr>
                            <th>Jasmine Green</th>
                            <td>$8.5</td>
                        </tr>
                        <tr>
                            <th>White Peach Oolong</th>
                            <td>$19</td>
                        </tr>
                        <tr>
                            <th>Lapsang Souchong</th>
                            <td>$18</td>
                        </tr>
                        <tr>
                            <th>Pu'er Tea</th>
                            <td>$19.5</td>
                        </tr>
                        <tr>
                            <th>Tie Guan Yin</th>
                            <td>$19.5</td>
                        </tr>
                        <tr>
                            <th>Herbal Tea</th>
                            <td>$19</td>
                        </tr>
                        <tr>
                            <th>Bi Luo Chun</th>
                            <td>$19.5</td>
                        </tr>
                        <tr>
                            <th>White Tea</th>
                            <td>$19</td>
                        </tr>
                        <tr>
                            <th>Mint Lemon Green</th>
                            <td>$18.5</td>
                        </tr>
                        <tr>
                            <th>Herbal Black Tea</th>
                            <td>$19</td>
                        </tr>
                        <tr>
                            <th>Red Bean Coix Seed Black Tea</th>
                            <td>$18.5</td>
                        </tr>
                    </table>
                </article>
                <article className="row-span-2">
                    <h2 className="text-4xl font-display font-bold mb-4">Snacks</h2>
                    <table className="text-left border-separate border-spacing-x-3">
                        <tr>
                            <th>Duo desert tasting</th>
                            <td>$16</td>
                        </tr>
                        <tr>
                            <th>Sweet potato basque cheesecake</th>
                            <td>$14</td>
                        </tr>
                        <tr>
                            <th>Caramelized sweet potato w/ vanilla ice cream</th>
                            <td>$14</td>
                        </tr>
                        <tr>
                            <th>DUO matcha</th>
                            <td>$15</td>
                        </tr>
                        <tr>
                            <th>Osmanthus taro basque cheesecake</th>
                            <td>$15</td>
                        </tr>
                        <tr>
                            <th>Pistachio basque</th>
                            <td>$13</td>
                        </tr>
                        <tr>
                            <th>Black tea basque cheesecake</th>
                            <td>$14</td>
                        </tr>
                        <tr>
                            <th>Black sesami mousse</th>
                            <td>$14</td>
                        </tr>
                        <tr>
                            <th>Green tea cookie</th>
                            <td>$6.5</td>
                        </tr>
                    </table>
                </article>
            </div>
        </section>
    </main>
);
