import styled from "styled-components";

export const PaginationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 2px;

  & li {
    background-color: var(--gray);
    border-radius: 8px;
    width: 25px;
    height: 25px;
    text-align: center;
    border: 1px solid var(--gray);
    cursor: pointer;
  }

  & .arrow {
    margin-left: 6px;
  }

  & .selected {
    border: 1px solid var(--orange);
    background-color: var(--light-gray);

    & p {
      color: var(--orange);
    }
  }
`;
