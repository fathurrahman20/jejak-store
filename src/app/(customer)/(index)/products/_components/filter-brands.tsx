import { getBrands } from "@/app/(admin)/dashboard/(index)/brands/lib/data";
import React from "react";
import FilterCheckboxItem from "./filter-checkbox-item";

export default async function FilterBrands() {
  const brands = await getBrands();
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Brands</p>
      {brands.map((brand) => (
        <FilterCheckboxItem
          key={brand.id}
          id={brand.id}
          value={brand.name}
          type="brand"
        />
      ))}
    </div>
  );
}
