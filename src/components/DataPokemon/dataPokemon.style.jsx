import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: ${props => props.theme.backgroundDataPokemon};

    .icon-closed {
        color: ${props => props.theme.colorButton};

        &:hover {
            color: ${props => props.theme.hoverButton};
        }
    }

    .header {
        display: flex;
        flex-direction: column;
        align-items: start;
        position: relative;
        margin-bottom: 22rem;

        .name-pokemon {
            color: ${props => props.theme.colorNameTitle};
            margin: 1rem 0rem;
            text-transform: capitalize;
        }

        .attribute-type-container {
            display: flex;
            gap: 0.5rem;
            z-index: 1;

            .attribute-type {
                font-size: 0.8rem;
                background-color: ${props => props.theme.backgroundType};
                color: ${props => props.theme.colorNameTag};
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
        background-color: ${props => props.theme.backgroundDescription};
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
        padding: 1.5rem;
        box-shadow: rgba(0, 0, 0, 0.24) 0px -1px 8px;
        display: flex;
        flex-direction: column;

        h2 {
            text-align: center;
        }

        .abilities-description {
            display: flex;
            flex-direction: column;
        }

        .moves-description {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            color: ${props => props.theme.colorNameTag};
        }
    }
`
