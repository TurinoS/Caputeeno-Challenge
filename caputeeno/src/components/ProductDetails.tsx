import Image from "next/image";
import shoppingBag from "../../public/WhiteCart.png";
import { ContextApi, Product } from "@/context/ContextApi";
import { useContext } from "react";
import { StyledProductDetails } from "@/styles/ProductDetailsStyle";

interface ProductDetailsProps {
  image: string;
  category: string;
  name: string;
  price: number;
  description: string;
  product: Product;
}

export default function ProductDetails({
  image,
  name,
  category,
  price,
  description,
  product,
}: ProductDetailsProps) {
  const { addToCart } = useContext(ContextApi);
  return (
    <StyledProductDetails>
      <Image
        src={image}
        alt={name}
        width={400}
        height={430}
        className="productImg"
      />
      <div>
        <div>
          <h6>{category === "mugs" ? "Canecas" : "Camisetas"}</h6>
          <h2>{name}</h2>
          <h3>R${price / 100}</h3>
          <p>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </p>
          <h4>DESCRIÇÃO</h4>
          <h5>{description}</h5>
        </div>
        <button onClick={() => addToCart(product, 1)}>
          <Image src={shoppingBag} alt="Add to cart" width={24} /> ADICIONAR AO
          CARRINHO
        </button>
      </div>
    </StyledProductDetails>
  );
}
