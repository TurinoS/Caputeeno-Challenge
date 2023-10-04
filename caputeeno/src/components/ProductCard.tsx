"use client";

import { Card } from "@/styles/ProductCardStyles";
import Image from "next/image";

interface CardProps {
  id: string;
  name: string;
  src: string;
  price: number;
}

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
