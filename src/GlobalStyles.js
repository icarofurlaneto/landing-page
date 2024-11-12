import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: #333;
        line-height: 1.6;
    }
`;

export default GlobalStyles;