"use client";

import { Button } from "@/components/ui/button";
import { Brand } from "@/generated/prisma";
import { getImageUrl } from "@/lib/supabase";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<Brand>[] = [
  {
    accessorKey: "name",
    header: "Brand",
    cell: ({ row }) => {
      const brand = row.original;

      return (
        <div className="inline-flex items-center gap-5">
          <Image
            src={getImageUrl(brand.logo_url)}
            alt="Product"
            width={80}
            height={80}
          />
          <span>{brand.name}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const brand = row.original;

      return (
        <div className="space-x-4 inline-flex">
          <Button size="sm" asChild className="text-white">
            <Link href={`/dashboard/brands/edit/${brand.id}`}>
              <Edit className="w-4 h-4 mr-2" /> Edit
            </Link>
          </Button>
        </div>
      );
    },
  },
];
