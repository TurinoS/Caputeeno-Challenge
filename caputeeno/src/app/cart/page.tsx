"use client";

import styled from "styled-components";
import BackButton from "@/components/BackButton";
import CartProductsList from "@/components/CartProductsList";
import { ContextApi } from "@/context/ContextApi";
import { useContext } from "react";
import CartProductCard from "@/components/CartProductCard";
import CartSummary from "@/components/CartSummary";

const CartPageContainer = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2em;
`

export default function CartPage() {
  const { products } = useContext(ContextApi);

  if (!Array.isArray(products) || products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
        <BackButton />
        <CartPageContainer>
            <CartProductsList>
                {products.map((product) => (
                    <CartProductCard image={product.image_url} name={product.name} description={product.description} price={product.price_in_cents} key={product.id} />
                ))}
            </CartProductsList>
            <CartSummary />
        </CartPageContainer>
    </main>
  );
}
