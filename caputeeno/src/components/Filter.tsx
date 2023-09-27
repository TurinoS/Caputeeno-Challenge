"use client";

import styled from "styled-components";
import arrowDown from "../../public/DownArrow.png";
import Image from "next/image";
import { useState } from "react";

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  & .filter {
    list-style: none;
    display: flex;
    gap: 2.5em;

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
      margin-left:auto;
      gap: 0.5em;
      border: none;
      color: var(--text-dark);
      font-family: inherit;
      cursor: pointer;
      background-color: var(--gray);
    }

    & .options {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
      background-color: var(--white);
      padding: .8em 1em;
      border-radius: 4px;
      position: absolute;
      top: 100%;
      left: 10px;
      z-index: 1;

      & li {
        cursor: pointer;
      }
    }
  }
`;

export default function Filter() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <StyledFilter>
      <ul className="filter">
        <li className="selected">TODOS OS PRODUTOS</li>
        <li>CAMISETAS</li>
        <li>CANECAS</li>
      </ul>
      <div>
        <button>
          Organizar por{" "}
          <Image
            src={arrowDown}
            alt="Open list"
            width={30}
            onClick={() => setOpenFilter(!openFilter)}
          />
        </button>
        {openFilter && (
          <ul className="options">
            <li>Novidades</li>
            <li>Preço: Maior - menor</li>
            <li>Preço: Menor - maior</li>
            <li>Mais vendidos</li>
          </ul>
        )}
      </div>
    </StyledFilter>
  );
}
