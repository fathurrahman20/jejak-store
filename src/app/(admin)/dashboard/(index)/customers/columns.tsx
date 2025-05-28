import { ColumnDef } from "@tanstack/react-table";

export type TColumn = {
  id: string;
  name: string;
  email: string;
  totalTransactions: number;
};

export const columns: ColumnDef<TColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "totalTransactions",
    header: "Total transactions",
  },
];
