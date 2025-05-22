"use client";

import { Button } from "@/components/ui/button";
import { Category } from "@/generated/prisma";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Category Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div className="space-x-4 inline-flex">
          <Button size="sm" asChild>
            <Link
              href="{`/dashboard/categories/edit/${category.id}`}"
              className="text-white">
              <Edit className="w-4 h-4 mr-2" /> Edit
            </Link>
          </Button>
          <Button size="sm" asChild variant="destructive">
            <Link
              href={`/dashboard/categories/delete/${category.id}`}
              className="text-white">
              <Trash className="w-4 h-4 mr-2" /> Delete
            </Link>
          </Button>
        </div>
      );
    },
  },
];
