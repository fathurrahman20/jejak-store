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

  // CHANGE: Responsive grid for loading state
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[30px]">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    // CHANGE: grid-cols-2 di mobile, md:grid-cols-3 di desktop. Gap lebih kecil di mobile.
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-[30px]">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            slug: product.slug,
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
