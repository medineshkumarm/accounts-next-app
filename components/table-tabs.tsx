import ExportOptions from "@/components/export-options";
import DefaultTable from "@/components/tables/default-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { db } from "@/db";
import { getDataByShopId1, getDataByShopId2 } from "@/app/_actions/actions";

export default async function TableTabs() {
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
  // console.table(databyShopId1)
  return (
    <>
      <Tabs defaultValue="all">
        <div className="flex items-center">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="shop1">Shop 1</TabsTrigger>
            <TabsTrigger value="shop2">Shop 2</TabsTrigger>
          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <ExportOptions />
          </div>
        </div>

        <TabsContent value="all">
          {/* <DefaultTable /> */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium py-2">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DefaultTable transactionsData={getTransaction} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shop1">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium py-2">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <DefaultTable transactionsData={databyShopId1} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="shop2">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium py-2">
                Total Revenue
              </CardTitle>
            </CardHeader>
            <CardContent  className="dark:bg-slate-950/50">
              <DefaultTable transactionsData={databyShopId2} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
