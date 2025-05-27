"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getImageUrl } from "@/lib/supabase";
import { formatDate, formatToRupiah } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FormDelete from "./_components/form-delete";
import { ProductStock } from "@/generated/prisma";

export type TColumn = {
  id: string;
  name: string;
  imageUrl: string;
  categoryName: string;
  brandName: string;
  price: number;
  totalSales: number;
  stock: ProductStock;
  createdAt: Date;
};

export const columns: ColumnDef<TColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div className="inline-flex items-center gap-5">
          <Image
            src={getImageUrl(product.imageUrl, "products")}
            alt="Product"
            width={80}
            height={80}
          />
          <span>{product.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const product = row.original;

      return formatToRupiah(product.price);
    },
  },
  {
    accessorKey: "stock",
    header: "Status",
    cell: ({ row }) => {
      const product = row.original;

      return <Badge variant={"outline"}>{product.stock}</Badge>;
    },
  },
  {
    accessorKey: "total_sales",
    header: "Total sales",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const product = row.original;

      return formatDate(product.createdAt);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div className="space-x-4 inline-flex">
          <Button size="sm" className="text-white" asChild>
            <Link href={`/dashboard/products/edit/${product.id}`}>
              <Edit className="w-4 h-4 mr-2" /> Edit
            </Link>
          </Button>
          <FormDelete id={product.id} />
        </div>
      );
    },
  },
];
