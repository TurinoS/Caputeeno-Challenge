"use client";

import Link from "next/link";
import { Saira_Stencil_One } from "next/font/google";
import shoppingBag from "../../public/Cart.png";
import serchLoupe from "../../public/Loupe.png";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ContextApi } from "@/context/ContextApi";
import { StyledHeader, StyledInput } from "@/styles/Header.styles";

const sairaStencil = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const { setSearch, cartQuantity } = useContext(ContextApi);

  return (
    <StyledHeader>
      <Link className={sairaStencil.className} href="/">
        caputeeno
      </Link>
      <div>
        <StyledInput>
          <input
            type="text"
            placeholder="Procurando por algo específico?"
            onChange={(e) => setSearch(e.target.value)}
          />
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
