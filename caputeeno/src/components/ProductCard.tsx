"use client";

import Image from "next/image";
import styled from "styled-components";

interface CardProps {
  id: string;
  name: string;
  src: string;
  price: number;
}

const Card = styled.a`
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

export default function ProductCard({ id, name, src, price }: CardProps) {
  return (
    <Card href={`/product/${id}`}>
      <Image src={src} alt={name} width={240} height={250} />
      <div>
        <h4>{name}</h4>
        <p>R${price / 100}</p>
      </div>
    </Card>
  );
}
