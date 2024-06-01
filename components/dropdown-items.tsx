"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState, useTransition } from "react";
import { deleteTransaction } from "@/app/_actions/actions";
import { DeleteAlertDialog } from "./alerts";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export default function MoreOption({ id }: { id: string }) {
  const [isPending, startTransistion] = useTransition();
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleEditClick = () => {
    toast({
      title: "this feature is coming soon",
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-haspopup="true">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">More options for table values</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-1 flex-col gap-1">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={handleEditClick}>Edit</DropdownMenuItem>
        {/* <DropdownMenuItem
          className="bg-red-400 text-white"
          disabled={isPending}
          onClick={() => {
            startTransistion(async () => {
              await deleteTransaction(id);
            });
          }}
        >
          Delete
        </DropdownMenuItem> */}
        <DropdownMenuItem asChild>
          <DeleteAlertDialog id={id}>
            <Button variant="destructive"> delete</Button>
          </DeleteAlertDialog>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
