import styled from "styled-components";
import trash from "../../public/Trash.png";
import Image from "next/image";
import { useContext, useState } from "react";
import { ContextApi, Product } from "@/context/ContextApi";

interface CartProductProps {
    item: Product,
}

const StyledCartProductCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 2.8fr;
    gap: 2em;
    border-radius: 8px;
    background-color: var(--white);
    overflow: hidden;

    & section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px 16px 24px 0;

        & div {
            display: flex;
            justify-content: space-between;

            & h2 {
                font-size: 20px;
                font-weight: 300;
            }

            & img {
                cursor: pointer;
            }

            & p {
                background-color: var(--light-gray);
                color: var(--text-dark);
                border: 1px solid var(--text-dark);
                border-radius: 8px;
                font-size: 20px;

                & span {
                    cursor: pointer;
                    padding: 0 8px;
                    font-size: 24px;

                    &:hover {
                        transform: scaleX(1.1);
                        color: var(--blue);
                    }
                }
            }

            & h3 {
                font-weight: 600;
                color: var(--dark-gray);
            }
        }

        & p {
            font-size: 12px;
        }
    }
`

const updateCartItems = (newCartItems: Product[]) => {
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

export default function CartProductCard({ item }: CartProductProps) {
    const { products, addToCart } = useContext(ContextApi);

    const handleDecreaseQuantity = () => {
      if (item.quantity > 0) {
        addToCart(item, -1);
      }
    };
  
    const handleIncreaseQuantity = () => {
      addToCart(item, 1);
    };

    return(
        <StyledCartProductCard>
            <Image src={item.image_url} alt={item.name} width={240} height={250} />
            <section>
                <div>
                    <h2>{item.name}</h2>
                    <Image src={trash} alt="Delete item" width={24} />
                </div>
                <p>{item.description}</p>
                <div>
                    <p><span onClick={handleDecreaseQuantity}>-</span>{item.quantity}<span onClick={handleIncreaseQuantity}>+</span></p>
                    <h3>R${item.price_in_cents * item.quantity / 100}</h3>
                </div>
            </section>
        </StyledCartProductCard>
    )
}