import trash from "../../public/Trash.png";
import Image from "next/image";
import { useContext, useState } from "react";
import { ContextApi, Product } from "@/context/ContextApi";
import { StyledCartProductCard } from "@/styles/CartPageStyles";

interface CartProductProps {
  item: Product;
}

export default function CartProductCard({ item }: CartProductProps) {
  const { addToCart, reRender, setReRender, setCartPrice } =
    useContext(ContextApi);

  const handleDecreaseQuantity = () => {
    if (item.quantity > 0) {
      addToCart(item, -1);
    }
  };

  const handleIncreaseQuantity = () => {
    addToCart(item, 1);
  };

  const removeItem = (item: Product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const itemIndex = cartItems.findIndex(
      (cartItem: Product) => cartItem.id === item.id
    );
    setReRender(!reRender);
    setCartPrice(
      cartItems.reduce(
        (total: number, item: Product) => total + item.price_in_cents,
        0
      ) / 100
    );

    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  };

  return (
    <StyledCartProductCard>
      <Image
        src={item.image_url}
        alt={item.name}
        width={240}
        height={250}
        priority
      />
      <section>
        <div>
          <h2>{item.name}</h2>
          <Image
            onClick={() => removeItem(item)}
            src={trash}
            alt="Delete item"
            width={24}
          />
        </div>
        <p>{item.description}</p>
        <div>
          <p>
            <span onClick={handleDecreaseQuantity}>-</span>
            {item.quantity}
            <span onClick={handleIncreaseQuantity}>+</span>
          </p>
          <h3>R${item.price_in_cents / 100}</h3>
        </div>
      </section>
    </StyledCartProductCard>
  );
}
