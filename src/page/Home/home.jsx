import { Main, SearchInputContainer } from "./home.style"

import { useContext, useState } from "react"
import { PokemonContext } from "../../contexts/pokemonContext"
import { ThemeContext } from "../../contexts/themeContext"

import { CardPokemonList } from "../../components/Cards/cardPokemonList"

export function Home() {
    const { setCardCount } = useContext(PokemonContext)
    const { theme } = useContext(ThemeContext)
    const [filter, setFilter] = useState('')

    function onButtonMorePages() {
        setCardCount(prevState => prevState + 10)
    }

    return (
        <>
            <Main theme={theme}>
                <SearchInputContainer theme={theme}>
                    <h1>Buscar Pokemon</h1>
                    <div>
                        <i title="Research" className="bi bi-search icon-search"></i>
                        <input
                            type="text"
                            id="search"
                            placeholder="Bulbasaur"
                            onChange={(e) => setFilter(e.target.value)}
                            value={filter}
                        />
                    </div>
                </SearchInputContainer>
                <CardPokemonList filter={filter} />
                {filter ? (
                    null
                ) : (
                    <button onClick={onButtonMorePages}>Carregar mais</button>
                )}
            </Main>
        </>
    )
}
