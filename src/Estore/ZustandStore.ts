import { create } from "zustand";

export type Product = {
    id: number;
    title: string;
    price: number;
    quantity: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export type Cart = {
    items: Array<Product &  {total_price?: number} >;
    total: number;
};


const  Products: Product[] = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) and your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: {
            rate: 3.9,
            count: 120,
        },
        quantity: 0
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:    
            "Slim-fitting style, contrast raglan long sleeve",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: {
            rate: 4.1,
            count: 259,
        },
        quantity: 0
    },
];

type Store = {
    products: Product[];
    changeProductQuantity: (id: number, quantity: number) => void;
    cart: Cart;
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
};

const useStore = create<Store>((set) => ({
    cart: {
        items: [],
        total: 0,
    },
    changeProductQuantity: (id: number, quantity: number) =>
        set((state) => ({
            cart: {
                items: state.cart.items.map((item) =>
                    item.id === id ? { ...item, quantity } : item
                ),
                total: state.cart.total + quantity * (state.cart.items.find((item) => item.id === id)?.price || 0),
            },
        })),
    products: Products,
    addToCart: (product) =>
        set((state) => ({
            cart: {
                items: (()=>{
                    const existingItem = state.cart.items.find((item) => item.id === product.id);
                    if (existingItem) {
                        return state.cart.items.map((item) =>
                            item.id === product.id
                                ? { ...item, total_price: item?.total_price || 0 + product?.price, quantity:    item.quantity + 1 }
                                : item
                        );
                    }
                    return [...state.cart.items, { ...product, total_price: product.price, quantity: 1 }];
                })(),
                total: state.cart.total + product.price,
            },
        })),
    removeFromCart: (id) =>
        set((state) => ({
            cart: {
                items: state.cart.items.filter((item) => item.id !== id),
                total: state?.cart?.total - (state?.cart?.items?.find((item) => item?.id === id)?.price || 0),
            },
        })),
    clearCart: () =>        
        set((_state) => ({
            cart: {
                items: [],
                total: 0,
            },
        })),    
}));

export  {useStore , Products};