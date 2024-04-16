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
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${1}.png`} width={"200px"} alt="" />
            </div>
            <div className="description-container">
                <nav>
                    <a href="#">Abilities</a>
                    <a href="#">Moves</a>
                </nav>

                <div className="abilities-description">
                    <span className="abilities">Ágil</span>
                    <p>Pokémon is paralyzed and acquires this ability, its paralysis is healed; this includes when regaining a lost ability upon leaving battle.</p>

                    <span className="abilities">Impostor</span>
                    <p>This Pokémon transforms into a random opponent upon entering battle.  This effect is identical to the move transform.</p>
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
        margin-bottom: 10rem;

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
            transform: translate(-50%, -15%);
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

        nav {
            display: flex;
            justify-content: space-around;
            font-weight: 700;
            padding-bottom: 1rem;
            border-bottom: 1px solid #919191;
            margin-bottom: 1rem;
            gap: 0.5rem;

            a {
                text-align: center;
                color: black;
                padding: 1rem 0rem;
                width: 100%;
                border-radius: 0.8rem;
            
                &:hover {
                    background-color: #b0b0b0a8;
                }

                &:active {
                    background-color: #919191;
                }
            }
        }

        .abilities-description {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .abilities {
                font-weight: 700;
                text-align: center;
            }
        }
    }
`