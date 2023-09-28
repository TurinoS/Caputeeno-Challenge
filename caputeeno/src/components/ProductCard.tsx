"use client";

import Image from "next/image";
import styled from "styled-components";

interface CardProps {
  name: string;
  src: string;
  price: number;
}

const Card = styled.div`
  overflow: hidden;
  border-radius: 8px 8px 0 0;
  width: fit-content;

  &:hover {
    scale: 1.05;
    transition: 450ms ease-in-out;
  }

  & h4 {
    font-weight: 300;
    padding: 2px 12px 6px;
    border-bottom: 1px solid var(--gray);
    line-height: 24px;
  }

  & p {
    font-size: 14px;
    font-weight: 600;
    color: var(--black);
    padding: 6px 12px;
    line-height: 21px;
  }
`;

export default function ProductCard({ name, src, price }: CardProps) {
  return (
    <Card>
      <Image src={src} alt={name} width={240} height={250} />
      <h4>{name}</h4>
      <p>R${price / 100}</p>
    </Card>
  );
}
