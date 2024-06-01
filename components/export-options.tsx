import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import { createTransaction } from "@/app/_actions/actions";
import { TransactionDialog } from "./dialog";
export default function ExportOptions() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="sm" variant="outline" className="h-8 gap-1 mx-2">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Export File Format</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>excel</DropdownMenuItem>
          <DropdownMenuItem>pdf</DropdownMenuItem>
          {/* <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
      <TransactionDialog createTransaction={createTransaction} />
    </div>
  );
}
