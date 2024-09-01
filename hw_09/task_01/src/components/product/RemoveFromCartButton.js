import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export default function RemoveFromCartButton({ content, id })
{
    const { removeProduct } = useContext(CartContext);

    return (
        <button className="remove-from-cart" onClick={() => removeProduct(id)}>{content}</button>
    );
}