"use client";

import BackButton from "@/components/BackButton";
import ProductDetails from "@/components/ProductDetails";
import { ContextApi } from "@/context/ContextApi";
import { useContext } from "react";
import styled from "styled-components";

interface ProductProps {
  params: {
    id: string;
  };
}

const StyledError = styled.div`
  text-align: center;
  margin-top: 2em;
  font-size: 20px;
  font-weight: 500;
  color: var(--red);
`

export default function ProductPage({ params }: ProductProps) {
  const { products } = useContext(ContextApi);

  const selectedProduct = products?.find((product) => product.id === params.id);

  if (!selectedProduct) {
    return <StyledError>Loading...</StyledError>;
  }

  return (
    <main>
      <BackButton />
      <ProductDetails
        image={selectedProduct.image_url}
        category={selectedProduct.category}
        name={selectedProduct.name}
        price={selectedProduct.price_in_cents}
        description={selectedProduct.description}
        product={selectedProduct}
      />
    </main>
  );
}
