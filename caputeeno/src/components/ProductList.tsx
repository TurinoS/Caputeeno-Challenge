import { useProducts } from '@/hooks/useProducts'
import ProductCard from './ProductCard';

export default function ProductList() {
    const { data } = useProducts();
    console.log(data);

    return(
        <div>
            {data?.map((product) => (
                <ProductCard name={product.name} src={product.image_url} price={product.price_in_cents} key={product.id} />
            ))}
        </div>
    )
}