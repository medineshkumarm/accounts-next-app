import { db } from "@/db";
import { getTransactionData } from "@/app/_actions/actions";
import MoneyCard from "@/components/money-card";
import TableTabs from "@/components/table-tabs";

import { Suspense } from "react";
import { SkeletonCard } from "@/components/skeleton-variants/table-skeleton";

export default async function page() {
 

  const calData = (await getTransactionData()) || null;
  if (calData == null) {
    return "Something went wrong";
  }
  console.log(new Date(new Date().setDate(new Date().getDate() - 0)));
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 ">
      <div className="grid gap-4 grid-cols-2 md:gap-8 lg:grid-cols-4 ">
        <Suspense fallback={<SkeletonCard />}>
          <MoneyCard
            Title="Revenue this week"
            totalAmount={calData.lastWeekSum._sum.amount || "₹ 0.00"}
          />{" "}
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <MoneyCard
            Title="Revenue this month"
            totalAmount={calData.lastMonthSum._sum.amount || "₹ 0.00"}
          />{" "}
        </Suspense>

        <Suspense fallback={<SkeletonCard />}>
          <MoneyCard
            Title="Today Revenue"
            totalAmount={calData.todaySum._sum.amount || "₹ 0.00"}
          />
        </Suspense>
      </div>
      <TableTabs />
    </main>
  );
}
