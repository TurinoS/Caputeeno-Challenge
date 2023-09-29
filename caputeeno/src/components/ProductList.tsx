"use client";

import ProductCard from "./ProductCard";
import styled from "styled-components";
import { useContext } from "react";
import { ContextApi } from "@/context/ContextApi";

const StyledSection = styled.section`
  display: flex;
  column-gap: 2em;
  row-gap: 1.5em;
  padding-top: 2em;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function ProductList() {
  const { products } = useContext(ContextApi);

  if (!Array.isArray(products) || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <StyledSection>
      {products.map((product) => (
        <ProductCard
          name={product.name}
          src={product.image_url}
          price={product.price_in_cents}
          key={product.id}
        />
      ))}
    </StyledSection>
  );
}
