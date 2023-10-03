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

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
  font-size: 20px;
  font-weight: 500;
  color: var(--red);
`

export default function CartPage() {
  const { cartItems } = useContext(ContextApi);

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return (
        <StyledError><BackButton /><h3>Seu carrinho está vazio</h3></StyledError>
    )
  }

  return (
    <main>
        <BackButton />
        <CartPageContainer>
            <CartProductsList>
                {cartItems.map((item) => (
                    <CartProductCard item={item} key={item.id} />
                ))}
            </CartProductsList>
            <CartSummary />
        </CartPageContainer>
    </main>
  );
}
