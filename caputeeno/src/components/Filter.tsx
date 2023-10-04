"use client";

import arrowDown from "../../public/DownArrow.png";
import Image from "next/image";
import { useContext, useState } from "react";
import { ContextApi } from "@/context/ContextApi";
import { StyledFilter } from "@/styles/FilterStyles";

export default function Filter() {
  const { setPage, filter, setFilter, sortBy, setSortBy } =
    useContext(ContextApi);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <StyledFilter>
      <ul className="filter">
        {["TODOS OS PRODUTOS", "CAMISETAS", "CANECAS"].map((item) => (
          <li
            key={item}
            className={item === filter ? "selected" : ""}
            onClick={() => {
              setFilter(item);
              setPage(1);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setOpenMenu(!openMenu)}>
          {!sortBy
            ? "Organizar por"
            : sortBy === "newest"
            ? "Novidades"
            : sortBy === "costlier"
            ? "Preço: Maior - menor"
            : sortBy === "cheaper"
            ? "Preço: Menor - maior"
            : "Mais vendidos"}
          <Image src={arrowDown} alt="Open list" width={30} />
        </button>
        {openMenu && (
          <ul className="options">
            <li onClick={() => setSortBy("newest")}>Novidades</li>
            <li onClick={() => setSortBy("costlier")}>Preço: Maior - menor</li>
            <li onClick={() => setSortBy("cheaper")}>Preço: Menor - maior</li>
            <li onClick={() => setSortBy("bestseller")}>Mais vendidos</li>
          </ul>
        )}
      </div>
    </StyledFilter>
  );
}
