import styled from "styled-components";

export const StyledProductDetails = styled.section`
  display: flex;
  gap: 2em;
  margin-bottom: 7em;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
  }

  & > img {
    border-radius: 4px;

    @media (max-width: 400px) {
      width: 320px;
      height: 340px;
    }
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & h6 {
    font-size: 16px;
    font-weight: 400;
  }

  & h2 {
    margin: 12px 0 4px;
    font-size: 32px;
    font-weight: 300;
  }

  & h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--black);
  }

  & p {
    font-size: 12px;
    font-weight: 400;
    margin: 24px 0 58px;
  }

  & h4 {
    font-size: 16px;
    font-weight: 500;
  }

  & h5 {
    font-size: 14px;
    font-weight: 400;
    margin-top: 8px;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 10px;
    background-color: var(--blue);
    font-weight: 500;
    color: var(--white);
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
`;