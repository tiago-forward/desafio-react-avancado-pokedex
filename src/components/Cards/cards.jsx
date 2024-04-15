import styled from "styled-components"
import { useContext } from "react"
import { PokemonContext } from "../../contexts/pokemonContext";

export function Card() {
    const { pokemonsList } = useContext(PokemonContext)

    return (
        <CardContainer>
            <div>
                <ul>
                    {pokemonsList.map((pokemon, index) => (
                        <li key={index}>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />
                            <span>{pokemon.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <button>Carregar mais</button>
        </CardContainer>
    )
}

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    
    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
        background: rgb(17,9,8);
        background: linear-gradient(56deg, rgba(17,9,8,1) 0%, rgba(250,78,95,0.6805555555555556) 51%, rgba(250,78,95,0.3680555555555556) 100%);

        img {
            position: relative;
            width: 15rem;
        }

        span {
            color: white;
            text-transform: capitalize;
            margin-bottom: 1rem;
        }
    }
`