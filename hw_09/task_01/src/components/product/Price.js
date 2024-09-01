import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Price({ price })
{
    const { theme } = useContext(ThemeContext);

    return (
        <p className={`price ${theme}`}>{price}</p>
    );
}