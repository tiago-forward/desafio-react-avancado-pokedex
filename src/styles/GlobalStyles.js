import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        padding: 0 15px;
        font-family: Arial, Helvetica, sans-serif;
        background-color: lightcoral;
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