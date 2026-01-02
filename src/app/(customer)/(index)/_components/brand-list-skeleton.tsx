import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function BrandListSkeleton() {
  const skeletons = [0, 1, 2, 3, 4];
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-[30px]">
        {skeletons.map((index) => (
          <Skeleton key={index} className="h-[100px] w-full rounded-[20px]" />
        ))}
      </div>
    </>
  );
}
