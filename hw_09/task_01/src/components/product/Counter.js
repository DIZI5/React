import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Counter()
{
    const { cartItems } = useContext(CartContext);
    const totalCount = cartItems.length;
    
    return (
        <p>Items in <Link to="/cart">Cart</Link>: {totalCount}</p>
    );
}