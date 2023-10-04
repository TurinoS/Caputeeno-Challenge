import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  & .filter {
    list-style: none;
    display: flex;
    gap: 2.5em;

    @media (max-width: 680px) {
      gap: 0.5em;
      align-items: center;
      font-size: 14px;
    }

    & li {
      cursor: pointer;

      &.selected {
        color: var(--dark-gray);
        font-weight: 600;
        border-bottom: 4px solid var(--orange);
      }
    }
  }

  & div {
    font-size: 14px;
    width: 176px;
    position: relative;

    & button {
      display: flex;
      align-items: center;
      margin-left: auto;
      gap: 0.5em;
      border: none;
      color: var(--text-dark);
      font-family: inherit;
      cursor: pointer;
      background-color: var(--light-gray);
    }

    & .options {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
      background-color: var(--white);
      padding: 0.8em 1em;
      border-radius: 4px;
      position: absolute;
      top: 100%;
      left: 10px;
      z-index: 1;

      @media (max-width: 680px) {
        left: 0;
      }

      & li {
        cursor: pointer;
      }
    }
  }
`;
