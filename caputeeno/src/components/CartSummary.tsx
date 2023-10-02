import { ContextApi } from "@/context/ContextApi";
import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";

const StyledCartProducts = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    justify-content: space-between;
    padding: 16px 24px;
    grid-column: 2;
    height: 700px;

    & section {

        display: flex;
        flex-direction: column;

        & h2 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 29px;
        }

        & div {
            display: flex;
            justify-content: space-between;
        }

        & .delivery {
            padding: 12px 0 24px;
            border-bottom: 1px solid var(--text-dark);
        }

        & .scratched {
            text-decoration: line-through;
        }

        & .total {
            font-weight: 600;
            color: var(--dark-gray);
            margin: 8px 0 40px;
        }

        & button {
            padding: 10px;
            background-color: var(--green);
            font-weight: 500;
            color: var(--white);
            border-radius: 4px;
            border: none;
            cursor: pointer;
        }

        & a {
            color: var(--text-dark);
            margin-bottom: 12px;
        } 
    }
`

export default function CartSummary() {
    const { cartPrice } = useContext(ContextApi)

    return(
        <StyledCartProducts>
            <section>
                <h2>RESUMO DO PEDIDO</h2>
                <div>
                    <p>Subtotal de produtos</p>
                    <p>R${cartPrice}</p>
                </div>
                <div className={`delivery ${cartPrice > 900 && "scratched"}`}>
                    <p>Entrega</p>
                    <p>R$40.00</p>
                </div>
                <div className="total">
                    <p>Total</p>
                    <p>R${cartPrice > 900 ? cartPrice : (cartPrice + 40)}</p>
                </div>
                <button>FINALIZAR COMPRA</button>
            </section>
            <section>
                <Link href="#">AJUDA</Link>
                <Link href="#">REEMBOLSOS</Link>
                <Link href="#">ENTREGAS E FRETE</Link>
                <Link href="#">TROCAS E DEVOLUÇÕES</Link>
            </section>
        </StyledCartProducts>
    )
}