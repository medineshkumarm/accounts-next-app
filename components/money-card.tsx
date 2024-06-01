import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, IndianRupee } from "lucide-react";

import { getTransactionData } from "@/app/_actions/actions";

export default async function MoneyCard({
  Title,
  Icon,
  percentage,
  totalAmount,
}: any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {Title || "Total Revenue"}
        </CardTitle>
        {Icon || <IndianRupee className="h-4 w-4 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {"₹"} {totalAmount || " ₹ 45, 231.89"}
        </div>
        {/* <p className="text-xs text-muted-foreground">
          {percentage || "+20.1"}% from last month
        </p> */}
      </CardContent>
    </Card>
  );
}
