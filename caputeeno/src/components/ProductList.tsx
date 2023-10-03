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

  @media (max-width: 545px) {
    justify-content: center;
  }
`;

const StyledError = styled.div`
  text-align: center;
  margin-top: 2em;
  font-size: 20px;
  font-weight: 500;
  color: var(--red);
`

export default function ProductList() {
  const { products, page, filter, sortBy, search } = useContext(ContextApi);

  let productsSearched = products;
  let productsToRender = products;

  if(search === "") {
    productsSearched = products;
  } else {
    const searchLowerCase = search.toLowerCase();
    productsSearched = products.filter((product) => {
      const productNameLowerCase = product.name.toLowerCase();
      return productNameLowerCase.includes(searchLowerCase);
    });
  }

  if (filter === "TODOS OS PRODUTOS") {
    productsToRender = productsSearched;
  } else if (filter === "CANECAS") {
    productsToRender = productsSearched.filter((product) => product.category === "mugs");
  } else if (filter === "CAMISETAS") {
    productsToRender = productsSearched.filter((product) => product.category === "t-shirts");
  }

  if (sortBy === "newest") {
    productsToRender.sort((a, b) => {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  } else if (sortBy === "costlier") {
    productsToRender.sort((a, b) => b.price_in_cents - a.price_in_cents);
  } else if (sortBy === "cheaper") {
    productsToRender.sort((a, b) => a.price_in_cents - b.price_in_cents);
  } else if (sortBy === "bestseller") {
    productsToRender.sort((a, b) => b.sales - a.sales);
  }

  if (productsToRender.length === 0 && search) {
    return <StyledError>Produto não encontrado</StyledError>;
  } else if(productsToRender.length === 0) {
    return <StyledError>Carregando...</StyledError>;
  }

  const firstProduct = (page - 1) * 12;
  const lastProduct = (page * 12);

  return (
    <StyledSection>
      {productsToRender.slice(firstProduct, lastProduct).map((product) => (
        <ProductCard
          id={product.id}
          name={product.name}
          src={product.image_url}
          price={product.price_in_cents}
          key={product.id}
        />
      ))}
    </StyledSection>
  );
}
