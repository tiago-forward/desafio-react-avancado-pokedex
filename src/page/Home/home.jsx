import { Main } from "./home.style"

import { useContext } from "react"
import { PokemonContext } from "../../contexts/pokemonContext"

import { CardPokemonList } from "../../components/Cards/cardPokemonList"

export function Home() {
    const { setCardCount } = useContext(PokemonContext)
    
    function onButtonMorePages() {
        setCardCount(prevState => prevState + 10)
    }

    return (
        <>
            <Main>
                <CardPokemonList />
                <button onClick={onButtonMorePages}>Carregar mais</button>
            </Main>
        </>
    )
}