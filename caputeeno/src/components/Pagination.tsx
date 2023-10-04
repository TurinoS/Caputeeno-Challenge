"use client";

import arrowRight from "../../public/RightArrow.png";
import arrowLeft from "../../public/LeftArrow.png";
import Image from "next/image";
import { useContext } from "react";
import { ContextApi } from "@/context/ContextApi";
import { PaginationList } from "@/styles/Pagination";

export default function Pagination() {
  const { page, setPage, filter, search } = useContext(ContextApi);

  let pageNumber = [1, 2, 3, 4, 5];

  if (filter === "TODOS OS PRODUTOS") {
    pageNumber = [1, 2, 3, 4, 5];
  } else {
    pageNumber = [1, 2, 3];
  }

  return (
    <PaginationList>
      {!search && (
        <>
          {pageNumber.map((number) => (
            <div key={number}>
              <li
                onClick={() => setPage(number)}
                className={page === number ? "selected" : ""}
              >
                <p>{number}</p>
              </li>
            </div>
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
        </>
      )}
    </PaginationList>
  );
}
