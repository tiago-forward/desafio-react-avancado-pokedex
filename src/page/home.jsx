import styled from "styled-components"
import { CardPokemonList } from "../components/Cards/cardPokemonList"
import LogoPokemon from "../assets/logo-pokemon.png"
import { useContext } from "react"
import { PokemonContext } from "../contexts/pokemonContext"

export function Home() {
    const { visibleCount, setVisibleCount } = useContext(PokemonContext)
    

    function handleButtonMorePages() {
        setVisibleCount(prevState => prevState + 10)
    }


    return (
        <>
            <Header>
                <img width={"300px"} src={LogoPokemon} alt="Pokemon" />
            </Header>
            <Main>
                <CardPokemonList />
                <button onClick={handleButtonMorePages}>Carregar mais</button>
            </Main>
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

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        cursor: pointer;
        width: 10rem;
        height: 3rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        margin-top: 2rem;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    
    
        &:hover {
            background-color: #f3f3f383;
        }
        
        &:active {
            transform: scale(1.1);
        }
    }
`