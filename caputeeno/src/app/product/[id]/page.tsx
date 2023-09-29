'use client'

import { ContextApi } from "@/context/ContextApi";
import { useContext } from "react";

interface ProductProps {
  params: {
    id: string,
  }
}

export default function ProductPage({ params }: ProductProps) {
  const { products } = useContext(ContextApi);

  const selectedProduct = products?.find(product => product.id === params.id);

  return (
      <main>
        
        <h1>página do produto: {selectedProduct?.name}</h1>
        
      </main>
  )
}