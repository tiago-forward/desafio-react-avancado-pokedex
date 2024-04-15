import styled from "styled-components"
import { CardPokemonList } from "../components/Cards/cardPokemonList"
import LogoPokemon from "../assets/logo-pokemon.png"

export function Home() {
    return (
        <>
            <Header>
                <img width={"300px"} src={LogoPokemon} alt="Pokemon" />
            </Header>
            <main>
                <CardPokemonList />
            </main>
            <footer>
                
            </footer>
        </>
    )
}

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`
