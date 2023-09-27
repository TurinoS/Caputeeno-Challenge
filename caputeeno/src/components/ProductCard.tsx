import { useProducts } from '@/hooks/useProducts'

export default function ProductCard() {
    const { data } = useProducts();
    console.log(data);

    return(
        <div>
            
        </div>
    )
}