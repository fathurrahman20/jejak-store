"use client";

import { StatusOrder } from "@/generated/prisma";
import { formatToRupiah } from "../../../../../lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type TProduct = {
  name: string;
  imageUrl: string;
};

export type TColumn = {
  id: string;
  product: TProduct[];
  customerName: string;
  price: number;
  status: StatusOrder;
};

export const columns: ColumnDef<TColumn>[] = [
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => {
      const order = row.original;

      return (
        <div className="flex flex-col gap-4 justify-start">
          {order.product.map((item, i) => (
            <div
              key={`${item.name + i}`}
              className="inline-flex items-center gap-5">
              <Image src={item.imageUrl} alt="Product" width={80} height={80} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "customer_name",
    header: "Customer name",
  },
  {
    accessorKey: "price",
    header: "Total Price",
    cell: ({ row }) => formatToRupiah(row.original.price),
  },
  {
    accessorKey: "status",
    header: "Status Order",
    cell: ({ row }) => {
      return (
        <Badge
          variant={
            row.original.status === "FAILED" ? "destructive" : "default"
          }>
          {row.original.status}
        </Badge>
      );
    },
  },
];
