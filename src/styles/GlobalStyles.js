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