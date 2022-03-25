import styled from 'styled-components'
import { darken } from 'polished'
export const PrimaryContent = styled.section`
 display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    div{
        display: flex;
        flex-direction: column;
        gap:2rem;
    }
    h1{
        font-family: "Righteous",sans-serif;
        font-weight: 400;
        font-size: 4rem;
        color:var(--brown-100);
    }
    h2{
        font-family: "Sarala",cursive;
        font-weight: 400;
        font-size: 1.5rem;
        color:var(--brown-200);
        line-height: 2.4rem;
    }
    button{
        border-radius: 1.25rem;
        background-color: var(--brown-200);
        border: none;
        width: 185px;
        height: 67px;
        box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
        font-family: "Sarala",cursive;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 2.4rem;
        &:hover{
            background-color: ${darken(0.2, '#ECD6C4')};
        }
    }
    img{
        width: 19rem;
        height: 18.3rem;

    }

`