"use client";

import { ProductStock } from "@/generated/prisma";
import { useFilter } from "@/hooks/useFilter";
import React, { ChangeEvent } from "react";

interface FilterChechboxItemsProps {
  id: string;
  value: string;
  label?: string;
  type?: "stock" | "brand" | "location" | "category";
}
export default function FilterCheckboxItem({
  id,
  value,
  label,
  type,
}: FilterChechboxItemsProps) {
  const { filter, setFilter } = useFilter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (type) {
      case "stock":
        if (e.target.checked) {
          setFilter({
            stock: [...(filter?.stock ?? []), e.target.value as ProductStock],
          });
        } else {
          setFilter({
            stock: filter?.stock?.filter((stock) => stock !== e.target.value),
          });
        }
        break;
      case "brand":
        if (e.target.checked) {
          setFilter({ brands: [...(filter?.brands ?? []), e.target.value] });
        } else {
          setFilter({
            brands: filter?.brands?.filter((brand) => brand !== e.target.value),
          });
        }
        break;
      case "location":
        if (e.target.checked) {
          setFilter({
            locations: [...(filter?.locations ?? []), e.target.value],
          });
        } else {
          setFilter({
            locations: filter?.locations?.filter(
              (location) => location !== e.target.value
            ),
          });
        }
        break;
      case "category":
        if (e.target.checked) {
          setFilter({
            categories: [...(filter?.categories ?? []), e.target.value],
          });
        } else {
          setFilter({
            categories: filter?.categories?.filter(
              (category) => category !== e.target.value
            ),
          });
        }
        break;
      default:
        break;
    }
  };
  return (
    <label
      htmlFor={id + value}
      className="font-semibold flex items-center gap-3">
      <input
        id={id + value}
        type="checkbox"
        name=""
        value={id}
        onChange={handleChange}
        className="w-6 h-6 flex shrink-0 appearance-none checked:border-[3px] checked:border-solid checked:border-white rounded-md checked:bg-[#0D5CD7] ring-1 ring-[#0D5CD7]"
      />
      <span>{label ? label : value}</span>
    </label>
  );
}
