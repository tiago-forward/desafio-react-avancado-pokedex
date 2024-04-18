import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --backgroundPage: #f08080;
        --hoverButton: #ddc0bd;
        --backgroundCard: #f0d7d4;
        --hoverCard: #f0d7d4e8;
        --backgroundDataPokemon: #f0d7d4;
        --colorNameTitle: #2d2121;
        --backgroundType: #b0b0b0a8;
        --backgroundDescription: #DDC0BD;
        --white: #fff;
        --black: #000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        letter-spacing: 1px;
        font-family: "Roboto", sans-serif;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`