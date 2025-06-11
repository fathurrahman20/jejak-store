import { getCategories } from "@/app/(admin)/dashboard/(index)/categories/lib/data";
import React from "react";
import FilterCheckboxItem from "./filter-checkbox-item";

export default async function FilterCategories() {
  const categories = await getCategories();
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Categories</p>
      {categories.map((category) => (
        <FilterCheckboxItem
          key={category.id}
          id={category.id}
          value={category.name}
          type="category"
        />
      ))}
    </div>
  );
}
