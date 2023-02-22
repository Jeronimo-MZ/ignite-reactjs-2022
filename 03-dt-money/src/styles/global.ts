import { createGlobalStyle } from "styled-components";

export const GlobalSyle = createGlobalStyle`

    * {
        margin: 0;
        border:0;
        box-sizing: border-box;
    }

    :focus {
        outline:0;
        box-shadow: 0 0 0 2px ${props => props.theme["green-500"]};
    }

    body {
        background: ${props => props.theme["gray-800"]};
        color: ${props => props.theme["gray-100"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input,textarea,button {
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        font-weight: 700;
    }
`;
