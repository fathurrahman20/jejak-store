import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductCardSkeleton() {
  const skeletons = [0, 1, 2, 3, 4];
  return (
    <>
      <div className="grid grid-cols-5 gap-[30px]">
        {skeletons.map((index) => (
          <div className="flex flex-col space-y-3" key={index}>
            <Skeleton className="h-[125px] w-[205px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[180px]" />
              <Skeleton className="h-4 w-[180px]" />
              <Skeleton className="h-4 w-[180px]" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
