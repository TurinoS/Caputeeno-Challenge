import { ContextApi } from "@/context/ContextApi";
import { ReactNode, useContext } from "react";
import styled from "styled-components";

const StyledCartProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (max-width: 700px) {
        gap: 0;
    }

    & h2 {
        font-weight: 500;
        color: var(--dark-gray);
    }

    & > p {
        margin: 6px 0 23px;
        font-weight: 300;

        & span {
            font-weight: 600;
            color: var(--dark-gray);
        }
    }
`

export default function CartProductsList({ children }: {children: ReactNode}) {
    const { cartQuantity, cartPrice } = useContext(ContextApi);

    return(
        <StyledCartProducts>
            <h2>SEU CARRINHO</h2>
            <p>Total ({cartQuantity} produtos) <span>R${cartPrice}</span></p>
            {children}
        </StyledCartProducts>
    )
}