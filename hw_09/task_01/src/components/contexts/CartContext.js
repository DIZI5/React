import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function Context(props)
{
    const [cartItems, setCartItems] = useState([]);
    
    const addProduct = (item) => {
        setCartItems([...cartItems, item]);
    }
    
    const removeProduct = (targetId) => {
        const index = cartItems.findIndex(item => item.id === targetId);
        
        if (index !== -1) {
            setCartItems([
                ...cartItems.slice(0, index),
                ...cartItems.slice(index + 1)
            ]);
        }
    }

    const value = { addProduct, removeProduct, cartItems };

    return (
        <CartContext.Provider value={value}>
            {props.children}
        </CartContext.Provider>
    );
}