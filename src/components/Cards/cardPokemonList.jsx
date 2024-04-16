import { useContext } from "react"
import { PokemonContext } from "../../contexts/pokemonContext";

import { CardContainer } from "./cardPokemonList.style"

export function CardPokemonList() {
    const { dataPokemons } = useContext(PokemonContext)

    return (
        <CardContainer>
            <div>
                <ul>
                    {dataPokemons.names.map((name, index) => (
                        <a href="#" key={index}>
                            <li>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="Um pokemon" />
                                <span>{name}</span>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </CardContainer>
    )
}