import {
    type Dispatch,
    type PropsWithChildren,
    type SetStateAction,
    createContext,
    useCallback,
    useEffect,
    useState,
} from "react";

const LOCAL_STORAGE_KEY = "cart";

type CartItem = {
    name: string;
    price: number;
    count: number;
};

type CartContextType = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    cart: Map<string, CartItem>;
    add: (name: string, price: number, count: number) => void;
    remove: (name: string) => void;
    update: (name: string, count: number) => void;
    clear: () => void;
};

function getCart(): Map<string, CartItem> {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
        return new Map();
    }

    const items: CartItem[] = JSON.parse(raw);
    return items.reduce((map, item) => map.set(item.name, item), new Map());
}

export const CartContext = createContext<CartContextType>({
    open: false,
    setOpen: () => {},
    cart: new Map(),
    add: () => {},
    remove: () => {},
    update: () => {},
    clear: () => {},
});

export const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [cart, setCart] = useState<Map<string, CartItem>>(getCart());
    const [open, setOpen] = useState<boolean>(false);

    const add = useCallback(
        (name: string, price: number, count: number) => {
            const newCart = new Map(cart);

            const item = newCart.get(name);
            if (item) {
                item.count += count;
            } else {
                newCart.set(name, { name, price, count });
            }

            setCart(newCart);
            setOpen(true);
        },
        [cart],
    );

    const remove = useCallback(
        (name: string) =>
            setCart((cart) => {
                const newCart = new Map(cart);
                newCart.delete(name);
                return newCart;
            }),
        [],
    );

    const update = useCallback(
        (name: string, count: number) =>
            setCart((cart) => {
                const newCart = new Map(cart);

                const item = newCart.get(name);
                if (item) {
                    item.count = count;
                }

                return newCart;
            }),
        [],
    );

    const clear = useCallback(() => setCart(new Map()), []);

    useEffect(() => {
        const data = JSON.stringify(Array.from(cart.values()));
        window.localStorage.setItem(LOCAL_STORAGE_KEY, data);
    }, [cart]);

    return (
        <CartContext.Provider value={{ open, setOpen, cart, add, remove, update, clear }}>
            {children}
        </CartContext.Provider>
    );
};
