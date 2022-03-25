import styled from "styled-components";

export const HeaderPage = styled.header`
  display: flex;
  flex-direction:row ;
  align-items: center;
  justify-content: space-around;
  padding:1.5rem;
  img{
    height: 4.5rem;
  }
  nav{
    display: flex;
    gap: 2rem; 
  }
  a{
      text-decoration: none;
      font-family: 'Sarala',cursive;
      font-weight: 400;
      color:var(--brown-100);
    }
 
  
`