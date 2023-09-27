'use client'

import Filter from "@/components/Filter"
import Pagination from "@/components/Pagination"
import ProductCard from "@/components/ProductCard";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main>
        <Filter />
        <Pagination />
        <ProductCard />
        <h1>Hello World</h1>
        
      </main>
    </QueryClientProvider>
  )
}
