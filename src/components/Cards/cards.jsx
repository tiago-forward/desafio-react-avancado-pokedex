import { useEffect, useState } from "react"
import styled from "styled-components"
import { api, repositoriesQuantity } from "../../services/api";

export function Card() {
    const [pokemonsList, setPokemonsList] = useState([])

    useEffect(() => {
        async function getPokemons() {
            const response = await api.get(``)
            setPokemonsList(response.data.results)
        }

        getPokemons()
    }, []);

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
    background-color: antiquewhite;
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

        img {
            position: relative;
            width: 15rem;
        }

        span {
            
        }
    }
`