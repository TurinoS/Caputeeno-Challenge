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

    @media (max-width: 500px) {
        gap: .5em;

        & > img {
            width: 140px;
            height: 150px;
        }
    }

    & section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px 16px 24px 0;

        @media (max-width: 500px) {
            padding-bottom: 0;
        }

        & div {
            display: flex;
            justify-content: space-between;

            @media (max-width: 500px) {
                flex-direction: column;
                align-items: flex-end;
            }

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

                @media (max-width: 500px) {
                    font-size: 16px;
                    line-height: 24px;
                }

                & span {
                    cursor: pointer;
                    padding: 0 8px;
                    font-size: 24px;

                    &:hover {
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

export default function CartProductCard({ item }: CartProductProps) {
    const { addToCart, reRender, setReRender, setCartPrice } = useContext(ContextApi);

    const handleDecreaseQuantity = () => {
      if (item.quantity > 0) {
        addToCart(item, -1);
      }
    };
  
    const handleIncreaseQuantity = () => {
      addToCart(item, 1);
    };

    const removeItem = (item: Product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const itemIndex = cartItems.findIndex((cartItem: Product) => cartItem.id === item.id);
        setReRender(!reRender);
        setCartPrice(cartItems.reduce((total: number, item: Product) => total + item.price_in_cents, 0) / 100);
        
        if (itemIndex !== -1) {
          cartItems.splice(itemIndex, 1);
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
      };

    return(
        <StyledCartProductCard>
            <Image src={item.image_url} alt={item.name} width={240} height={250} priority />
            <section>
                <div>
                    <h2>{item.name}</h2>
                    <Image onClick={() => removeItem(item)} src={trash} alt="Delete item" width={24} />
                </div>
                <p>{item.description}</p>
                <div>
                    <p><span onClick={handleDecreaseQuantity}>-</span>{item.quantity}<span onClick={handleIncreaseQuantity}>+</span></p>
                    <h3>R${item.price_in_cents / 100}</h3>
                </div>
            </section>
        </StyledCartProductCard>
    )
}