import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1200px) {
            font-size: 93%;
        }
        @media(max-width: 767px) {
            font-size: 87.5%;
        }
    }

    body {
        font-family: ${({ theme }) => theme.fonts.font1};
        font-size: 1rem;
    }
`;
