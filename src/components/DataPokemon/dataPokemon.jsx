import styled from "styled-components"

import { api } from "../../services/api"

import { useState, useEffect } from "react"

import { useLocation } from "react-router-dom"

export function DataPokemon() {
    const location = useLocation();
    const index = new URLSearchParams(location.search).get('index');
    const [dataPokemons, setDataPokemons] = useState({
        id: null,
        name: '',
        types: [],
        abilities: [],
        abilitiesDescriptionUrl: [],
        moves: []
    })

    useEffect(() => {
        async function getPokemonsDetails() {
            const response = await api.get(`${index}`)
            console.log(response)
            setDataPokemons(prevState => ({
                id: response.data.id,
                name: response.data.name,
                types: response.data.types.map((item) => item.type.name),
                abilities: response.data.abilities.map((item) => item.ability.name),
                abilitiesDescriptionUrl: response.data.abilities.map((item) => item.ability.url),
                moves: response.data.moves.map((item) => item.move.name)
            }))
        }

        getPokemonsDetails()
        console.log(dataPokemons.abilitiesDescriptionUrl)
    }, []);

    return (
        <Container>
            <div className="header">
                <h1>{dataPokemons.name}</h1>
                <div className="type">
                    {dataPokemons.types.map((value, index) => (
                        <span key={index}>{value}</span>
                    ))}
                </div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} width={"200px"} alt="" />
            </div>

            <div className="description-container">
                <span className="title">Abilities</span>

                <div className="abilities-description">
                    {dataPokemons.abilities.map((value, index) => (
                        <>
                            <span className="abilities" key={index}>{index +1}. {value}</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut aperiam ipsam omnis voluptatibus ea magnam laudantium, temporibus porro facilis optio repudiandae enim id possimus odit cum libero voluptates laboriosam.</p>
                        </>
                    ))}

                </div>

                <span className="title">Moves</span>

                <div className="moves-description">
                    {dataPokemons.moves.map((value, index) => (
                        <span className="moves" key={index}>{index +1}. {value}</span>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #f0d7d4;
    max-width: 765px;

    .header {
        display: flex;
        flex-direction: column;
        align-items: start;
        position: relative;
        margin-bottom: 18rem;

        h1 {
            color: #4c4c4c;
            margin: 1rem 0rem;
            text-transform: capitalize;
        }

        .type {
            display: flex;
            gap: 0.5rem;
            z-index: 1;

            span {
                font-size: 0.8rem;
                background-color: #b0b0b0a8;
                padding: 0.3rem;
                border-radius: 0.5em;
                text-transform: capitalize;
            }
        }

        img {
            position: absolute;
            top: 100%;
            left: 50%;
            width: 300px;
            transform: translate(-50%, 0%);
        }
    }

    .description-container{
        width: 100%;
        background-color: #DDC0BD;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        padding: 1rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px -1px 8px;
        z-index: 1;

        .title {
            display: block;
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 1rem;
            margin-top: 0.8rem;
        }

        .moves-description, .abilities-description {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .moves, .abilities {
                font-weight: 700;
            }
        }
    }
`