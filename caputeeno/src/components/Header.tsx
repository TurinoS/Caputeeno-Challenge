"use client";

import styled from "styled-components";
import Link from "next/link";
import { Saira_Stencil_One } from "next/font/google";
import shoppingBag from "../../public/Cart.png";
import serchLoupe from "../../public/Loupe.png";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ContextApi } from "@/context/ContextApi";

const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 10em;
  background-color: var(--white);

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

const StyledInput = styled.form`
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
  }

  & img {
    position: relative;
    right: 40px;
    top: 10px;
    cursor: pointer;
  }
`;

export default function Header() {
  const { setSearch, cartQuantity } = useContext(ContextApi);
  

  return (
    <StyledHeader>
      <Link className={sairaStencil.className} href="/">
        caputeeno
      </Link>
      <div>
        <StyledInput>
          <input type="text" placeholder="Procurando por algo específico?" onChange={(e) => setSearch(e.target.value)} />
          <Image src={serchLoupe} alt="search" width={30} />
        </StyledInput>
        <Link href="/cart">
          <Image src={shoppingBag} alt="Shopping bag" width={30} />
          <span>{cartQuantity}</span>
        </Link>
      </div>
    </StyledHeader>
  );
}
