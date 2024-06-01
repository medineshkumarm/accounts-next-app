import { LoaderCircle } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      {" "}
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
