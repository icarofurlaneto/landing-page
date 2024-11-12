import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #1E1E1E;
        color: #E0E0E0;
        line-height: 1.6;
    }

    a {
        color: #E0E0E0;
        text-decoration: none;
    }
`;

export default GlobalStyles;