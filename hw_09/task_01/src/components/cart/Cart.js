import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Cart()
{
    const { theme } = useContext(ThemeContext);
    const { cartItems } = useContext(CartContext);
    const addedItems = [];

    cartItems.forEach(item => {
        if (!addedItems.some(addedItem => addedItem.id === item.id)) {
            addedItems.push(item);
        }
    });

    return (
        <div className={`container ${theme}`}>
            <header className="App-header">
                <p className="header-title">Items</p>
            </header>

            <div className={`cart-item-container ${theme}`}>
                { addedItems.map(item => {
                    let itemsExceptCurr = cartItems.filter(fItem => fItem.id !== item.id);
                    let countExceptCurr = itemsExceptCurr.length;
                    let count = cartItems.length - countExceptCurr;
                    
                    return (
                        <CartItem id={item.id} src={item.src} title={item.title} count={count} price={item.price} />
                    )
                }) }
            </div>
        </div>
    );
}