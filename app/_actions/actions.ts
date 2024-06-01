"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// export async function createTransaction(formData: FormData) {
//  "use server";
//   const result = CreatetransactionSchema.safeParse(
//     Object.fromEntries(formData.entries())
//   );
//   if (result.success === false) {
//     return result.error.formErrors.fieldErrors;
//   }
//   console.log(formData);

//   const data = result.data;
//   await db.transaction.create({
//     data: {
//       date: data.date,
//       amount: data.amount,
//       paymentType: data.paymentType,
//       shopId: data.shop,
//     },
//   });
// }
// export const getTransaction = db.transaction.findMany({});

// export async function getTransaction() {
//   await db.transaction.findMany({
//     select: {
//       id: true,
//       date: true,
//       amount: true,
//       paymentType: true,
//       shopId: true,
//       shop: true,
//     },

//     orderBy: { date: "desc" },
//   });
// }
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";

export async function createTransaction(formData: FormData) {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/auth/login");
  }
  
  const Fdate = formData.get("date");
  const Famount = formData.get("amount");
  const FpaymentType = formData.get("paymentType");
  const Fshopno = formData.get("shopno");
  await db.transaction.create({
    data: {
      date: new Date(Fdate as string),
      amount: Number(Famount),
      paymentType: FpaymentType as "cash" | "paytm",
      shopId: Fshopno as string,
    },
  });
  revalidatePath("/admin/dashboard");
}

export async function getTransactionData() {
  try {
    const data = await db.transaction.aggregate({
      _sum: { amount: true },
      _count: true,
    });
    const todaySum = await db.transaction.aggregate({
      where: {
        date: {
          gte: new Date(new Date().setDate(new Date().getDate() - 0)),
        },
      },
      _sum: {
        amount: true,
      },
    });
    const lastWeekSum = await db.transaction.aggregate({
      where: {
        date: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      },
      _sum: {
        amount: true,
      },
    });

    const lastMonthSum = await db.transaction.aggregate({
      where: {
        date: {
          gte: new Date(new Date().setDate(new Date().getDate() - 30)),
        },
      },
      _sum: {
        amount: true,
      },
    });
    return {
      transactionSum: data._sum.amount,
      totalCount: data._count,
      todaySum,
      lastWeekSum,
      lastMonthSum,
    };
  } catch (error: any) {
    console.log({ error: error.message });
  }
}

export async function getTransactionDataByShopId({ id }: { id: string }) {
  try {
    const data = await db.transaction.aggregate({
      _sum: { amount: true },
      _count: true,
    });
    const todaySum = await db.transaction.aggregate({
      where: {
        date: {
          gte: new Date(new Date().setDate(new Date().getDate() - 0)),
        },
        shopId: id,
      },
      _sum: {
        amount: true,
      },
    });
    const lastWeekSum = await db.transaction.aggregate({
      where: {
        date: {
          gte: new Date(new Date().setDate(new Date().getDate() - 7)),
        },
      },
      _sum: {
        amount: true,
      },
    });

    const lastMonthSum = await db.transaction.aggregate({
      where: {
        date: {
          gte: new Date(new Date().setDate(new Date().getDate() - 30)),
        },
      },
      _sum: {
        amount: true,
      },
    });
    return {
      transactionSum: data._sum.amount,
      totalCount: data._count,
      todaySum,
      lastWeekSum,
      lastMonthSum,
    };
  } catch (error: any) {
    console.log({ error: error.message });
  }
}

export async function getDataById({ id }: { id: string }) {
  const getData = await db.transaction.findFirst({
    where: { id },
    select: {
      id: true,
      date: true,
      amount: true,
      paymentType: true,
      shopId: true,
      shop: true,
    },
  });
  return getData;
}
export async function editTransaction({ id }: any) {
  console.log("editing ...");
  const currData = getDataById({ id });
  currData.then((item) => console.table(item));
}

export async function deleteTransaction(id: string) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  if (!(await isAuthenticated())) {
    redirect("/auth/login");
  }
 
  const currTransaction = await db.transaction.delete({ where: { id } });
  if (currTransaction == null) return notFound();
  revalidatePath("/admin/dashboard");
}

export async function getDataByShopId1() {
  const groupByShopId = await db.transaction.findMany({
    where: {
      shopId: "1",
    },
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
  // console.log(groupByShopId);
  return groupByShopId;
}
export async function getDataByShopId2() {
  const groupByShopId = await db.transaction.findMany({
    where: {
      shopId: "2",
    },
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
  return groupByShopId;
}
