"use client";

import BackButton from "@/components/BackButton";
import ProductDetails from "@/components/ProductDetails";
import { ContextApi } from "@/context/ContextApi";
import { StyledError } from "@/styles/StyledError";
import { useContext } from "react";

interface ProductProps {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductProps) {
  const { products } = useContext(ContextApi);

  const selectedProduct = products?.find((product) => product.id === params.id);

  if (!selectedProduct) {
    return <StyledError>Loading...</StyledError>;
  }

  return (
    <main>
      <BackButton />
      <ProductDetails
        image={selectedProduct.image_url}
        category={selectedProduct.category}
        name={selectedProduct.name}
        price={selectedProduct.price_in_cents}
        description={selectedProduct.description}
        product={selectedProduct}
      />
    </main>
  );
}
