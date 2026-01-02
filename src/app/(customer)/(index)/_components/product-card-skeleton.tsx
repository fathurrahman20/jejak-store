import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProductCardSkeleton() {
  const skeletons = [0, 1, 2, 3, 4];
  return (
    <>
      {/* CHANGE: sesuaikan grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-[30px]">
        {skeletons.map((index) => (
          <div className="flex flex-col space-y-3" key={index}>
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
