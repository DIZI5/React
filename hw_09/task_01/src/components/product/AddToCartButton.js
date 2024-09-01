import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function AddToCartButton({ content, id, src, title, price })
{
    const { addProduct } = useContext(CartContext);

    return (
        <button className="add-to-cart" onClick={() => addProduct({id, src, title, price})}>{content}</button>
    );
}