import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    :focus{
        outline: 0;
    }

    body {
        background-color: ${({ theme }) => theme.color['background-500']};
        color: ${({ theme }) => theme.color['text-500']};
        -webkit-font-smoothing: antialiased;
        font-size: 1.6rem;
    }
    
    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`
