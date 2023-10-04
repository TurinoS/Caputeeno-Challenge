import { ContextApi } from "@/context/ContextApi";
import { StyledCartProductsList } from "@/styles/CartPageStyles";
import { ReactNode, useContext } from "react";

export default function CartProductsList({
  children,
}: {
  children: ReactNode;
}) {
  const { cartQuantity, cartPrice } = useContext(ContextApi);

  return (
    <StyledCartProductsList>
      <h2>SEU CARRINHO</h2>
      <p>
        Total ({cartQuantity} produtos) <span>R${cartPrice}</span>
      </p>
      {children}
    </StyledCartProductsList>
  );
}
