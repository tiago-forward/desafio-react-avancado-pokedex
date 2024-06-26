import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --white: #fff;
        --black: #000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-oxs-font-smoothing: grayscale;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        letter-spacing: 1px;
        font-family: "Roboto", sans-serif;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`