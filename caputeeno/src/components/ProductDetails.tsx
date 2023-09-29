import Image from 'next/image';
import styled from 'styled-components';
import shoppingBag from '../../public/WhiteCart.png';

interface ProductDetailsProps {
    image: string,
    category: string,
    name: string,
    price: number,
    description: string,
    id: string,
}

const StyledProductDetails = styled.section`
    display: flex;
    gap: 2em;
    margin-bottom: 7em;

    & img {
        border-radius: 4px;
    }

    & div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & h6 {
        font-size: 16px;
        font-weight: 400;
    }

    & h2 {
        margin: 12px 0 4px;
        font-size: 32px;
        font-weight: 300;
    }

    & h3 {
        font-size: 20px;
        font-weight: 600;
        color: var(--black);
    }

    & p {
        font-size: 12px;
        font-weight: 400;
        margin: 24px 0 58px;
    }

    & h4 {
        font-size: 16px;
        font-weight: 500;
    }

    & h5 {
        font-size: 14px;
        font-weight: 400;
        margin-top: 8px;
    }

    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        padding: 10px;
        background-color: var(--blue);
        font-weight: 500;
        color: var(--white);
        border-radius: 4px;
        border: none;
        cursor: pointer;
    }
`

export default function ProductDetails({ image, name, category, price, description, id }: ProductDetailsProps) {
    return(
        <StyledProductDetails>
            <Image src={image} alt={name} width={400} height={430} />
            <div>
                <div>
                    <h6>{category === "mugs" ? 'Canecas' : 'Camisetas'}</h6>
                    <h2>{name}</h2>
                    <h3>R${price / 100}</h3>
                    <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
                    <h4>DESCRIÇÃO</h4>
                    <h5>{description}</h5>
                </div>
                <button><Image src={shoppingBag} alt='Add to cart' width={24} /> ADICIONAR AO CARRINHO</button>
            </div>
        </StyledProductDetails>
    )
}