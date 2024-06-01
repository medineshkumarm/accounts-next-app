"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DialogClose } from "@radix-ui/react-dialog";
import { PlusCircle } from "lucide-react";
import React from "react";
import { useFormStatus, useFormState } from "react-dom";
import { useToast } from "./ui/use-toast";

export function TransactionDialog({ createTransaction }: any) {
  const { toast } = useToast();
  const { pending, data } = useFormStatus();
  const handleSave = () => {
    if (!data) {
      toast({
        title: "🎉 transaction added sucessfully",
        variant: "success",
      });
    }
  };
  // to get formdata
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="default" className="mx-2">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Transaction
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Add your daily transaction</DialogTitle>
            <DialogDescription>
              Make sure click submit before closing the box
            </DialogDescription>
          </DialogHeader>
          {/* <form action={createTransaction} className="flex flex-col gap-2"> */}
          <form action={createTransaction} className="grid gap-4 py-1">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date">Date</Label>
              <Input
                type="date"
                placeholder="select a date"
                name="date"
                required={true}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount">Amount</Label>
              <Input
                type="amount"
                placeholder="select a amount"
                name="amount"
                required={true}
                className="col-span-3"
              />
            </div>
            {/* <div className="flex gap-2"> */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="paymentType">Payment type</Label>
              <Select name="paymentType" required={true}>
                <SelectTrigger className="w-[180px] my-1">
                  <SelectValue placeholder="select payment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cash">cash</SelectItem>
                  <SelectItem value="paytm">paytm</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="shopno">Shop No</Label>
              <Select name="shopno" required={true}>
                <SelectTrigger className="w-[180px] my-1">
                  <SelectValue placeholder="select shop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">shop 1</SelectItem>
                  <SelectItem value="2">shop 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* </div> */}
            <DialogFooter>
              <DialogClose>
                <Button
                  type="submit"
                  className="my-4"
                  disabled={pending}
                  onClick={handleSave}
                >
                  {pending ? "saving..." : "save"}
                </Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
