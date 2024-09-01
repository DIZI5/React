import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CartItemTitle({ text })
{
    const { theme } = useContext(ThemeContext);

    return (
        <p className={`cart-item-title ${theme}`}>{text}</p> 
    );
}