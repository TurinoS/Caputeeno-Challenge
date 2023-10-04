import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  column-gap: 2em;
  row-gap: 1.5em;
  padding-top: 2em;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 545px) {
    justify-content: center;
  }
`;