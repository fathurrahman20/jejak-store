import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function CategoryListSkeleton() {
  const skeletons = [0, 1, 2, 3];
  return (
    <div className="grid grid-cols-4 gap-x-[40px]">
      {skeletons.map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[190px]" />
            <Skeleton className="h-4 w-[190px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
