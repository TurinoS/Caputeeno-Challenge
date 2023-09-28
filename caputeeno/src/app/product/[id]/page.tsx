'use client'

import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

interface ProductProps {
  params: {
    id: string,
  }
}

export default function ProductPage({ params }: ProductProps) {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <main>
        
        <h1>página do id: {params.id}</h1>
        
      </main>
    </QueryClientProvider>
  )
}