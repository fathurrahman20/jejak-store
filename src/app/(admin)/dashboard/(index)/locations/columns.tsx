"use client";

import { Button } from "@/components/ui/button";
import { Location } from "@/generated/prisma";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Link from "next/link";
import FormDelete from "./_component/form-delete";

export const columns: ColumnDef<Location>[] = [
  {
    accessorKey: "name",
    header: "Location Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const location = row.original;

      return (
        <div className="space-x-4 inline-flex">
          <Button size="sm" asChild>
            <Link
              href={`/dashboard/locations/edit/${location.id}`}
              className="text-white">
              <Edit className="w-4 h-4 mr-2" /> Edit
            </Link>
          </Button>
          <FormDelete id={location.id} />
        </div>
      );
    },
  },
];
