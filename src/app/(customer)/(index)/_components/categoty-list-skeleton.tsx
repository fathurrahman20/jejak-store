import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function CategoryListSkeleton() {
  const skeletons = [0, 1, 2, 3];
  return (
    // CHANGE: sesuaikan grid skeleton dengan component asli
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[40px]">
      {skeletons.map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full shrink-0" />
          <div className="space-y-2 w-full">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
