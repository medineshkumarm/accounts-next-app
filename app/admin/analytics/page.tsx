import { getDataByShopId1, getDataByShopId2 } from "@/app/_actions/actions";
import AreaChartComponent from "@/components/charts/area-charts";
import DefaultTable from "@/components/tables/default-table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/db";

import React from "react";

export default async function page() {
  const getTransaction = await db.transaction.findMany({
    // take: 10,//later for pagination
    select: {
      id: true,
      date: true,
      amount: true,
      paymentType: true,
      shopId: true,
      shop: true,
    },
    orderBy: { date: "desc" },
  });

  const databyShopId1 = (await getDataByShopId1()) || null;
  const databyShopId2 = (await getDataByShopId2()) || null;

  if (databyShopId1 == null || databyShopId1 == null) {
    return "no data found";
  }
  return (
    <div className="grid ">
      <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl  ">
        <Card className=" w-full h-screen">
          <CardHeader>
            <CardTitle>Performance</CardTitle>
            <CardDescription>
              <p>₹ 15234 </p>
              <span className="text-emerald-400 mx-1">₹ 789 (4.1%) </span>
              <span>past x hours </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl  h-[400px] ">
              <AreaChartComponent />
            </div>
          </CardContent>
          <CardFooter>
            <DefaultTable transactionsData={databyShopId1} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
