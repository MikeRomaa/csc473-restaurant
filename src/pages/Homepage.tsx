import { Link } from "react-router";

import { Gallery } from "../components/Gallery";

export const Homepage: React.FC = () => (
    <>
        <header id="hero" className="bg-accent text-white">
            <section className="h-[800px] container mx-auto grid xl:grid-cols-2 items-center justify-center ">
                <div className="text-center xl:text-left xl:mx-32">
                    <h1 className="text-8xl font-display">DUO Café</h1>
                    <p className="text-2xl font-serif">223 EAST 5th ST, EAST VILLAGE</p>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="/banner-1.jpg"
                        alt="View from the interior"
                        className="rounded-xl shadow-2xl h-[300px] xl:h-[500px] absolute -top-32 xl:top-38 xl:left-0 -rotate-2"
                    />
                    <img
                        src="/banner-2.jpg"
                        alt="Platter with tea and seasonal snacks"
                        className="rounded-xl shadow-2xl h-[300px] xl:h-[500px] absolute xl:top-60 left-32 xl:left-72 rotate-6"
                    />
                </div>
            </section>
        </header>
        <main className="bg-background font-serif text-xl">
            <section className="container mx-auto py-20">
                <h2 id="about-us" className="text-6xl font-display mb-4">
                    About Us
                </h2>
                <p>
                    Welcome to Duo Cafe, a cozy haven nestled in the heart of the East Village. Our intimate space is
                    dedicated to offering a curated selection of premium Chinese teas, each brewed to perfection for an
                    authentic and soothing experience. Paired with our delightful assortment of snacks, we strive to
                    create a peaceful escape where every visit feels like a warm embrace. Whether you're here to unwind,
                    connect, or explore new flavors, Duo Cafe is a place where great moments and even better tea come
                    together.
                </p>
            </section>

            <Gallery />

            <section className="container mx-auto py-20 w-1/2 text-center gap-20">
                <article>
                    <p className="mb-5">
                        Explore our thoughtfully curated menu, featuring a wide range of premium Chinese teas and
                        delicious snacks. From traditional favorites to unique blends, each item is crafted to bring you
                        the finest flavors and a memorable experience.
                    </p>
                    <Link to="/menu">
                        <button type="button" className="btn-accent">
                            Check out our menu!
                        </button>
                    </Link>
                </article>
            </section>
        </main>
    </>
);
