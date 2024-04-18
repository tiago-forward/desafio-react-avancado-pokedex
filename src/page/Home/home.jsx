import { Main } from "./home.style"

import { useContext } from "react"
import { PokemonContext } from "../../contexts/pokemonContext"
import { ThemeContext } from "../../contexts/themeContext"

import { CardPokemonList } from "../../components/Cards/cardPokemonList"

export function Home() {
    const { setCardCount } = useContext(PokemonContext)
    const { theme, setTheme } = useContext(ThemeContext)
    
    function onButtonMorePages() {
        setCardCount(prevState => prevState + 10)
    }

    return (
        <>
            <Main theme={theme}>
                <CardPokemonList />
                <button onClick={onButtonMorePages}>Carregar mais</button>
            </Main>
        </>
    )
}