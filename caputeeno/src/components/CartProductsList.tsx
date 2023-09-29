import { ReactNode } from "react";
import styled from "styled-components";

const StyledCartProducts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;

    & h2 {
        font-weight: 500;
        color: var(--dark-gray);
    }

    & p {
        margin: 6px 0 23px;
        font-weight: 300;

        & span {
            font-weight: 600;
            color: var(--dark-gray);
        }
    }
`

export default function CartProductsList({ children }: {children: ReactNode}) {
    const number = 3
    const subTotalPrice = 161.00

    return(
        <StyledCartProducts>
            <h2>SEU CARRINHO</h2>
            <p>Total ({number} produtos) <span>R${subTotalPrice}</span></p>
            {children}
        </StyledCartProducts>
    )
}