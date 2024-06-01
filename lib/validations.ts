// utils/validation.ts
// import { z } from "zod";

// export const transactionSchema = z.object({
//   date: z
//     .string()
//     .refine((val) => !isNaN(Date.parse(val)), {
//       message: "Invalid date format",
//     }),
//   amount: z.number().positive(),
//   paymentType: z.enum(["CASH", "PAYTM"]),
//   shopId: z.string().optional(),
// });


// import { z } from "zod";
// export const CreatetransactionSchema = z.object({
//   date: z.date(),
//   amount: z.coerce.number().int().min(1),
//   paymentType: z.enum(["cash", "paytm"]),
//   shop: z.string().min(1),
// });
// export type CreatetransactionSchema = z.infer<typeof CreatetransactionSchema>;