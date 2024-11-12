"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { revalidatePath } from "next/cache";
import { UpsertTransactionSchema } from "./schema";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const UpsertTransaction = async (params: UpsertTransactionParams) => {
  const { userId } = await auth();
  const transaction = {
    name: params.name,
    amount: params.amount,
    type: params.type,
    category: params.category,
    paymentMethod: params.paymentMethod,
    createdAt: params.date,
  };
  UpsertTransactionSchema.parse(transaction);

  if (!userId) {
    throw new Error("Unauthorized");
  }

  await db.transaction.upsert({
    where: {
      id: params.id,
    },
    update: { ...transaction, userId },
    create: { ...transaction, userId },
  });

  revalidatePath("/transactions");
};
