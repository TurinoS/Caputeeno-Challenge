import styled from "styled-components";

export const Card = styled.a`
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  width: fit-content;
  text-decoration: none;
  color: var(--text-dark);
  background-color: var(--white);
  transform: scale(1);
  transition: 450ms;

  &:hover {
    scale: 1.05;
  }

  & div {
    padding: 0 12px;
  }

  & h4 {
    font-weight: 300;
    padding: 2px 0 6px;
    border-bottom: 1px solid var(--medium-gray);
    line-height: 24px;
  }

  & p {
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    padding: 6px 0;
    line-height: 21px;
  }
`;
