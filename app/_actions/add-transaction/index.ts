"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";
import { addTransactionSchema } from "./schema";

interface addTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: addTransactionParams) => {
  const { userId } = await auth();
  const transaction = {
    name: params.name,
    amount: params.amount,
    type: params.type,
    category: params.category,
    paymentMethod: params.paymentMethod,
    createdAt: params.date,
  };
  addTransactionSchema.parse(transaction);

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.create({
    data: { ...transaction, userId },
  });

  revalidatePath("/transactions");
};
