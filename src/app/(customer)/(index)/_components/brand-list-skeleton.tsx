import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function BrandListSkeleton() {
  const skeletons = [0, 1, 2, 3, 4];
  return (
    <>
      <div className="grid grid-cols-5 gap-[30px]">
        {skeletons.map((index) => (
          <Skeleton
            key={index}
            className="h-[100px] w-[200px] rounded-[20px]"
          />
        ))}
      </div>
    </>
  );
}
