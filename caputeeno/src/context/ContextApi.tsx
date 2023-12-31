"use client";

import { createContext, ReactNode, useState, useEffect } from "react";

export type Product = {
  id: string;
  name: string;
  price_in_cents: number;
  image_url: string;
  category: string;
  description: string;
  sales: number;
  created_at: string;
  quantity: number;
};

type ContextApiType = {
  products: Product[];
  cartItems: Product[];
  page: number;
  setPage: (page: number) => void;
  search: string,
  setSearch: (search: string) => void,
  filter: string;
  setFilter: (filter: string) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  addToCart: (product: Product, quantity: number) => void;
  cartQuantity: number;
  cartPrice: number;
  setCartPrice: (price: number) => void;
  reRender: boolean;
  setReRender: (e: boolean) => void;
};

export const ContextApi = createContext<ContextApiType>({
  products: [],
  cartItems: [],
  page: 1,
  setPage: () => {},
  search: "",
  setSearch: () => {},
  filter: "TODOS OS PRODUTOS",
  setFilter: () => {},
  sortBy: "",
  setSortBy: () => {},
  addToCart: () => {},
  cartQuantity: 0,
  cartPrice: 0,
  setCartPrice: () => {},
  reRender: false,
  setReRender: () => {},
});

export function ContextApiProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("TODOS OS PRODUTOS");
  const [sortBy, setSortBy] = useState("");
  const [reRender, setReRender] = useState(false);

  const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const [cartQuantity, setCartQuantity] = useState(cartItems.reduce((total: number, item: Product) => total + item.quantity, 0));
  const calculateTotalPrice = (item: Product) => item.price_in_cents * item.quantity;
  const [cartPrice, setCartPrice] = useState(cartItems.reduce((total: number, item: Product) => total + calculateTotalPrice(item), 0) / 100);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "http://localhost:3333/?query=query%20%7B%0A%20%20allProducts%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20price_in_cents%0A%20%20%20%20image_url%0A%20%20%20%20category%0A%20%20%20%20description%0A%20%20%20%20sales%0A%20%20%20%20created_at%0A%20%20%7D%0A%7D"
      );
      const dataJson = await data.json();
      setProducts(dataJson.data.allProducts);
    };
    fetchData();
  }, [reRender]);

  const addToCart = (product: Product, quantity: number) => {
    let cartItems = localStorage.getItem('cartItems');
  
    if (!cartItems) {
      cartItems = '[]';
    }

    const cartItemsArray = JSON.parse(cartItems);
  
    const existingProduct = cartItemsArray.find((item: Product) => item.id === product.id);
  
    if (existingProduct) {      
      existingProduct.quantity += quantity;
    } else {
      cartItemsArray.push({ ...product, quantity });
    }
  
    localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));

    const newCartQuantity = cartItemsArray.reduce((total: number, item: Product) => total + item.quantity, 0);
    const newCartPrice= cartItemsArray.reduce((total: number, item: Product) => total + calculateTotalPrice(item), 0) / 100;
    setCartQuantity(newCartQuantity);
    setCartPrice(newCartPrice);
  }

  return (
    <ContextApi.Provider value={{ products, cartItems, page, setPage, search, setSearch, filter, setFilter, sortBy, setSortBy, addToCart, cartQuantity, cartPrice, setCartPrice, reRender, setReRender }}>{children}</ContextApi.Provider>
  );
}
