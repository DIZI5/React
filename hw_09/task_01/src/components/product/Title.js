import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Title({ text })
{
    const { theme } = useContext(ThemeContext);
    
    return (
        <p className={`title ${theme}`}>{text}</p>
    );
}