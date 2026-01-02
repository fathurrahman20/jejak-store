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
        <h2 className="font-bold text-xl md:text-2xl leading-[34px]">
          {title}
        </h2>
        {isShowDetail && (
          <a
            href="#"
            className="p-[10px_16px] md:p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold text-sm md:text-base text-nowrap"
          >
            Explore All
          </a>
        )}
      </div>
      {/* CHANGE: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-[30px]">
        {products.map((product) => (
          <ProductCard
            key={`${product.name + product.id}`}
            product={{
              categoryName: product.category.name,
              slug: product.slug,
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
