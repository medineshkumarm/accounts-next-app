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

export default async function DefaultTable({ transactionsData }: any) {
  const calData = (await getTransactionData()) || undefined;
  const totalAmount = 0.0 || calData?.transactionSum;
  if (transactionsData == null) {
    return "Not data found";
  }

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
            <TableCell className="md:table-cell ">
              <Badge variant={item.paymentType}>
                {/* Cash */}
                {item.paymentType}
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
          <TableCell colSpan={2}>{totalAmount}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
