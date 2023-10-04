import styled from "styled-components";

export const StyledCartProductCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.8fr;
  gap: 2em;
  border-radius: 8px;
  background-color: var(--white);
  overflow: hidden;

  @media (max-width: 500px) {
    gap: 0.5em;

    & > img {
      width: 140px;
      height: 150px;
    }
  }

  & section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 16px 24px 0;

    @media (max-width: 500px) {
      padding-bottom: 0;
    }

    & div {
      display: flex;
      justify-content: space-between;

      @media (max-width: 500px) {
        flex-direction: column;
        align-items: flex-end;
      }

      & h2 {
        font-size: 20px;
        font-weight: 300;
      }

      & img {
        cursor: pointer;
      }

      & p {
        background-color: var(--light-gray);
        color: var(--text-dark);
        border: 1px solid var(--text-dark);
        border-radius: 8px;
        font-size: 20px;

        @media (max-width: 500px) {
          font-size: 16px;
          line-height: 24px;
        }

        & span {
          cursor: pointer;
          padding: 0 8px;
          font-size: 24px;

          &:hover {
            color: var(--blue);
          }
        }
      }

      & h3 {
        font-weight: 600;
        color: var(--dark-gray);
      }
    }

    & p {
      font-size: 12px;
    }
  }
`;

export const StyledCartProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: 700px) {
    gap: 0;
  }

  & h2 {
    font-weight: 500;
    color: var(--dark-gray);
  }

  & > p {
    margin: 6px 0 23px;
    font-weight: 300;

    & span {
      font-weight: 600;
      color: var(--dark-gray);
    }
  }
`;

export const StyledCartProducts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  justify-content: space-between;
  padding: 16px 24px;
  grid-column: 2;
  height: 700px;

  @media (max-width: 700px) {
    height: 500px;
  }

  & section {
    display: flex;
    flex-direction: column;

    & h2 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 29px;
    }

    & div {
      display: flex;
      justify-content: space-between;
    }

    & .delivery {
      padding: 12px 0 24px;
      border-bottom: 1px solid var(--text-dark);
    }

    & .scratched {
      text-decoration: line-through;
    }

    & .total {
      font-weight: 600;
      color: var(--dark-gray);
      margin: 8px 0 40px;
    }

    & button {
      padding: 10px;
      background-color: var(--green);
      font-weight: 500;
      color: var(--white);
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }

    & a {
      color: var(--text-dark);
      margin-bottom: 12px;
    }
  }
`;
