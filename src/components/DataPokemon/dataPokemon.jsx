import styled from "styled-components"

export function DataPokemon() {

    return (
        <Container>
            <div className="header">
                <h1>Bubalsaur</h1>
                <div className="type">
                    <span>Grass</span>
                    <span>Poison</span>
                </div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${6}.png`} width={"200px"} alt="" />
            </div>

            <div className="description-container">
                <span className="title">Abilities</span>

                <div className="abilities-description">
                    <span className="abilities">- Ágil</span>
                    <p>Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.</p>
                </div>

                <span className="title">Moves</span>

                <div className="moves-description">
                    <span className="moves">- Transformar</span>
                    <p>Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.</p>
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