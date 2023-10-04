import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 10em;
  background-color: var(--white);

  @media (max-width: 966px) {
    padding: 1em;
  }

  @media (max-width: 680px) {
    flex-direction: column;
  }

  & a {
    text-decoration: none;
    color: var(--dark-gray);
    font-size: 40px;
    line-height: 40px;
  }

  & div {
    display: flex;
    align-items: center;
    gap: 1.5em;

    @media (max-width: 680px) {
      gap: 0.5em;
    }

    & a {
      height: 40px;
    }

    & span {
      font-size: 10px;
      color: var(--white);
      font-weight: 500;
      background-color: var(--red);
      border-radius: 50%;
      padding: 0.1em 0.5em;
      position: relative;
      right: 8px;
    }
  }
`;

export const StyledInput = styled.form`
  & input {
    border: none;
    background-color: var(--light-gray);
    border-radius: 8px;
    width: 350px;
    padding: 0.8em 1em;
    font-size: 0.8em;
    font-family: inherit;
    color: var(--text-dark);
    outline: none;
    height: 40px;

    @media (max-width: 680px) {
      width: 250px;
    }
  }

  & img {
    position: relative;
    right: 40px;
    top: 10px;
    cursor: pointer;
  }
`;
