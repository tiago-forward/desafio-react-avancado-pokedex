import { createContext, useState } from "react";

export const themes = {
    light: {
        backgroundPage: '#f08080',
        backgroundButton: '#f0d7d4',
        colorButton: '#000000',
        hoverButton: '#ddc0bd',
        backgroundCard: '#f0d7d4',
        hoverCard: '#ddc0bd',
        backgroundDataPokemon: '#f0d7d4',
        colorNameTitle: '#2d2121',
        colorNameTag: '#000000',
        backgroundType: '#b0b0b0a8',
        backgroundDescription: '#DDC0BD',
        paragraph: '#000000'
    },
    dark: {
        backgroundPage: '#1a0d0d',
        backgroundButton: '#b0b0b07d',
        colorButton: '#ffffff',
        hoverButton: '#b0b0b0a8',
        backgroundCard: '#b0b0b07d',
        hoverCard: '#b0b0b0a8',
        backgroundDataPokemon: '#b0b0b07d',
        colorNameTitle: '#ffffff',
        colorNameTag: '#000000',
        backgroundType: '#b0b0b0a8',
        backgroundDescription: '#b0b0b0a8',
        paragraph: '#ffffff'
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