import { useCallback, useContext, useEffect, useMemo, useRef } from "react";

import { CartContext } from "./CartContext";
import { Cart, Trash } from "./Icons";

export const CartDropdown: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { open, setOpen, cart, remove, update, clear } = useContext(CartContext);

    const total = useMemo(
        () => Array.from(cart.values()).reduce((acc, item) => acc + item.price * item.count, 0),
        [cart],
    );

    const updateCount = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const count = Number.parseInt(e.currentTarget.value, 10);
            if (count) {
                update(e.currentTarget.name, Number.parseInt(e.currentTarget.value, 10));
            } else {
                remove(e.currentTarget.name);
            }
        },
        [update, remove],
    );

    const handleClick = useCallback(
        (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        },
        [setOpen],
    );

    const handleKeydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        },
        [setOpen],
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);
        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [handleClick, handleKeydown]);

    return (
        <div className="relative flex">
            <button type="button" className="cursor-pointer" onClick={() => setOpen(!open)}>
                <Cart />
            </button>
            <div ref={ref} className={`absolute top-full right-0 ${open ? "block" : "hidden"}`}>
                <div className="bg-white rounded-xl shadow-xl text-black mt-5 px-5 py-3 w-96">
                    <div className="flex justify-between">
                        <h3 className="font-bold text-2xl">Your Cart</h3>
                        <button
                            type="button"
                            className="cursor-pointer flex items-center gap-1 text-sm font-bold text-red-500"
                            onClick={clear}
                        >
                            <Trash />
                            Clear
                        </button>
                    </div>

                    <hr className="border-0 border-b-2 border-b-accent mt-2 mb-4" />

                    {cart.size === 0 && <p>Your cart is empty.</p>}

                    <div className="flex flex-col gap-2 mb-2">
                        {Array.from(cart.values(), ({ name, price, count }) => (
                            <article key={name} className="flex items-center bg-gray-200 rounded-lg p-2">
                                <span className="mr-auto font-medium">{name}</span>
                                <span className="min-w-18">${price.toFixed(2)} &times;</span>
                                <input
                                    className="m-0 w-16 px-0 pl-4"
                                    type="number"
                                    name={name}
                                    value={count}
                                    min={0}
                                    onChange={updateCount}
                                />
                            </article>
                        ))}
                    </div>

                    <p className="text-right">
                        <span className="font-bold">Total</span> ${total.toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
};
