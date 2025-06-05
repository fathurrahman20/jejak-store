import React from "react";
import ProductCard from "../../_components/product-card";
import { getProducts } from "@/app/(admin)/dashboard/(index)/products/lib/data";
import { getImageUrl } from "@/lib/supabase";

export default async function ProductList() {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-3 gap-[30px]">
      {products.map((product) => (
        <ProductCard
          key={`${product.name + product.id}`}
          product={{
            categoryName: product.categoryName,
            id: product.id,
            imageUrl: getImageUrl(product.imageUrl, "products"),
            name: product.name,
            price: Number(product.price),
          }}
        />
      ))}
    </div>
  );
}
