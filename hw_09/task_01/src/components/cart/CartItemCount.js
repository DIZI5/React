import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function CartItemCount({ count })
{
    const { theme } = useContext(ThemeContext);
    
    return(
        <p className={`cart-item-count ${theme}`}>{count}</p>
    );
}