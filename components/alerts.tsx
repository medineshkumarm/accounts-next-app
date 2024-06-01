import { deleteTransaction } from "@/app/_actions/actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
export function DeleteAlertDialog({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const [isPending, startTransistion] = useTransition();
  const { toast } = useToast();

  const showDeleteToastOnCick = () => {
    toast({
      title: "transaction deleted sucessfully",
      variant: "destructive",
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to delete this data?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete data from
            our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            onClick={() => {
              startTransistion(async () => {
                await deleteTransaction(id);
                showDeleteToastOnCick();
              });
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
