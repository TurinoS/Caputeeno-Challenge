import { useProducts } from '@/hooks/useProducts'
import ProductCard from './ProductCard';
import styled from 'styled-components';

const StyledSection = styled.section`
    display: flex;
    column-gap: 2em;
    row-gap: 1.5em;
    padding-top: 2em;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function ProductList() {
    const { data } = useProducts();
    console.log(data);

    return(
        <StyledSection>
            {data?.map((product) => (
                <ProductCard name={product.name} src={product.image_url} price={product.price_in_cents} key={product.id} />
            ))}
        </StyledSection>
    )
}