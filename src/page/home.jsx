import { Main } from "./home.style"

import { useContext } from "react"
import { PokemonContext } from "../contexts/pokemonContext"

import { CardPokemonList } from "../components/Cards/cardPokemonList"

export function Home() {
    const { visibleCount, setVisibleCount } = useContext(PokemonContext)
    
    function handleButtonMorePages() {
        setVisibleCount(prevState => prevState + 10)
    }

    return (
        <>
            <Main>
                <CardPokemonList />
                <button onClick={handleButtonMorePages}>Carregar mais</button>
            </Main>
        </>
    )
}