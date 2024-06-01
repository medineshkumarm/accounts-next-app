"use client";
import { Button } from "./ui/button";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export default function Toast() {
  const { toast } = useToast();
  const handleClick = () => {
    toast({
      title: "this is title",
      description: "this is desc",
      action: <ToastAction altText="goto schedule to undo">Undo</ToastAction>,
    });
  };
  return <Button onClick={handleClick}>click me</Button>;
}

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "Scheduled: Catch up ",
          description: "Friday, February 10, 2023 at 5:57 PM",
          action: (
            <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
  )
}
