import { createContext, useState } from "react";

export const themes = {
    light: {
        backgroundPage: '#f08080'
    },
    dark: {
        backgroundPage: '#301919'
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }} >
            {children}
        </ThemeContext.Provider>
    )
}