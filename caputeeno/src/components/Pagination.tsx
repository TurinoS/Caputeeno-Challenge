"use client";

import Link from "next/link";
import styled from "styled-components";
import arrowRight from "../../public/RightArrow.png";
import arrowLeft from "../../public/LeftArrow.png";
import Image from "next/image";
import { useContext } from "react";
import { ContextApi } from "@/context/ContextApi";

const PaginationList = styled.ul`
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

export default function Pagination() {
  const { page, setPage, filter } = useContext(ContextApi);

  let pageNumber = [1, 2, 3, 4, 5]

  if (filter === "TODOS OS PRODUTOS") {
    pageNumber = [1, 2, 3, 4, 5];
  } else {
    pageNumber = [1, 2, 3];
  }

  return (
    <PaginationList>
      {pageNumber.map((number) => (
        <>
          <li onClick={() => setPage(number)} className={page === number ? "selected" : ""}>
            <p>{number}</p>
          </li>
        </>
      ))}
      <li onClick={() => page != 1 && setPage(page - 1)} className="arrow">
        <p>
          <Image src={arrowLeft} alt="Previous page" width={24} />
        </p>
      </li>
      <li onClick={() => page != pageNumber.length && setPage(page + 1)}>
        <p>
          <Image src={arrowRight} alt="Next page" width={24} />
        </p>
      </li>
    </PaginationList>
  );
}
