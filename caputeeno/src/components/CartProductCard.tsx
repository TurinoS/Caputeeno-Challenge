import styled from "styled-components";
import trash from "../../public/Trash.png";
import Image from "next/image";

interface CartProductProps {
    image: string,
    name: string,
    description: string,
    price: number,
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

            & select {
                background-color: var(--light-gray);
                color: var(--text-dark);
                border: 1px solid var(--text-dark);
                border-radius: 8px;
                padding: 8px 12px;
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

export default function CartProductCard({ image, name, description, price }: CartProductProps) {
    return(
        <StyledCartProductCard>
            <Image src={image} alt={name} width={240} height={250} />
            <section>
                <div>
                    <h2>{name}</h2>
                    <Image src={trash} alt="Delete item" width={24} />
                </div>
                <p>{description}</p>
                <div>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <h3>R${price / 100}</h3>
                </div>
            </section>
        </StyledCartProductCard>
    )
}