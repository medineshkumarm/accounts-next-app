import ExportOptions from "@/components/export-options";
import DefaultTable from "@/components/tables/default-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { getDataByShopId1, getDataByShopId2 } from "@/app/_actions/actions";

export async function AnalyticalTableTabs() {
  return (
    <>
      <Tabs defaultValue="all">
        <div className="flex items-center my-2">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="shop1">Shop 1</TabsTrigger>
            <TabsTrigger value="shop2">Shop 2</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all">
          {/* <DefaultTable /> */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium py-2">
                Total all
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center border border-slate-900 bg-slate-900/50 rounded-xl  h-[400px] ">
                <AreaChartComponent />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shop1">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium py-2">
                Total 1
              </CardTitle>
            </CardHeader>
            {/* <CardContent>
              <AnalyticalTableTabs />
            </CardContent> */}
          </Card>
        </TabsContent>
        <TabsContent value="shop2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium py-2">
                Total 2
              </CardTitle>
            </CardHeader>
            {/* <CardContent>
              <AnalyticalTableTabs />
            </CardContent> */}
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { db } from "@/db";
import { getTransactionData } from "@/app/_actions/actions";
import MoreOption from "@/components/dropdown-items";
import AreaChartComponent from "../charts/area-charts";

export async function AnalyticsTable({ transactionsData }: any) {
  //   const calData = await getTransactionData();
  //   const totalAmount = calData.transactionSum;
  //   if (transactionsData == null) {
  //     return "Not data found";
  //   }
const totalAmount = 0.00
  return (
    <Table className="overflow-x-auto ">
      <TableCaption>List of recent transactions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Shop</TableHead>
          <TableHead>more</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactionsData.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell className="md:table-cell">
              {new Date(item.date).toLocaleDateString()}
            </TableCell>
            <TableCell className="md:table-cell">₹ {item.amount}</TableCell>
            <TableCell className="md:table-cell">
              <Badge variant="default" className="bg-emerald-400">
                {/* Cash */}
                {item.paymentType.toUpperCase()}
              </Badge>
            </TableCell>
            <TableCell className="md:table-cell ">
              {item.shopId?.toUpperCase()}
            </TableCell>
            <TableCell className="md:table-cell">
              <MoreOption id={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell colSpan={2}>{totalAmount || "0.00"}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
