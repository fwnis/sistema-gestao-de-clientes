"use client";

import { ColumnDef } from "@tanstack/react-table";
import { UserDataProps } from "@/types/UserDataProps";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CollaboratorDropdown from "./CollaboratorDropdown";

export const CollaboratorsTableColumns: ColumnDef<UserDataProps>[] = [
  {
    accessorKey: "id",
  },
  {
    accessorKey: "avatar",
  },
  {
    accessorKey: "nome",
    header: () => <div className="ml-4">Nome</div>,
    cell: ({ row }) => {
      return (
        <div className="ml-4 flex items-center gap-3">
          <Avatar>
            <AvatarImage src={row.getValue("avatar")} />
            <AvatarFallback>EF</AvatarFallback>
          </Avatar>

          {row.getValue("nome")}
        </div>
      );
    },
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
    cell: ({ row }) => {
      const value = row.getValue("telefone") as string;
      const formatted = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

      return <div>{formatted}</div>;
    },
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return <CollaboratorDropdown row={row} />;
    },
  },
];