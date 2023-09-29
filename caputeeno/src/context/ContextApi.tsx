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
  page: number;
  setPage: (page: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
};

export const ContextApi = createContext<ContextApiType>({
  products: [],
  page: 1,
  setPage: (page: number) => {},
  filter: "TODOS OS PRODUTOS",
  setFilter: (filter: string) => {},
});

export function ContextApiProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("TODOS OS PRODUTOS")

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

  return (
    <ContextApi.Provider value={{ products, page, setPage, filter, setFilter }}>{children}</ContextApi.Provider>
  );
}
