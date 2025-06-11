import React from "react";
import FilterCheckboxItem from "./filter-checkbox-item";

export default function FilterStock() {
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Stocks</p>

      <FilterCheckboxItem id="PRE_ORDER" value="Pre Order" type="stock" />
      <FilterCheckboxItem id="IN_STOCK" value="Ready Stock" type="stock" />
    </div>
  );
}
