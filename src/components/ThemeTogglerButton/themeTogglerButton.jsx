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
            <Button key={theme} theme={theme} onClick={handleButtonTheme}>
                {theme === themes.light 
                    ? (<i className="bi bi-sun"></i>) 
                    : (<i className="bi bi-moon"></i>)
                }
            </Button>
        </>
    )
}