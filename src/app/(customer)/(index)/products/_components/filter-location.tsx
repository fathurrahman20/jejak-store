import { getLocations } from "@/app/(admin)/dashboard/(index)/locations/lib/data";
import React from "react";
import FilterCheckboxItem from "./filter-checkbox-item";

export default async function FilterLocation() {
  const locations = await getLocations();
  return (
    <div className="flex flex-col gap-[14px]">
      <p className="font-semibold leading-[22px]">Location</p>
      {locations.map((location) => (
        <FilterCheckboxItem
          key={location.id}
          id={location.id}
          value={location.name}
          type="location"
        />
      ))}
    </div>
  );
}
