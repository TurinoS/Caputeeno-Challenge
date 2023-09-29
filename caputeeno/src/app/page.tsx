"use client";

import Filter from "@/components/Filter";
import Pagination from "@/components/Pagination";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main>
      <Filter />
      <Pagination />
      <ProductList />
    </main>
  );
}
