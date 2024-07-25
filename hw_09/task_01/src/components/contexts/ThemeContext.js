import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props)
{
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const value = { theme, changeTheme };

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}