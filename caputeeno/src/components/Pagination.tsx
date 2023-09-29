"use client";

import Link from "next/link";
import styled from "styled-components";
import arrowRight from "../../public/RightArrow.png";
import arrowLeft from "../../public/LeftArrow.png";
import Image from "next/image";

const LinkList = styled.ul`
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

    & a {
      text-decoration: none;
      color: var(--text-dark);
    }
  }

  & .arrow {
    margin-left: 6px;
  }

  & .selected {
    border: 1px solid var(--orange);
    background-color: var(--light-gray);

    & a {
      color: var(--orange);
    }
  }
`;

export default function Pagination() {
  return (
    <LinkList>
      <li className="selected">
        <Link href="/">1</Link>
      </li>
      <li>
        <Link href="/page2">2</Link>
      </li>
      <li>
        <Link href="/page3">3</Link>
      </li>
      <li>
        <Link href="/page4">4</Link>
      </li>
      <li>
        <Link href="/page5">5</Link>
      </li>
      <li className="arrow">
        <Link href="#">
          <Image src={arrowLeft} alt="Previous page" width={24} />
        </Link>
      </li>
      <li>
        <Link href="#">
          <Image src={arrowRight} alt="Next page" width={24} />
        </Link>
      </li>
    </LinkList>
  );
}
