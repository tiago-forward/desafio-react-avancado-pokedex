import LogoPokemon from "../../assets/logo-pokemon.png";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

import { ThemeTogglerButton } from "../ThemeTogglerButton/themeTogglerButton";

export const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <header theme={theme} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img width={"300px"} src={LogoPokemon} alt="Pokemon" />
            <ThemeTogglerButton />
        </header>
    )
}
