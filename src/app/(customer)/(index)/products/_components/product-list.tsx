"use client";

import React from "react";
import ProductCard from "../../_components/product-card";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../lib/data";
import { useFilter } from "@/hooks/useFilter";

export default function ProductList() {
  const { filter } = useFilter();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", filter],
    queryFn: () => fetchProducts(filter),
  });
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-[30px]">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-[30px]">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            categoryName: product.categoryName,
            id: product.id,
            imageUrl: product.imageUrl,
            name: product.name,
            price: Number(product.price),
          }}
        />
      ))}
    </div>
  );
}
