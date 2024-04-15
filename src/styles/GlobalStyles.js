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

    li {
        list-style-type: none;
    }
`