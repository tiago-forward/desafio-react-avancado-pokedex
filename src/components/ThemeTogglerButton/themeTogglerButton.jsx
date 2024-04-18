import { Button } from "./themeTogglerButton.style"

import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"

export const ThemeTogglerButton = ({ }) => {
    const { theme, setTheme, themes } = useContext(ThemeContext)

    function handleButtonTheme() {
        if (theme === themes.light) {
            setTheme(themes.dark)
        } else {
            setTheme(themes.light)
        }
    }

    return (
        <>
            <Button theme={theme} onClick={handleButtonTheme}>Trocar de tema</Button>
        </>
    )
}