import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${myTheme.colors.font};
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        color: ${myTheme.colors.font};
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    section {
        padding: 100px 0;

        @media ${myTheme.media.mobile} {
            padding: 80px 0;
        }
    }

    section:nth-of-type(odd) {
        background-color: ${myTheme.colors.primaryBg};
    }

    section:nth-of-type(even) {
        background-color: ${myTheme.colors.secondaryBg};
    }

    h3 {
        font-weight: 700;
        font-size: 16px;
    }

    p {
        font-weight: 400;
        font-size: 14px;
    }
`