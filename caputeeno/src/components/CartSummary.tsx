import { ContextApi } from "@/context/ContextApi";
import { StyledCartProducts } from "@/styles/CartPageStyles";
import Link from "next/link";
import { useContext } from "react";

export default function CartSummary() {
  const { cartPrice } = useContext(ContextApi);

  return (
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
          <p>R${cartPrice > 900 ? cartPrice : cartPrice + 40}</p>
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
  );
}
