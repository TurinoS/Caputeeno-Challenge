"use client";

import { ContextApi } from "@/context/ContextApi";
import { useContext } from "react";

export default function ProductPage() {
  const { products } = useContext(ContextApi);

  return (
    <main>
        Cart Page
    </main>
  );
}
