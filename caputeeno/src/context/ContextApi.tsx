"use client";

import { createContext, ReactNode, useState, useEffect } from "react";

type Product = {
  id: string;
  name: string;
  price_in_cents: number;
  image_url: string;
  category: string;
  description: string;
};

type ContextApiType = {
  products: Product[];
};

export const ContextApi = createContext<ContextApiType>({
  products: [],
});

export function ContextApiProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://localhost:3333/?query=query%20%7B%0A%20%20allProducts%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20price_in_cents%0A%20%20%20%20image_url%0A%20%20%20%20category%0A%20%20%20%20description%0A%20%20%7D%0A%7D"
      );
      const dataJson = await data.json();
      setProducts(dataJson.data.allProducts);
    };
    fetchData();
  }, []);

  console;

  return (
    <ContextApi.Provider value={{ products }}>{children}</ContextApi.Provider>
  );
}
