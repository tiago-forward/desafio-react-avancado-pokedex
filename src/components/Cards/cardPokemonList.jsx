import styled from "styled-components"
import { useContext } from "react"
import { PokemonContext } from "../../contexts/pokemonContext";

export function CardPokemonList() {
    const { dataPokemons } = useContext(PokemonContext)

    return (
        <CardContainer>
            <div>
                <ul>
                    {dataPokemons.names.map((name, index) => (
                        <a href="#">
                            <li key={index}>
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="" />
                                <span>{name}</span>
                            </li>
                        </a>
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
        border: 1px solid #ffffff;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background: #f0d7d4;

        img {
            position: relative;
            width: 15rem;
        }

        span {
            color: black;
            font-weight: 700;
            text-transform: capitalize;
            margin-bottom: 1rem;
        }
    }


    button {
        cursor: pointer;
        width: 10rem;
        height: 3rem;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        border: none;
    
        &:hover {
            background-color: #f3f3f383;
        }
        
        &:active {
            transform: scale(1.1);
        }
    }
`