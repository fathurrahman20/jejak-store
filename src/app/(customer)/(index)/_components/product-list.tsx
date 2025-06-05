import { ReactNode } from "react";
import { getProducts } from "../lib/data";
import ProductCard from "./product-card";

interface ProductListProps {
  title: ReactNode;
  isShowDetail?: boolean;
}

export default async function ProductList({
  title,
  isShowDetail = true,
}: ProductListProps) {
  const products = await getProducts();
  return (
    <div id="picked" className="flex flex-col gap-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-2xl leading-[34px]">{title}</h2>
        {isShowDetail && (
          <a
            href="#"
            className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold">
            Explore All
          </a>
        )}
      </div>
      <div className="grid grid-cols-5 gap-[30px]">
        {products.map((product) => (
          <ProductCard
            key={`${product.name + product.id}`}
            product={{
              categoryName: product.category.name,
              id: product.id,
              imageUrl: product.imageUrl,
              name: product.name,
              price: Number(product.price),
            }}
          />
        ))}
      </div>
    </div>
  );
}
