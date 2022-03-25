import styled from "styled-components";

export const SecundaryContent = styled.section`
div{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:24px;
  margin-top: 3rem;
  h3{
    border-top: 0.025rem solid var(--brown-100);
    padding-top: 3rem;
    font-family: 'Rightous',cursive;
    font-weight: 400;
    font-size: 1.25rem;
    color:var(--brown-100);
    margin-bottom: 1rem;
  }
  p{
    font-family: 'Sarala',cursive;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-align: center;
    color:var(--brown-100)
  }
}
margin-bottom: 8.5rem;
`