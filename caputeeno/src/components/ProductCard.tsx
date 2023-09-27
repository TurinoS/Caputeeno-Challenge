'use client'

import Image from 'next/image';
import styled from 'styled-components';

interface CardProps {
    name: string,
    src: string,
    price: number,
}

const Card = styled.div`
    border-radius: 8px 8px 0 0;
`

export default function ProductCard({ name, src, price }: CardProps) {
    return(
       <Card>
            <Image src={src} alt={name} width={350} height={350} />
            <p>{name}</p>
            <p>{price}</p>
        </Card> 
    )
    
} 